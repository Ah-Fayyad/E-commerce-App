import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import JBLImage from "../assets/JBL_BOOMBOX.png";

export default function BannerSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 24,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const startTime = Date.now(); // وقت فتح الموقع
    const duration = 24 * 60 * 60 * 1000; // 24 ساعة بالمللي ثانية

    const interval = setInterval(() => {
      const now = Date.now();
      const elapsed = (now - startTime) % duration; // الباقي بعد القسمة = اللي فاضل
      const difference = duration - elapsed;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex justify-center my-10">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-8 bg-black text-white shadow-lg p-6 md:my-10 max-w-[1500px] w-full min-h-[500px]">
        {/* النصوص */}
        <div className="flex flex-col items-center gap-6 md:items-start md:gap-8">
          <h3 className="text-sm text-green-500">الفئات</h3>
          <h2 className="xl:w-[400px] text-center md:text-start text-2xl sm:text-3xl lg:text-4xl font-semibold font-inter">
            تعزيز تجربة الاستماع الخاصة بك
          </h2>

          {/* المؤقت */}
          <div className="flex flex-row gap-4 mt-4 text-base font-semibold text-black md:gap-6">
            <div className="flex flex-col items-center justify-center px-3 py-2 bg-white rounded-full">
              <span>{timeLeft.days}</span>
              <span className="font-light text-xs w-[50px] text-center">أيام</span>
            </div>
            <div className="flex flex-col items-center justify-center px-3 py-2 bg-white rounded-full">
              <span>{timeLeft.hours}</span>
              <span className="font-light text-xs w-[50px] text-center">ساعات</span>
            </div>
            <div className="flex flex-col items-center justify-center px-3 py-2 bg-white rounded-full">
              <span>{timeLeft.minutes}</span>
              <span className="font-light text-xs w-[50px] text-center">دقائق</span>
            </div>
            <div className="flex flex-col items-center justify-center px-3 py-2 bg-white rounded-full">
              <span>{timeLeft.seconds}</span>
              <span className="font-light text-xs w-[50px] text-center">ثواني</span>
            </div>
          </div>

          {/* زر اشتر الآن */}
          <Link to="/Products/JBL Boombox 2">
            <button className="px-10 py-3 mb-2 duration-300 bg-green-500 rounded-sm md:mb-0 hover:scale-105 hover:-translate-y-1">
              ! اشتر الآن
            </button>
          </Link>
        </div>

        {/* الصورة */}
        <div className="flex-shrink-0 mt-4 md:mt-0">
          <Link to="/Products/JBL Boombox 2">
            <img
              src={JBLImage}
              alt="JBL Boombox 2"
              loading="lazy"
              className="transition-transform duration-300 transform hover:-translate-y-4 hover:scale-110 motion-safe:animate-pulse max-w-[300px] md:max-w-[400px]"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}