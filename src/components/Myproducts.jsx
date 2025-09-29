import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import products from "../data/Myproducts";

export default function MyProducts() {
  return (
    <section className="container gap-14 px-4 mx-auto">
      {/* العنوان */}
      <div className="flex flex-row items-center gap-4 mb-8 font-semibold md:text-lg">
        <span className="w-5 h-10 bg-red-500 rounded"></span>
        <span className="text-red-500">منتجاتنا</span>
      </div>

      <div className="flex items-center md:justify-between md:mr-6 md:mb-4">
        <h1 className="text-2xl font-bold md:text-3xl">استكشف منتجاتنا</h1>
      </div>

      {/* المنتجات بدون scroll */}
      <div className="grid grid-cols-2 gap-6 mb-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
        {products.slice(0, 8).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* زر عرض جميع المنتجات */}
      <div className="flex justify-center mt-4">
        <Link
          to="/products"
          className="motion-safe:hover:animate-pulse text-sm md:text-base md:px-12 py-3 rounded px-6 bg-red-600 text-white hover:bg-red-500 transition-transform duration-100 transform hover:translate-y-[-4px]"
        >
          عرض جميع المنتجات
        </Link>
      </div>

      <hr className="mx-40 border-gray-300 md:mt-16" />
    </section>
  );
}
