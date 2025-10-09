import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useTranslation } from "react-i18next";

export default function Checkout() {
  const { t } = useTranslation();
  const { cartItems, total } = useCart();

  const [formData, setFormData] = useState({
    firstName: "",
    company: "",
    address: "",
    apartment: "",
    city: "",
    phone: "",
    email: "",
    paymentMethod: "bank",
    coupon: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    console.log("Products in Cart:", cartItems);
    alert(t("det checkout.success"));
  };

  return (
    <div className="container px-4 py-10 mx-auto">
      {/* breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-6 text-gray-600">
        <ol className="flex gap-2">
          <li>
            <Link to="/" className="mx-3 hover:text-red-600 hover:underline">
              {t("det checkout.breadcrumb.home")}
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link to="/Cart" className="mx-3 hover:text-red-600 hover:underline">
              {t("det checkout.breadcrumb.cart")}
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link
              to="/Products"
              className="mx-3 hover:text-red-600 hover:underline"
            >
              {t("det checkout.breadcrumb.products")}
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link
              to="/Account"
              className="mx-3 hover:text-red-600 hover:underline"
            >
              {t("det checkout.breadcrumb.account")}
            </Link>
          </li>
          <li>/</li>
          <li aria-current="page">{t("det checkout.breadcrumb.checkout")}</li>
        </ol>
      </nav>

      <form onSubmit={handleSubmit} className="flex flex-col gap-10 md:flex-row">
        {/* form left */}
        <div className="flex flex-col w-full gap-6 md:w-1/2">
          <h2 className="text-2xl font-medium text-right md:text-4xl">
            {t("det checkout.title")}
          </h2>

          <div className="flex flex-col gap-4">
            {[
              ["firstName", t("det checkout.firstName"), true],
              ["company", t("det checkout.company"), false],
              ["address", t("det checkout.address"), true],
              ["apartment", t("det checkout.apartment"), false],
              ["city", t("det checkout.city"), true],
              ["phone", t("det checkout.phone"), true],
              ["email", t("det checkout.email"), true],
            ].map(([name, label, required]) => (
              <label key={name} className="flex flex-col gap-1">
                <span className="text-right text-gray-500">{label}</span>
                <input
                  type={name === "email" ? "email" : "text"}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  required={required}
                  className="px-4 py-3 bg-gray-100 rounded outline-none focus:border focus:border-gray-300"
                />
              </label>
            ))}
          </div>
        </div>

        {/* order summary */}
        <div className="flex flex-col w-full gap-6 md:w-1/2">
          <div className="p-4 border rounded-md">
            <h3 className="mb-4 text-lg font-medium text-right">
              {t("det checkout.orderSummary")}
            </h3>
            {cartItems.length === 0 ? (
              <p className="text-gray-500">{t("det checkout.emptyCart")}</p>
            ) : (
              <ul className="space-y-2">
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between text-sm"
                  >
                    <span>${item.price * item.quantity}</span>
                    <div className="flex items-center gap-3">
                      <span>
                        {item.name} × {item.quantity}
                      </span>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="object-contain w-12 h-12 bg-gray-100 rounded"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* الأسعار */}
          <div className="flex justify-between pb-2 border-b">
            <p>${total.toFixed(2)}</p>
            <p>{t("det checkout.subtotal")}</p>
          </div>

          <div className="flex justify-between pb-2 border-b">
            <p>{t("det checkout.shippingFree")}</p>
            <p>{t("det checkout.shipping")}</p>
          </div>

          <div className="flex justify-between pb-4 border-b">
            <p>${total.toFixed(2)}</p>
            <p>{t("det checkout.total")}</p>
          </div>

          {/* طرق الدفع */}
          <div>
            <p className="mb-2 font-medium text-right">
              {t("det checkout.paymentMethods")}
            </p>

            <label className="flex items-center justify-between p-3 mb-3 border rounded-md cursor-pointer">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="bank"
                  checked={formData.paymentMethod === "bank"}
                  onChange={handleChange}
                />
                <span>{t("det checkout.bankPayment")}</span>
              </div>
              <img
                src="../assets/payment.webp"
                alt="paymentMethod"
                height="28"
                width="120"
                className="ml-3"
              />
            </label>

            <label className="flex items-center gap-3 p-3 border rounded-md cursor-pointer">
              <input
                type="radio"
                name="paymentMethod"
                value="cashOnDelivery"
                checked={formData.paymentMethod === "cashOnDelivery"}
                onChange={handleChange}
              />
              <span>{t("det checkout.cashOnDelivery")}</span>
            </label>
          </div>

          {/* القسيمة */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              name="coupon"
              placeholder={t("det checkout.couponPlaceholder")}
              value={formData.coupon}
              onChange={handleChange}
              className="border rounded-md p-3 w-[200px]"
            />
            <button
              type="button"
              className="px-6 py-3 text-white transition bg-red-600 rounded hover:bg-red-500"
            >
              {t("det checkout.applyCoupon")}
            </button>
          </div>

          <button
            type="submit"
            className="px-6 py-3 mt-4 text-white transition bg-red-600 rounded hover:bg-red-500"
          >
            {t("det checkout.submitOrder")}
          </button>
        </div>
      </form>
    </div>
  );
}
