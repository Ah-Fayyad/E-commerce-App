import React from "react";
import { Link } from "react-router-dom";

export default function AccountPage() {
  return (
    <div className="px-4 py-10 md:px-12 lg:px-20">
      {/* Breadcrumb */}
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <nav aria-label="breadcrumb">
          <ol className="flex gap-2 text-sm text-gray-500">
            <li>
              <Link to="/" className="mx-3 duration-300 ease-in-out transform hover:text-red-600 hover:underline hover:underline-offset-8">
                الصفحة الرئيسية
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/account" className="mx-3 duration-300 ease-in-out transform hover:text-red-600 hover:underline hover:underline-offset-8">
                حسابي
              </Link>
            </li>
          </ol>
        </nav>
        <h1 className="text-sm md:text-base">
          مرحبًا! <span className="text-red-600 "></span>
        </h1>
      </div>

      <div className="flex flex-col gap-12 mt-10 md:flex-row md:gap-28">
        
        {/* Main Content */}
        <div className="flex flex-col w-full px-6 py-10 rounded-lg shadow-md md:px-20">
          <div className="flex flex-col gap-6 md:w-[710px]">
            <span className="text-xl font-semibold text-right text-red-600 ">
              تحرير ملفك الشخصي
            </span>

            {/* الاسم */}
            <div className="flex flex-col gap-6 md:flex-row md:gap-12">

              <div className="flex flex-col w-full gap-2">
                <label className="text-sm text-right md:text-base">الاسم الأخير</label>
                <input
                  type="text"
                  placeholder="الاسم الأخير"
                  className="px-4 py-3 text-sm text-gray-700 bg-gray-100 rounded outline-none md:text-base focus:border focus:border-gray-300"
                />
              </div>
                            <div className="flex flex-col w-full gap-2">
                <label className="text-sm text-right md:text-base">الاسم الأول</label>
                <input
                  type="text"
                  placeholder="الاسم الأول"
                  className="px-4 py-3 text-sm text-gray-700 bg-gray-100 rounded outline-none md:text-base focus:border focus:border-gray-300"
                />
              </div>
            </div>

            {/* البريد والعنوان */}
            <div className="flex flex-col gap-6 md:flex-row md:gap-12">
              <div className="flex flex-col w-full gap-2">
                <label className="text-sm text-right md:text-base">البريد الإلكتروني</label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="px-4 py-3 text-sm text-gray-700 bg-gray-100 rounded outline-none md:text-base focus:border focus:border-gray-300"
                />
              </div>
              <div className="flex flex-col w-full gap-2">
                <label className="text-sm text-right md:text-base">العنوان</label>
                <input
                  type="text"
                  placeholder="عنوانك"
                  className="px-4 py-3 text-sm text-gray-700 bg-gray-100 rounded outline-none md:text-base focus:border focus:border-gray-300"
                />
              </div>
            </div>

            {/* كلمة المرور */}
            <div className="flex flex-col w-full gap-4">
              <label className="text-sm text-right md:text-base">تغيير كلمة المرور</label>
              <input
                type="password"
                placeholder="كلمة المرور الحالية"
                className="px-4 py-3 text-sm text-gray-700 bg-gray-100 rounded outline-none md:text-base focus:border focus:border-gray-300"
              />
              <input
                type="password"
                placeholder="كلمة المرور الجديدة"
                className="px-4 py-3 text-sm text-gray-700 bg-gray-100 rounded outline-none md:text-base focus:border focus:border-gray-300"
              />
              <input
                type="password"
                placeholder="تأكيد كلمة المرور"
                className="px-4 py-3 text-sm text-gray-700 bg-gray-100 rounded outline-none md:text-base focus:border focus:border-gray-300"
              />
            </div>

            {/* الأزرار */}
            <div className="flex items-center gap-8 mt-4 ml-auto text-sm md:text-base">
              <button className="hover:underline">إلغاء</button>
              <button className="px-6 py-3 text-sm text-white transition-transform duration-150 transform bg-red-600 rounded md:text-lg md:px-12 hover:bg-red-500 hover:-translate-y-1">
                حفظ التغييرات
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <nav className="flex flex-col text-gray-400 gap-7">
          <div>
            <h2 className="text-sm font-medium text-right text-black md:text-base">إدارة حسابي</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/account" className="duration-300 ease-in-out transform hover:underline hover:underline-offset-8 focus:text-red-600">
                  ملفي
                </Link>
              </li>
              <li>
                <Link to="/account" className="duration-300 ease-in-out transform hover:underline hover:underline-offset-8 focus:text-red-600">
                  دليل العناوين
                </Link>
              </li>
              <li>
                <Link to="/account" className="duration-300 ease-in-out transform hover:underline hover:underline-offset-8 focus:text-red-600">
                  خيارات الدفع الخاصة بي
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className= "text-sm font-medium text-right text-black md:text-base">طلباتي</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/account" className="duration-300 ease-in-out transform hover:underline hover:underline-offset-8 focus:text-red-600">
                  إرجاعاتي
                </Link>
              </li>
              <li>
                <Link to="/account" className="duration-300 ease-in-out transform hover:underline hover:underline-offset-8 focus:text-red-600">
                  إلغاءاتي
                </Link>
              </li>
            </ul>
          </div>

          <h2 className="self-start text-sm font-medium text-right text-black md:text-base">
            <Link to="/wishlist" className="duration-300 ease-in-out transform hover:underline hover:underline-offset-8">
              قائمة الرغبات
            </Link>
          </h2>
        </nav>
      </div>
    </div>
  );
}
