import React, { useState, useEffect, useRef } from "react";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext"; 
import ProductCard from "../components/ProductCard";
import SkeletonCard from "../components/SkeletonCard";
import products from "../data/products";

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart(); // ✅ استخدم الكارت

  const [visibleCount, setVisibleCount] = useState(8);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);

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

  // فلترة المنتجات بحيث اللي في المفضلة متكررش تحت
  const filteredProducts = products.filter(
    (p) => !wishlist.some((w) => w.id === p.id)
  );

  const moveAllToCart = () => {
    wishlist.forEach((p) => {
      addToCart({ ...p, quantity: 1 }); // ✅ يتضاف في الكارت بكمية 1
      removeFromWishlist(p.id); // ✅ يتمسح من المفضلة
    });
  };

  return (
    <div className="mx-auto my-20 md:mx-2">
      {/* العنوان */}
      <div className="flex items-center justify-around mb-12 md:mr-6">
        <button
          onClick={moveAllToCart}
          disabled={wishlist.length === 0}
          className={`px-6 py-3 text-sm border rounded-md md:text-lg md:px-12 ${
            wishlist.length === 0
              ? "cursor-not-allowed bg-gray-100 text-gray-400"
              : "hover:bg-gray-200"
          }`}
        >
          وضع الكل في السلة
        </button>
        <h2 className="text-lg">قائمة رغباتك ({wishlist.length})</h2>
      </div>

      {/* لو المفضلة فيها منتجات */}
      {wishlist.length > 0 && (
        <div className="grid grid-cols-2 gap-6 mb-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
          {wishlist.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* المنتجات العادية (اللي مش في المفضلة) */}
      <div className="mb-12">
        <div
          ref={scrollRef}
          className="flex gap-6 mt-6 mb-8 overflow-x-auto scrollbar-hide"
        >
          {loading
            ? Array.from({ length: 8 }).map((_, i) => (
                <div className="min-w-[250px]" key={i}>
                  <SkeletonCard />
                </div>
              ))
            : filteredProducts.slice(0, visibleCount).map((product) => (
                <div className="min-w-[250px]" key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
        </div>

        {/* زر تحميل المزيد */}
        {visibleCount < filteredProducts.length && (
          <div className="flex justify-center">
            <button
              onClick={handleLoadMore}
              className="px-8 py-3 border rounded-md hover:bg-gray-100"
            >
              تحميل المزيد
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
