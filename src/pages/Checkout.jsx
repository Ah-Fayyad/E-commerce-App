import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // ✅ ربط بالسلة

export default function Checkout() {
  const { cartItems, total } = useCart(); // ✅ جلب المنتجات والمجموع

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    console.log("Products in Cart:", cartItems);
    alert("✅ تم إرسال الطلب بنجاح!");
  };

  return (
    <div className="container px-4 py-10 mx-auto">
      {/* breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-6 text-gray-600">
        <ol className="flex gap-2">
          <li>
            <Link
              to="/"
              className="mx-3 duration-300 ease-in-out transform hover:text-red-600 hover:underline hover:underline-offset-8"
            >
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link
              to="/Cart"
              className="mx-3 duration-300 ease-in-out transform hover:text-red-600 hover:underline hover:underline-offset-8"
            >
              Cart
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link
              to="/Products"
              className="mx-3 duration-300 ease-in-out transform hover:text-red-600 hover:underline hover:underline-offset-8"
            >
              Products
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link
              to="/Account"
              className="mx-3 duration-300 ease-in-out transform hover:text-red-600 hover:underline hover:underline-offset-8"
            >
              Account
            </Link>
          </li>
          <li>/</li>
          
          <li aria-current="page"> Checkout</li>
        </ol>
      </nav>

      <form onSubmit={handleSubmit} className="flex flex-col gap-10 md:flex-row">
        {/* form left */}
        <div className="flex flex-col w-full gap-6 md:w-1/2">
          <h2 className="text-2xl font-medium text-right md:text-4xl">
            تفاصيل الفواتير
          </h2>

          <div className="flex flex-col gap-4">
            {/* الاسم */}
            <label className="flex flex-col gap-1">
              <span className="text-right text-gray-500">الاسم الأول *</span>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="px-4 py-3 bg-gray-100 rounded outline-none focus:border focus:border-gray-300"
              />
            </label>

            {/* الشركة */}
            <label className="flex flex-col gap-1">
              <span className="text-right text-gray-500">الشركة</span>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="px-4 py-3 bg-gray-100 rounded outline-none focus:border focus:border-gray-300"
              />
            </label>

            {/* العنوان */}
            <label className="flex flex-col gap-1">
              <span className="text-right text-gray-500">العنوان *</span>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="px-4 py-3 bg-gray-100 rounded outline-none focus:border focus:border-gray-300"
              />
            </label>

            {/* الشقة */}
            <label className="flex flex-col gap-1">
              <span className="text-right text-gray-500">
                الشقة، الطابق (اختياري)
              </span>
              <input
                type="text"
                name="apartment"
                value={formData.apartment}
                onChange={handleChange}
                className="px-4 py-3 bg-gray-100 rounded outline-none focus:border focus:border-gray-300"
              />
            </label>

            {/* المدينة */}
            <label className="flex flex-col gap-1">
              <span className="text-right text-gray-500">المدينة *</span>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="px-4 py-3 bg-gray-100 rounded outline-none focus:border focus:border-gray-300"
              />
            </label>

            {/* الهاتف */}
            <label className="flex flex-col gap-1">
              <span className="text-right text-gray-500">الهاتف *</span>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="px-4 py-3 bg-gray-100 rounded outline-none focus:border focus:border-gray-300"
              />
            </label>

            {/* البريد الإلكتروني */}
            <label className="flex flex-col gap-1">
              <span className="text-right text-gray-500">البريد الإلكتروني *</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="px-4 py-3 bg-gray-100 rounded outline-none focus:border focus:border-gray-300"
              />
            </label>
          </div>
        </div>

        {/* order summary */}
        <div className="flex flex-col w-full gap-6 md:w-1/2">
          {/* عرض المنتجات */}
          <div className="p-4 border rounded-md">
            <h3 className="mb-4 text-lg font-medium text-right">: ملخص الطلب</h3>
            {cartItems.length === 0 ? (
              <p className="text-gray-500 ">السلة فارغة</p>
            ) : (
              <ul className="space-y-2">
                {cartItems.map((item) => (
                 
                 <li key={item.id}className="flex items-center justify-between text-sm">
                    
                    <span>${item.price * item.quantity}</span>
                    
                   

                    {/* الصورة + الاسم + الكمية */}
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
            <p>:المجموع الفرعي</p>
          </div>

          <div className="flex justify-between pb-2 border-b">
            <p>مجانًا</p>
            <p>:الشحن</p>
          </div>

          <div className="flex justify-between pb-4 border-b">
            <p>${total.toFixed(2)}</p>
            <p>:الإجمالي</p>
          </div>

          {/* طرق الدفع */}
          <div>
            <p className="mb-2 font-medium text-right ">:طرق الدفع</p>

            {/* خيار البنك */}
            <label className="flex items-center justify-between p-3 mb-3 border rounded-md cursor-pointer">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="bank"
                  checked={formData.paymentMethod === "bank"}
                  onChange={handleChange}
                />
                <span>بنك (فيزا)</span>
              </div>

              <img
                src="/src/assets/payment.webp"
                alt="paymentMethod"
                height="28"
                width="120"
                className="ml-3"
              />
            </label>

            {/* خيار الدفع عند الاستلام */}
            <label className="flex items-center gap-3 p-3 border rounded-md cursor-pointer">
              <input
                type="radio"
                name="paymentMethod"
                value="cashOnDelivery"
                checked={formData.paymentMethod === "cashOnDelivery"}
                onChange={handleChange}
              />
              <span>الدفع عند الاستلام</span>
            </label>
          </div>

          {/* القسيمة */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              name="coupon"
              placeholder="رمز القسيمة"
              value={formData.coupon}
              onChange={handleChange}
              className="border rounded-md p-3 w-[200px]"
            />
            <button
              type="button"
              className="px-6 py-3 text-white transition bg-red-600 rounded hover:bg-red-500"
            >
              تطبيق القسيمة
            </button>
          </div>

          <button
            type="submit"
            className="px-6 py-3 mt-4 text-white transition bg-red-600 rounded hover:bg-red-500"
          >
            تقديم الطلب
          </button>
        </div>
      </form>
    </div>
  );
}
