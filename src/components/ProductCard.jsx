import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import React from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify"; // 👈 إضافة toast

export default function ProductCard({ product }) {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { cartItems, addToCart, removeFromCart } = useCart();

  const isInWishlist = wishlist.some((item) => item.id === product.id);
  const isInCart = cartItems.some((item) => item.id === product.id);

  // ✅ دوال مع رسائل إشعار
  const handleWishlist = () => {
    if (isInWishlist) {
      removeFromWishlist(product.id);
      toast.info(` تم إزالة ${product.name} من المفضلة`);
    } else {
      addToWishlist(product);
      toast.success(` تم إضافة ${product.name} إلى المفضلة`);
    }
  };

  const handleCart = () => {
    if (isInCart) {
      removeFromCart(product.id);
      toast.info(` تم إزالة ${product.name} من السلة`);
    } else {
      addToCart(product);
      toast.success(` تم إضافة ${product.name} إلى السلة`);
    }
  };

  return (
    <div className="relative flex flex-col items-center md:gap-14 py-10 px-10">
      <div className="relative flex items-center justify-center w-[270px] h-80 md:h-60 bg-zinc-100 rounded transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2 group">

        {/* الخصم */}
        <div className="absolute top-0 left-0 px-3 py-1 m-2 text-white bg-red-500 rounded">
          -{product.discount}%
        </div>

        {/* صورة المنتج */}
        <Link to={`/products/${product.id}`}>
          <img
            loading="lazy"
            src={product.image}
            alt={product.name}
            className="object-contain w-full max-h-52 hover:animate-pulse"
          />
        </Link>

        {/* زر القلب/المفضلة */}
        <div className="absolute duration-300 transform rounded-full top-2 right-2 bg-zinc-200 hover:scale-120 hover:-translate-y-1 motion-safe:hover:animate-pulse">
          <button
            onClick={handleWishlist}
            className="flex items-center justify-center w-12 h-12"
          >
            {isInWishlist ? (
              <RiDeleteBin6Line size={28} className="text-black" />
            ) : (
              <AiOutlineHeart
                size={28}
                className="text-red-500 transition-colors duration-300 hover:text-black"
              />
            )}
          </button>
        </div>

        {/* زر السلة */}
        <button
          onClick={handleCart}
          className={`absolute bottom-0 left-0 right-0 z-10 py-2 text-white 
            duration-300 transform transition-all ease-in-out
            opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0
            ${
              isInCart
                ? "bg-red-600 hover:bg-red-700 hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-400/50 motion-safe:hover:animate-pulse"
                : "bg-black hover:bg-gray-800 hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/50 motion-safe:hover:animate-pulse"
            }`}
        >
          {isInCart ? "إزالة من السلة" : "أضف إلى السلة"}
        </button>
      </div>

      {/* الاسم والسعر */}
      <div className="flex flex-col items-center md:items-start">
        <h3 className="mt-4 text-lg font-base">{product.name}</h3>
        <p className="text-sm font-semibold text-red-500">
          ${product.price}
          <span className="ml-2 text-sm font-semibold text-gray-500 line-through">
            ${product.oldPrice}
          </span>
        </p>
      </div>

      {/* التقييم */}
      <span className="flex items-center gap-2 mt-2 text-sm font-semibold text-gray-500">
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((i) => {
            if (product.rating >= i) {
              return (
                <span key={i} className="text-yellow-400">★
                </span>
              );
            } else if (product.rating >= i - 0.5) {
              return (
                <span key={i} className="text-yellow-400">
                  ☆
                </span>
              );
            } else {
              return (
                <span key={i} className="text-gray-300">
                  ★
                </span>
              );
            }
          })}
          <span className="text-sm text-gray-600">
            {product.rating.toFixed(1)}
          </span>
        </div>
        <button className="p-3 text-gray-500 transition duration-300 rounded-full bg-slate-100 hover:bg-slate-200">
          التقييم
        </button>
      </span>
    </div>
  );
}