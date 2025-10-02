import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import Myproducts from "../data/Myproducts";

export default function MyProductsSection() {
  return (
    <section className="container px-4 mx-auto gap-14">
      {/* العنوان */}
      <div className="flex flex-row items-center gap-4 mb-8 font-semibold md:text-lg">
        <span className="w-5 h-10 bg-red-500 rounded"></span>
        <span className="text-red-500">منتجاتنا</span>
      </div>

      <div className="flex items-center md:justify-between md:mr-6 md:mb-4">
        <h1 className="text-2xl font-bold md:text-3xl">استكشف منتجاتنا</h1>
      </div>

      {/* المنتجات بدون scroll */}
      <div className="grid grid-cols-1 gap-6 mb-8 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {Myproducts.slice(0, 8).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* زر عرض جميع المنتجات */}
      <div className="flex justify-center mt-4">
        <Link
          to="/products"
          className="px-6 py-3 text-sm text-white transition-transform duration-100 transform bg-red-600 rounded motion-safe:hover:animate-pulse md:text-base md:px-12 hover:bg-red-500 hover:-translate-y-1"
        >
          عرض جميع المنتجات
        </Link>
      </div>

      <hr className="max-w-4xl mx-auto mt-16 border-gray-300" />
    </section>
  );
}
