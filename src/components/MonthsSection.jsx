import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import products from "../data/products";
import { useTranslation } from "react-i18next";

export default function MonthsSection() {
    const { t } = useTranslation();
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="container relative px-4 mx-auto">
      {/* العنوان + المؤقت */}
      <div className="flex flex-row items-center gap-4 mb-8 font-semibold md:text-lg">
        <span className="w-5 h-10 bg-red-500 rounded"></span>
        <span className="text-red-500">{t("MonthsSection.title")}</span>
      </div>

      <div className="flex items-center gap-20 md:justify-between md:mr-6 md:mb-4">
        <div className="flex flex-col gap-10 md:gap-20 md:flex-row">
          <h1 className="text-2xl font-bold md:text-3xl">{t("MonthsSection.subtitle")}</h1>

        </div>

        {/* زر عرض الكل */}
        <div className="flex items-center justify-between gap-20 md:mr-6 md:mb-4">
          <Link
            to="/products"
            className="motion-safe:hover:animate-pulse text-xs md:text-base md:px-7 py-3 text-center  rounded px-4 bg-red-600 text-white hover:bg-red-500 transition-transform duration-100 transform hover:translate-y-[-4px]"
          >
            {t("MonthsSection.view_all_products")}
          </Link>
        </div>


      </div>

      

      {/* المنتجات - Scroll أفقي */}
      <div
        ref={scrollRef}
        className="flex gap-6 mt-6 mb-8 overflow-x-auto scrollbar-hide"
      >
        {products.slice(0, 8).map((product) => (
          <div className="min-w-[250px]" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <hr className="mx-40 border-gray-300 md:mt-16" />
    </section>
  );
}
