import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ProductCard({ product }) {
  const { t } = useTranslation();

  return (
    <div className="relative flex flex-col items-center p-2">
      {/* الصورة */}
      <div className="relative group flex items-center justify-center w-[270px] h-80 md:h-60 bg-zinc-100 rounded transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2">
        <Link to={`/products/${product.id}`}>
          <img
            loading="lazy"
            src={product.image}
            alt={product.name}
            className="object-contain w-full max-h-52 hover:animate-pulse"
          />
        </Link>
      </div>

      {/* تفاصيل الاسم والسعر */}
      <div className="flex flex-col items-center md:items-start">
        <h3 className="mt-4 text-lg font-base">
          {t(`productspage.${product.name}`)}
        </h3>

        <p className="text-sm font-semibold text-red-500">
          {t("productspage.priceSymbol")}
          {product.price}
          <span className="ml-2 text-sm font-semibold text-gray-500 line-through">
            {t("productpage.priceSymbol")}
            {product.oldPrice}
          </span>
        </p>
      </div>
    </div>
  );
}
