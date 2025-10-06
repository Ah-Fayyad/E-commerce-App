import { MdOutlineDeleteForever } from "react-icons/md";
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useTranslation } from "react-i18next";

export default function Checkout() {
  const { cartItems, removeFromCart, updateQuantity, total } = useCart();
  const { t } = useTranslation();

  return (
    <div className="p-6 md:px-14">
      {/* Breadcrumb */}
      <div role="presentation">
        <nav aria-label="breadcrumb">
          <ol className="flex gap-2 py-5 text-gray-600">
            <li>
              <Link
                to="/"
                className="mx-3 duration-300 ease-in-out transform hover:text-red-600 hover:underline hover:underline-offset-8"
              >
                {t("checkout.breadcrumb.home")}
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                to="/Cart"
                className="mx-3 duration-300 ease-in-out transform hover:text-red-600 hover:underline hover:underline-offset-8"
              >
                {t("checkout.breadcrumb.cart")}
              </Link>
            </li>
          </ol>
        </nav>
      </div>

      {/* Titles */}
      <div className="flex flex-row items-center justify-between px-2 py-6 rounded shadow md:gap-20">
        <h2 className="text-base">{t("checkout.product")}</h2>
        <h2 className="ml-10 text-base">{t("checkout.price")}</h2>
        <h2 className="ml-10 text-base">{t("checkout.quantity")}</h2>
        <h2 className="hidden text-base md:flex">{t("checkout.subtotal")}</h2>
        <h2 className="text-base"></h2>
      </div>

      {/* Products */}
      {cartItems.length === 0 ? (
        <p className="mt-6 text-lg text-center">{t("checkout.empty_cart")}</p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-row items-center justify-between py-4 border-b"
          >
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 rounded" />
              <p>{item.name}</p>
            </div>
            <p>${item.price}</p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="px-2 border"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="px-2 border"
              >
                +
              </button>
            </div>
            <p className="hidden md:flex">${item.price * item.quantity}</p>
            <button
              onClick={() => removeFromCart(item.id)}
              className="ml-4 text-3xl text-red-600 hover:bg-slate-200 hover:rounded-full"
            >
              <MdOutlineDeleteForever />
            </button>
          </div>
        ))
      )}

      {/* Buttons */}
      <div className="flex items-center justify-between mt-6">
        <button className="px-6 py-3 border rounded-md hover:shadow">
          {t("checkout.update_cart")}
        </button>

        <Link to="/">
          <button className="px-6 py-3 border rounded-md hover:shadow">
            {t("checkout.continue_shopping")}
          </button>
        </Link>
      </div>

      {/* Coupon + Total */}
      <div className="flex flex-col items-center justify-between gap-8 mt-8 md:flex-row">
        {/* Coupon */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder={t("checkout.coupon_placeholder")}
            className="border rounded-md p-3 w-[160px] lg:w-[260px]"
          />
          <button className="px-6 py-3 text-white bg-red-600 rounded hover:bg-red-500">
            {t("checkout.apply_coupon")}
          </button>
        </div>

        {/* Totals */}
        <div className="flex flex-col gap-9 border py-9 px-9 md:w-[470px]">
          <p className="text-xl font-semibold">{t("checkout.cart_total")}</p>
          <div className="flex justify-between mt-4 border-b">
            <p className="text-xl">{t("checkout.total_label")}</p>
            <p className="text-xl">${total}</p>
          </div>
          <div className="flex justify-between mt-4 border-b">
            <p className="text-xl">{t("checkout.subtotal_label")}</p>
            <p className="text-xl">${total}</p>
          </div>
          <div className="flex justify-between mt-4 border-b">
            <p className="text-xl">{t("checkout.shipping_label")}</p>
            <p className="text-xl">{t("checkout.free_shipping")}</p>
          </div>
          <div className="mx-10">
            <Link to="/Checkout">
              <button className="px-6 py-3 text-white bg-red-600 rounded hover:bg-red-500">
                {t("checkout.proceed_to_checkout")}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
