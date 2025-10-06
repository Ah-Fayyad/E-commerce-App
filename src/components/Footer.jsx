import React from "react";
import { SiGoogleplay, SiAppstore } from "react-icons/si";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="mt-12 text-white bg-black">
      <div className="container max-w-screen-xl px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          {/* العمود 1 */}
          <div>
            <h6 className="mb-4 text-2xl font-bold">{t("footer.exclusive")}</h6>
            <p className="mb-2 font-medium">{t("footer.subscribe")}</p>
            <p className="text-sm text-gray-400">
              {t("footer.first_order_discount")}
            </p>
          </div>

          {/* العمود 2 */}
          <div>
            <h6 className="mb-4 font-semibold">{t("footer.support")}</h6>
            <p className="mb-2 text-sm text-gray-400">
              {t("footer.address")}
            </p>
            <p className="mb-2 text-sm text-gray-400">exclusive@gmail.com</p>
            <p className="text-sm text-gray-400">+88015-88888-9999</p>
          </div>

          {/* العمود 3 */}
          <div>
            <h6 className="mb-4 font-semibold">{t("footer.account")}</h6>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-red-500"><Link href="/Account">{t("footer.my_account")}</Link></li>
              <li className="hover:text-red-500"><a href="/SignUp">{t("footer.sign_in")}</a></li>
              <li className="hover:text-red-500"><a href="/Cart">{t("footer.cart")}</a></li>
              <li className="hover:text-red-500"><a href="/Wishlist">{t("footer.wishlist")}</a></li>
              <li className="hover:text-red-500"><a href="/Products">{t("footer.shop")}</a></li>
            </ul>
          </div>

          {/* العمود 4 */}
          <div>
            <h6 className="mb-4 font-semibold">{t("footer.quick_links")}</h6>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-red-500"><a href="/Products">{t("footer.our_products")}</a></li>
              <li className="hover:text-red-500"><a href="/Categories">{t("footer.categories")}</a></li>
              <li className="hover:text-red-500"><a href="/About">{t("footer.terms")}</a></li>
              <li className="hover:text-red-500"><a href="/About">{t("footer.faq")}</a></li>
              <li className="hover:text-red-500"><a href="/Contact">{t("footer.contact_us")}</a></li>
            </ul>
          </div>

          {/* العمود 5 */}
          <div>
            <h6 className="mb-4 font-semibold">{t("footer.download_app")}</h6>
            <p className="mb-4 text-sm text-gray-400">
              {t("footer.save_with_app")}
            </p>

            {/* QR + Apps */}
            <div className="flex items-center gap-4">
              {/* QR */}
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://mycompany.com/app"
                alt="QR Code"
                className="transition-transform duration-500 rounded-lg hover:scale-110"
              />

              {/* Google Play + App Store */}
              <div className="flex flex-col gap-2">
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 px-4 py-2 text-sm transition-transform duration-300 bg-gray-800 rounded hover:bg-gray-700 hover:scale-105"
                >
                  <SiGoogleplay /> Google Play
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 px-4 py-2 text-sm transition-transform duration-300 bg-gray-800 rounded hover:bg-gray-700 hover:scale-105"
                >
                  <SiAppstore /> App Store
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-8 mt-6">

              {/* Facebook */}
                <a
                  href="/"
                  className="transition duration-300 transform hover:scale-110 hover:text-blue-700"
                >
                  <svg width="30" height="30" fill="currentColor">
                    <path d="M13 10H17.5L17 12H13V21H11V12H7V10H11V8.128C11 6.345 11.186 5.698 11.534 5.046C11.875 4.40181 12.4018 3.87501 13.046 3.534C13.698 3.186 14.345 3 16.128 3C16.65 3 17.108 3.05 17.5 3.15V5H16.128C14.804 5 14.401 5.078 13.99 5.298C13.686 5.46 13.46 5.686 13.298 5.99C13.078 6.401 13 6.804 13 8.128V10Z"/>
                  </svg>
                </a>

              {/* Twitter */}
                <a
                  href="/"
                  className="transition duration-300 transform hover:scale-110 hover:text-sky-400"
                >
                  <svg width="30" height="30" fill="currentColor">
                    <path d="M19.633 7.997c.013.176.013.353.013.529 0 5.386-4.097 11.6-11.6 11.6-2.307 0-4.454-.676-6.26-1.84.324.037.636.05.973.05a8.18 8.18 0 0 0 5.066-1.747 4.1 4.1 0 0 1-3.824-2.84c.248.037.498.062.76.062.361 0 .724-.05 1.06-.137a4.093 4.093 0 0 1-3.286-4.017v-.05c.548.299 1.186.486 1.86.511a4.086 4.086 0 0 1-1.82-3.41c0-.749.199-1.423.548-2.016a11.63 11.63 0 0 0 8.438 4.28 4.623 4.623 0 0 1-.1-.936 4.093 4.093 0 0 1 7.086-2.796 8.084 8.084 0 0 0 2.598-.986 4.083 4.083 0 0 1-1.796 2.26 8.2 8.2 0 0 0 2.36-.636 8.826 8.826 0 0 1-2.05 2.12z"/>
                  </svg>
                </a>

              {/* Instagram */}
                <a
                  href="/"
                  className="transition duration-300 transform hover:scale-110 hover:text-pink-500"
                >
                  <svg width="30" height="30" fill="currentColor">
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 4a5.75 5.75 0 1 1 0 11.5a5.75 5.75 0 0 1 0-11.5zm0 1.5a4.25 4.25 0 1 0 0 8.5a4.25 4.25 0 0 0 0-8.5zm5.75-.75a1 1 0 1 1 0 2a1 1 0 0 1 0-2z"/>
                  </svg>
                </a>

              {/* LinkedIn */}
                <a
                  href="/"
                  className="transition duration-300 transform hover:scale-110 hover:text-blue-600"
                >
                  <svg width="30" height="30" fill="currentColor">
                    <path d="M6.94 6.5a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0zM6.75 9H4v12h2.75V9zm4.5 0H8.5v12h2.75v-6.3c0-1.7 2.25-1.84 2.25 0V21H16v-6.86c0-3.57-4.25-3.43-5-1.68V9z"/>
                  </svg>
                </a>
            </div>

          </div>
        </div>
      </div>

      {/* حقوق النشر */}
        <div className="py-4 text-sm text-center text-gray-500 bg-black border-t border-gray-800">
        {t("footer.all_rights_reserved")}
        </div>
    </footer>
  );
}
