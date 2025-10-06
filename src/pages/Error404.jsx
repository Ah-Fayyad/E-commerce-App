import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Error404() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (count === 0) {
      navigate("/");
      return;
    }
    const timer = setTimeout(() => setCount(count - 1), 1000);
    return () => clearTimeout(timer);
  }, [count, navigate]);

  return (
    <div className="flex flex-col items-center justify-center mx-auto mt-12 text-center">
      {/* Breadcrumbs */}
      <nav className="mb-6 text-gray-600">
        <ol className="flex gap-2">
          <li>
            <a
              href="/home"
              className="mx-3 duration-300 ease-in-out transform hover:text-red-600 hover:underline hover:underline-offset-8"
            >
              {t("error404.home")}
            </a>
          </li>
          <li>/</li>
          <li
            aria-current="page"
            className="mx-3 font-semibold duration-300 ease-in-out transform hover:text-red-600 hover:underline hover:underline-offset-8"
          >
            {t("error404.title")}
          </li>
        </ol>
      </nav>

      {/* رسالة الخطأ */}
      <h1 className="mb-4 text-3xl font-bold md:text-8xl">
        {t("error404.heading")}
      </h1>
      <h6 className="mb-6 text-sm md:text-xl">
        {t("error404.message")}{" "}
        <span className="mx-2 font-bold">{count}</span> {t("error404.seconds")}
      </h6>

      {/* صورة */}
      <img
        src="/src/assets/notFound.png"
        alt="Page Not Found"
        className="w-64 mb-6 md:w-96"
      />

      {/* زر العودة */}
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 text-white transition-transform duration-100 transform bg-red-600 rounded md:px-12 hover:bg-red-500 hover:-translate-y-1"
      >
        {t("error404.back_home")}
      </button>
    </div>
  );
}
