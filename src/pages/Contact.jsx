import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-20 mx-4 mt-48 xl:ml-36">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm" aria-label="breadcrumb">
        <ol className="flex space-x-2 text-gray-600 rtl:space-x-reverse">
          <li>
            <Link
              to="/"
              className="duration-300 ease-in-out transform hover:text-red-600 hover:underline hover:underline-offset-8"
            >
              {t("contact.breadcrumb_home")}
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link
              to="#"
              className="duration-300 ease-in-out transform hover:text-red-600 hover:underline hover:underline-offset-8"
            >
              {t("contact.breadcrumb_contact")}
            </Link>
          </li>
        </ol>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col gap-8 mx-auto lg:flex-row">

        {/* Right Section - Contact Info */}
        <div className="shadow w-full lg:w-[340px] h-[457px] flex flex-col gap-8 py-10 px-8 rounded">
          {/* Phone */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-row items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 bg-red-500 rounded-full">
                {/* أيقونة الهاتف */}
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" rx="20" fill="#DB4444" />
                  <path
                    d="M18.5542 14.24L15.1712 10.335C14.7812 9.885 14.0662 9.887 13.6132 10.341L10.8312 13.128C10.0032 13.957 9.76623 15.188 10.2452 16.175C13.1069 22.1 17.8853 26.8851 23.8062 29.755C24.7922 30.234 26.0222 29.997 26.8502 29.168L29.6582 26.355C30.1132 25.9 30.1142 25.181 29.6602 24.791L25.7402 21.426C25.3302 21.074 24.6932 21.12 24.2822 21.532L22.9182 22.898C22.8484 22.9712 22.7565 23.0194 22.6566 23.0353C22.5567 23.0512 22.4543 23.0339 22.3652 22.986C20.1357 21.7021 18.2862 19.8502 17.0052 17.619C16.9573 17.5298 16.9399 17.4272 16.9558 17.3272C16.9717 17.2271 17.02 17.135 17.0932 17.065L18.4532 15.704C18.8652 15.29 18.9102 14.65 18.5542 14.239V14.24Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-base font-medium">{t("contact.call_us")}</span>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm">{t("contact.call_us_info")}</p>
              <p className="text-sm">{t("contact.phone")}</p>
            </div>
          </div>

          <hr className="border-gray-300" />

          {/* Email */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-row items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 bg-red-500 rounded-full">
                {/* أيقونة البريد */}
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" rx="20" fill="#DB4444" />
                  <path
                    d="M10 13L20 20L30 13M10 27H30V13H10V27Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-base font-medium">{t("contact.write_to_us")}</span>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm">{t("contact.write_to_us_info")}</p>
              <p className="text-sm">{t("contact.email1")}</p><p className="text-sm">{t("contact.email2")}</p>
            </div>
          </div>
        </div>

        {/* Left Section - Contact Form */}
        <div className="shadow w-[full] flex flex-col py-10 px-4 lg:px-8 rounded">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4 lg:flex-row">
              <input
                type="text"
                placeholder={t("contact.name_placeholder")}
                required
                className="lg:w-[235px] rounded bg-gray-100 px-4 py-3 text-gray-600 text-base outline-none focus:border focus:border-red-300"
              />
              <input
                type="email"
                placeholder={t("contact.email_placeholder")}
                required
                className="lg:w-[235px] rounded bg-gray-100 px-4 py-3 text-gray-600 text-base outline-none focus:border focus:border-red-300"
              />
              <input
                type="tel"
                placeholder={t("contact.phone_placeholder")}
                required
                className="lg:w-[235px] rounded bg-gray-100 px-4 py-3 text-gray-600 text-base outline-none focus:border focus:border-red-300"
              />
            </div>

            <textarea
              placeholder={t("contact.message_placeholder")}
              required
              className="min-h-[50px] h-[207px] rounded bg-gray-100 px-4 py-3 text-gray-600 text-base outline-none focus:border focus:border-red-300"
            ></textarea>

            <div className="ml-auto">
              <button className="px-6 py-3 text-sm text-white transition-transform duration-100 transform bg-red-600 rounded motion-safe:hover:animate-pulse md:text-base md:px-12 hover:bg-red-500 hover:-translate-y-1">
                {t("contact.send_message")}
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}