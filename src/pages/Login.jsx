import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };
 
  return (
    <div className="flex flex-col-reverse items-center justify-center gap-10 px-4 py-36 md:flex-row md:gap-20">
      {/* الفورم */}
      <div className="flex flex-col items-center gap-6 md:gap-8 sm:items-start">
        <h1 className="text-xl font-medium md:text-4xl font-inter">
          Exclusive تسجيل الدخول إلى
        </h1>
        <p className="self-end font-medium text-right text-gray-700">: أدخل بياناتك أدناه</p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 w-72 md:gap-8 md:w-96"
        >
          {/* البريد */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-medium text-gray-700 ">
              البريد الإلكتروني أو رقم الهاتف
              <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-2 border-b-2 border-gray-300 outline-none focus:border-red-500"
            />
          </div>

          {/* كلمة المرور */}
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="font-medium text-gray-700">
              كلمة المرور<span className="text-red-500">*</span>
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-3 py-2 border-b-2 border-gray-300 outline-none focus:border-red-500"
            />
          </div>

          {/* الأزرار */}
          <div className="flex items-center justify-between gap-4 mt-4">
            <button
              type="submit"
              className="px-6 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
            >
              تسجيل الدخول
            </button>
            <button
              type="button"
              className="text-base font-medium text-red-500 hover:underline"
            >
              نسيت كلمة المرور؟
            </button>
          </div>
        </form>

        {/* تسجيل جديد */}
        <p className="w-full text-sm text-center text-gray-600 md:text-base">
          ليس لديك حساب بعد؟
          <Link
            to="/SignUp"
            className="ml-2 font-medium text-gray-700 hover:underline hover:text-red-500"
          >
            إنشاء حساب
          </Link>
        </p>
      </div>

      {/* الصورة */}
      <img
        src="/src/assets/SignImg.png"
        alt="Sign Image"
        className="w-80 md:w-[450px] lg:w-[800px] object-contain"
      />
    </div>
  );
}
