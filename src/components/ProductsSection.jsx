import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import products from "../data/products";

export default function ProductsSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  // تاريخ انتهاء العد التنازلي
  const targetDate = new Date("2025-09-30T00:00:00");
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;
      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container px-4 mx-auto">
      {/* العنوان + المؤقت */}
      <div className="flex flex-row items-center gap-4 mb-8 font-semibold md:text-lg">
        <span className="w-5 h-10 bg-red-500 rounded"></span>
        <span className="text-red-500">اليوم</span>
      </div>

      <div className="flex items-center md:justify-between md:mr-6 md:mb-4">
        <div className="flex flex-col gap-10 md:gap-20 md:flex-row">
          <h1 className="text-2xl font-bold md:text-3xl">عروض الفلاش</h1>

          {/* المؤقت التنازلي */}
          <div className="flex gap-4 text-2xl font-bold text-black md:text-3xl">
            <div className="flex flex-col items-center">
              <span>{timeLeft.days}</span>
              <span className="text-xs font-light">أيام</span>
            </div>
            <span className="text-red-400">:</span>
            <div className="flex flex-col items-center">
              <span>{timeLeft.hours}</span>
              <span className="text-xs font-light">ساعات</span>
            </div>
            <span className="text-red-400">:</span>
            <div className="flex flex-col items-center">
              <span>{timeLeft.minutes}</span>
              <span className="text-xs font-light">دقائق</span>
            </div>
            <span className="text-red-400">:</span>
            <div className="flex flex-col items-center">
              <span>{timeLeft.seconds}</span>
              <span className="text-xs font-light">ثواني</span>
            </div>
          </div>
        </div>

         {/* الأسهم */}
        <div className="absolute  gap-8 md:block right-8 md:right-32 ">
          <button
            onClick={() => scroll("left")}
            className="p-2 bg-white rounded-full shadow-lg   hover:bg-gray-200 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16" width="18" height="16" fill="none">
              <path
                d="M8 1L1 8L8 15M1 8H17"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          <button
            onClick={() => scroll("right")}
            className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-200 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 16" width="19" height="16" fill="none">
              <path
                d="M1.5 8H18M18 8L11 1M18 8L11 15"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* المنتجات - Scroll أفقي */}
      <div ref={scrollRef} className="flex gap-6 mb-8 overflow-x-auto scrollbar-hide">
        {products.slice(0, 8).map((product) => (
          <div className="min-w-[250px]" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <Link
          to="/products"
          className="motion-safe:hover:animate-pulse text-sm md:text-base md:px-12 py-3 rounded px-6 bg-red-600 text-white hover:bg-red-500 transition-transform duration-100 transform hover:translate-y-[-4px]"
        >
          عرض كل المنتجات
        </Link>
      </div>
      <hr className="mx-40 border-gray-300 md:mt-16 md:py-4" />
    </section>
    
    
  );
}
