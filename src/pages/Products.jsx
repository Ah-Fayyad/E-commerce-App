import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import SkeletonCard from "../components/SkeletonCard";
import products from "../firebase/products";
import { Link } from "react-router-dom";

export default function Products() {
  const [visibleCount, setVisibleCount] = useState(10);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 6);
      setLoading(false);
    }, 1000);
  };

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="container justify-center px-4 py-8 mx-auto">
      <h1 className="mb-8 text-4xl font-bold text-center">كل المنتجات</h1>

      {/* شبكة المنتجات */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
          : filteredProducts.slice(0, visibleCount).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>

      {/* زر تحميل المزيد */}
      {visibleCount < filteredProducts.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleLoadMore}
            className="text-center rounded-md px-6 py-3 shadow hover:shadow-md active:shadow-inner transition
            hover:bg-gray-50 border text-[#696A75] hover:text-[#696A75] border-[#696A75] hover:border-[#696A75]
            hover:scale-105 transform duration-300 ease-in-out"
          >
            تحميل المزيد
          </button>
        </div>
      )}

      {/* أزرار التنقل */}
      <div className="flex justify-between w-full max-w-2xl mx-auto mt-8">
        <Link
          to="/categories"
          className="px-6 py-3 text-sm text-black transition-transform duration-100 transform border border-gray-600 rounded-md cursor-pointer hover:shadow-xl hover:-translate-y-1 md:text-lg md:px-12"
        >
          استكشاف حسب الفئة
        </Link>

        <Link
          to="/"
          className="px-6 py-3 text-sm text-white transition-transform duration-100 transform bg-red-600 rounded motion-safe:hover:animate-pulse md:text-base md:px-12 hover:bg-red-500 hover:-translate-y-1"
        >
          العودة إلى الرئيسية
        </Link>
      </div>
    </div>
  );
}
