import React from "react";

export default function PremiumProducts() {
  return (
    <section className="container px-4 mx-auto">
      {/* العنوان */}
      <div className="flex flex-row items-center gap-4 mb-8 font-semibold md:text-lg">
        <span className="w-5 h-10 bg-red-500 rounded"></span>
        <span className="text-red-500">متميز</span>
      </div>
      <div className="flex items-center md:justify-between md:mr-6 md:mb-4">
        <h2 className="text-2xl font-bold md:text-3xl">وصول جديد</h2>
      </div>
      

      {/* المنتجات */}
      <div className="flex flex-col items-center justify-center gap-8 xl:flex-row">
        {/* بلاي ستيشن 5 */}
        <div className="bg-black rounded md:pt-12 md:px-8 md:h-[600px] md:w-[570px]">
          <div className="text-white relative flex gap-10 md:mt-10 items-center justify-center flex-col-reverse md:flex-row md:w-[511px] md:h-[511px] sm:h-[500px] h-[380px]">
            {/* الصورة */}
            <div className="absolute inset-0 z-0 flex items-center justify-center">
              <a href="/Products/بلاي ستيشن 5">
                <img
                  loading="lazy"
                  className="object-contain w-full h-full transition-transform duration-300 transform opacity-50 hover:scale-105 hover:-translate-y-2 hover:opacity-100"
                  src="/src/assets/playstation.png"
                  alt="بلاي ستيشن 5"
                />
              </a>
            </div>

            {/* النص */}
            <div className="flex transform flex-col gap-1 md:gap-4 mt-auto md:mr-auto w-[270px] md:mb-8 items-center md:items-start justify-end">
              <h2 className="text-lg font-semibold text-center md:text-start md:text-2xl font-inter">
                بلاي ستيشن 5
              </h2>
              <p className="text-sm text-center md:text-start">
                النسخة السوداء والبيضاء من PS5 تصدر للبيع.
              </p>
              <a href="/Products/بلاي ستيشن 5">
                <button className="flex gap-2 py-2 mb-4 underline duration-300 ease-in-out transform md:mb-0 underline-offset-8 hover:translate-x-4">
                  <span>تسوق الآن</span>
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* باقي المنتجات */}
        <div className="flex flex-col gap-8">
          {/* مجموعات النساء */}
          <div className="bg-black rounded h-[284px] md:w-[570px] ">
            <div className="relative flex flex-col-reverse justify-center w-full h-full text-white md:flex-row">
              {/* الصورة */}
              <div className="absolute inset-0 flex items-center justify-center">
                <a href="/Products/مجموعات النساء">
                  <img
                    loading="lazy"
                    className="w-full h-full max-w-[400px] object-cover opacity-50 transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2 hover:opacity-100"
                    src="/src/assets/womenCollections.png"
                    alt="مجموعات النساء"
                  />
                </a>
              </div>

              {/* النص */}
              <div className="flex transform flex-col gap-1 md:gap-4 mt-auto md:mr-auto md:pl-8 md:pb-4 items-center w-[300px] md:items-start">
                <h2 className="text-lg font-semibold text-center md:text-start md:text-2xl font-inter">
                  مجموعات النساء
                </h2>
                <p className="text-sm text-center md:text-start">
                  مجموعات نسائية مميزة تمنحك جوًا آخر.
                </p>
                <a href="/Products/مجموعات النساء">
                  <button className="flex gap-2 py-2 underline transition underline-offset-8 hover:translate-x-2">
                    <span>تسوق الآن</span>
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* سماعات + عطر */}
          <div className="flex flex-col gap-8 md:flex-row">
            {/* سماعات */}
            <div className="bg-black rounded-lg relative md:w-[280px] h-[300px] overflow-hidden text-white">
              {/* الصورة */}
              <div className="absolute inset-0 flex items-center justify-center">
                <a href="/Products/سماعات">
                  <img
                    loading="lazy"
                    className="w-full h-full max-w-[400px] object-cover opacity-50 transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2 hover:opacity-100"
                    src="/src/assets/speakers.png"
                    alt="سماعات"
                  />
                </a>
              </div>

              {/* النص */}
              <div className="relative z-10 flex flex-col gap-1 md:gap-4 md:mr-auto md:pl-8 w-[260px] items-center md:items-start justify-end pb-4 h-full">
                <h2 className="text-lg font-semibold text-center md:text-start md:text-2xl font-inter">
                  مكبرات الصوت
                </h2>
                <p className="text-sm text-center md:text-start">
                  مكبرات صوت لاسلكية من Amazon
                </p>
                <a href="/Products/سماعات">
                  <button className="flex gap-2 py-2 underline duration-300 ease-in-out transform underline-offset-8 hover:translate-x-4">
                    <span>تسوق الآن</span>
                  </button>
                </a>
              </div>
            </div>

            {/* عطر */}
            <div className="bg-black rounded-lg relative md:w-[280px] h-[300px] overflow-hidden text-white">
              {/* الصورة */}
              <div className="absolute inset-0 flex items-center justify-center">
                <a href="/Products/عطر">
                  <img
                    loading="lazy"
                    className="w-full h-full max-w-[400px] object-cover opacity-50 transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2 hover:opacity-100"
                    src="/src/assets/perfume.png"
                    alt="عطر"
                  />
                </a>
              </div>

              {/* النص */}
              <div className="relative z-10 flex flex-col gap-1 md:gap-2 md:mr-auto md:pl-4 w-[240px] items-center md:items-start justify-end pb-4 h-full">
                <h2 className="text-lg font-semibold text-center md:text-start md:text-2xl font-inter">
                  عطر
                </h2>
                <p className="text-sm text-center md:text-start">
                  GUCCI INTENSE OUD EDP
                </p>
                <a href="/Products/عطر">
                  <button className="flex gap-2 py-2 underline duration-300 ease-in-out transform underline-offset-8 hover:translate-x-4">
                    <span>تسوق الآن</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
