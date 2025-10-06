import React from "react";
import SidebarsContainer from "../components/SidebarsContainer";
import ProductsSection from "../components/ProductsSection";
import CategoriesSection from "../components/CategoriesSection";
import MonthsSection from "../components/MonthsSection";
import BannerSection from "../components/BannerSection";
import MyProductsSection from "../components/MyProductsSection";
import PremiumProducts from "../components/PremiumProducts";
import FeatureService from "../components/FeatureService";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation(); // ✅ استخدم الدالة t للترجمة

  return (
    <div className="space-y-8">

      {/* الجزء العلوي فيه LeftSidebar + Sidebar */}
      <SidebarsContainer />

      {/* قسم المنتجات */}
      <ProductsSection />

      {/* قسم الفئات مع الأسهم */}
      <CategoriesSection />

      {/* قسم عروض الفلاش مع scroll أفقي + أسهم تحكم */}
      <MonthsSection />

      {/* BannerSection */}
      <BannerSection />

      {/* قسم منتجاتنا */}
      <MyProductsSection />

      {/* PremiumProducts */}
      <PremiumProducts />

      {/* FeatureService */}
      <FeatureService />
    </div>
  );
}