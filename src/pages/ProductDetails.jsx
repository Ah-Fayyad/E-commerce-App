import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { useTranslation } from "react-i18next";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { t } = useTranslation();
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return (
      <h2 className="text-center text-red-500">
        {t("productDetails.not_found")}
      </h2>
    );
  }

  return (
    <div className="container flex flex-col gap-8 p-6 mx-auto md:flex-row">
      <div className="flex items-center justify-center flex-1">
        <img
          src={product.image}
          alt={product.name}
          className="object-contain rounded-lg shadow-md w-80 h-80"
        />
      </div>

      <div className="flex flex-col flex-1 gap-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-lg text-gray-700">{product.description}</p>

        <div className="flex items-center gap-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <span
              key={i}
              className={`text-xl ${
                product.rating >= i ? "text-yellow-400" : "text-gray-300"
              }`}
            >
              ★
            </span>
          ))}
          <span className="text-sm text-gray-600">
            {product.rating.toFixed(1)} ({product.reviews}{" "}
            {t("productDetails.reviews")})
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold text-red-600">
            ${product.price}
          </span>
          <span className="text-gray-500 line-through">
            ${product.oldPrice}
          </span>
        </div>

        <button
          onClick={() => addToCart(product)}
          className="px-6 py-3 mt-4 text-white transition-transform duration-100 transform bg-red-600 rounded-md hover:bg-red-500 hover:-translate-y-1"
        >
          {t("productDetails.add_to_cart")}
          
        </button>
      </div>
    </div>
  );
}