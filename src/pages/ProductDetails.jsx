import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products"; 


export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <h2 className="text-center text-red-500">المنتج غير موجود</h2>;
  }

  return (
    <div className="container flex flex-col gap-8 p-6 mx-auto md:flex-row">
      {/* صورة المنتج */}
      <div className="flex items-center justify-center flex-1">
        <img
          src={product.image}
          alt={product.name}
          className="object-contain rounded-lg shadow-md w-80 h-80"
        />
      </div>

      {/* تفاصيل المنتج */}
      <div className="flex flex-col flex-1 gap-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-lg text-gray-700">{product.description}</p>

        {/* التقييم */}
        <div className="flex items-center gap-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <span
              key={i}
              className={`text-xl ${
                product.rating >= i
                  ? "text-yellow-400"
                  : "text-gray-300"
              }`}
            >
              ★
            </span>
          ))}
          <span className="text-sm text-gray-600">
            {product.rating.toFixed(1)} ({product.reviews} تقييم)
          </span>
        </div>

        {/* السعر */}
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold text-red-600">
            ${product.price}
          </span>
          <span className="text-gray-500 line-through">
            ${product.oldPrice}
          </span>
        </div>


      </div>
    </div>
  );
}
