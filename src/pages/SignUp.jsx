import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="relative flex items-center justify-center gap-12 max-lg:flex-col-reverse xl:justify-center md:justify-start lg:mt-28 xl:gap-24 ">
      {/* الفورم */}
      <div className="flex flex-col items-center justify-center gap-6 md:gap-8 md:mx-10 sm:items-start max-lg:mt-40 w-72 md:w-96">
        <h1 className="self-end text-4xl font-medium text-right font-inter">
          إنشاء حساب
        </h1>
        <p className="self-end font-medium text-right text-gray-600">
          : أدخل بياناتك أدناه
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full gap-6 md:gap-8"
        >
          {/* البريد */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-medium text-gray-700">
              البريد الإلكتروني<span className="text-red-500">*</span>
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

          {/* زر إنشاء حساب */}
          <button
            type="submit"
            className="w-full px-6 py-4 text-white bg-red-500 rounded hover:bg-red-600"
          >
            إنشاء حساب
          </button>
        </form>

        {/* زر جوجل */}
        <button
          type="button"
          className="flex items-center justify-center w-full gap-3 py-2 border border-gray-300 rounded hover:bg-gray-300 hover:text-black hover:border-red-500"
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google Icon"
            className="w-6 h-6"
          />
          <span className="py-3 font-medium text-gray-700 ">
            تسجيل الدخول بواسطة جوجل
          </span>
        </button>

        {/* تسجيل جديد */}
        <p className="w-full text-sm text-center text-gray-600 md:text-base">
          لديك حساب بالفعل؟
          <Link
            to="/login"
            className="ml-2 font-medium text-gray-700 hover:underline hover:text-red-500"
          >
            تسجيل الدخول
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
