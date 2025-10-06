import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import SkeletonCard from "../components/SkeletonCard";
import products from "../data/products";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Categories() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  // الفئات (ثابتة + all)
  const categories = [
    { key: "all", label: t("dis categories.all") },
    { key: "عام", label: t("dis categories.general") },
    { key: "تكنولوجيا", label: t("dis categories.tech") },
    { key: "ألعاب", label: t("dis categories.games") },
    { key: "ملابس", label: t("dis categories.clothes") },
    { key: "جديد", label: t("dis categories.new") },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  // فلترة المنتجات
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-8 text-3xl font-bold text-center">
        {t("dis categories.title")}
      </h1>

      {/* Dropdown لاختيار الفئة */}
      <div className="flex justify-center mb-6">
        <select
          value={selectedCategory}
          onChange={(e) => {
            setLoading(true);
            setSelectedCategory(e.target.value);
          }}
          className="px-4 py-2 text-gray-700 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          {categories.map((cat, i) => (
            <option key={i} value={cat.key}>
              {cat.label}
            </option>
          ))}
        </select>
      </div>

      {/* شبكة المنتجات */}
      <div className="grid items-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
          : filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-full">
                {t("dis categories.noProducts")}
              </p>
            )}
      </div>

      {/* زر العودة */}
      <div className="flex justify-between w-full max-w-2xl mx-auto mt-8">
        <Link
          to="/Products"
          className="px-6 py-3 text-sm text-black transition-transform duration-100 transform border border-gray-600 rounded-md cursor-pointer hover:shadow-xl hover:-translate-y-1 md:text-lg md:px-12"
        >
          {t("dis categories.viewAll")}
        </Link>

        <Link
          to="/"
          className="px-6 py-3 text-sm text-white transition-transform duration-100 transform bg-red-600 rounded motion-safe:hover:animate-pulse md:text-base md:px-12 hover:bg-red-500 hover:-translate-y-1"
        >
          {t("dis categories.backHome")}
        </Link>
      </div>
    </div>
  );
}
