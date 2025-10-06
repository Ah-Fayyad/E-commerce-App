import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function AccountPage() {
  const { t } = useTranslation();

  return (
    <div className="px-4 py-10 md:px-12 lg:px-20">
      {/* Breadcrumb */}
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <nav aria-label="breadcrumb">
          <ol className="flex gap-2 text-sm text-gray-500">
            <li>
              <Link
                to="/"
                className="mx-3 duration-300 ease-in-out transform hover:text-red-600 hover:underline hover:underline-offset-8"
              >
                {t("AccountPage.breadcrumb.home")}
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                to="/Account"
                className="mx-3 duration-300 ease-in-out transform hover:text-red-600 hover:underline hover:underline-offset-8"
              >
                {t("AccountPage.breadcrumb.account")}
              </Link>
            </li>
          </ol>
        </nav>
        <h1 className="text-sm md:text-base">
          {t("AccountPage.welcome")} <span className="text-red-600"></span>
        </h1>
      </div>

      <div className="flex flex-col gap-12 mt-10 md:flex-row md:gap-28">
        {/* Main Content */}
        <div className="flex flex-col w-full px-6 py-10 text-center rounded-lg shadow-md md:px-20">
          <div className="flex flex-col gap-6 md:w-[710px]">
            <span className="text-xl font-semibold text-right text-red-600">
              {t("AccountPage.edit_profile")}
            </span>

            {/* الاسم */}
            <div className="flex flex-col gap-6 md:flex-row md:gap-12">
              <div className="flex flex-col w-full gap-2">
                <label className="text-sm text-right md:text-base">
                  {t("AccountPage.last_name")}
                </label>
                <input
                  type="text"
                  placeholder={t("AccountPage.last_name")}
                  className="px-4 py-3 text-sm text-gray-700 bg-gray-100 rounded outline-none md:text-base focus:border focus:border-gray-300"
                />
              </div>
              <div className="flex flex-col w-full gap-2">
                <label className="text-sm text-right md:text-base">
                  {t("AccountPage.first_name")}
                </label>
                <input
                  type="text"
                  placeholder={t("AccountPage.first_name")}
                  className="px-4 py-3 text-sm text-gray-700 bg-gray-100 rounded outline-none md:text-base focus:border focus:border-gray-300"
                />
              </div>
            </div>

            {/* البريد والعنوان */}
            <div className="flex flex-col gap-6 md:flex-row md:gap-12">
              <div className="flex flex-col w-full gap-2">
                <label className="text-sm text-right md:text-base">
                  {t("AccountPage.email")}
                </label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="px-4 py-3 text-sm text-gray-700 bg-gray-100 rounded outline-none md:text-base focus:border focus:border-gray-300"
                />
              </div>
              <div className="flex flex-col w-full gap-2">
                <label className="text-sm text-right md:text-base">
                  {t("AccountPage.address")}
                </label>
                <input
                  type="text"
                  placeholder={t("AccountPage.address_placeholder")}
                  className="px-4 py-3 text-sm text-gray-700 bg-gray-100 rounded outline-none md:text-base focus:border focus:border-gray-300"
                />
              </div>
            </div>

            {/* كلمة المرور */}
            <div className="flex flex-col w-full gap-4">
              <label className="text-sm text-right md:text-base">
                {t("AccountPage.change_password")}
              </label>
              <input
                type="password"
                placeholder={t("AccountPage.current_password")}
                className="px-4 py-3 text-sm text-gray-700 bg-gray-100 rounded outline-none md:text-base focus:border focus:border-gray-300"
              />
              <input
                type="password"
                placeholder={t("AccountPage.new_password")}
                className="px-4 py-3 text-sm text-gray-700 bg-gray-100 rounded outline-none md:text-base focus:border focus:border-gray-300"
              />
              <input
                type="password"
                placeholder={t("AccountPage.confirm_password")}
                className="px-4 py-3 text-sm text-gray-700 bg-gray-100 rounded outline-none md:text-base focus:border focus:border-gray-300"
              />
            </div>

            {/* الأزرار */}
            <div className="flex items-center gap-8 mt-4 ml-auto text-sm md:text-base">
              <button className="hover:underline">{t("AccountPage.cancel")}</button>
              <button className="px-6 py-3 text-sm text-white transition-transform duration-150 transform bg-red-600 rounded md:text-lg md:px-12 hover:bg-red-500 hover:-translate-y-1">
                {t("AccountPage.save_changes")}
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <nav className="flex flex-col text-gray-400 gap-7">
          <div>
            <h2 className="text-sm font-medium text-right text-black md:text-base">
              {t("AccountPage.manage_account")}
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/Account"
                  className="duration-300 ease-in-out transform hover:underline hover:underline-offset-8 focus:text-red-600"
                >
                  {t("AccountPage.my_profile")}
                </Link>
              </li>
              <li>
                <Link
                  to="/Account"
                  className="duration-300 ease-in-out transform hover:underline hover:underline-offset-8 focus:text-red-600"
                >
                  {t("AccountPage.address_book")}
                </Link>
              </li>
              <li>
                <Link
                  to="/Account"
                  className="duration-300 ease-in-out transform hover:underline hover:underline-offset-8 focus:text-red-600"
                >
                  {t("AccountPage.payment_options")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-medium text-right text-black md:text-base">
              {t("AccountPage.my_orders")}
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/Account"
                  className="duration-300 ease-in-out transform hover:underline hover:underline-offset-8 focus:text-red-600"
                >
                  {t("AccountPage.my_returns")}
                </Link>
              </li>
              <li>
                <Link
                  to="/Account"
                  className="duration-300 ease-in-out transform hover:underline hover:underline-offset-8 focus:text-red-600"
                >
                  {t("AccountPage.my_cancellations")}
                </Link>
              </li>
            </ul>
          </div>

          <h2 className="self-start text-sm font-medium text-right text-black md:text-base">
            <Link
              to="/Wishlist"
              className="duration-300 ease-in-out transform hover:underline hover:underline-offset-8"
            >
              {t("AccountPage.wishlist")}
            </Link>
          </h2>
        </nav>
      </div>
    </div>
  );
}
