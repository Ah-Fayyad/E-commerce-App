import React from "react";
import SidebarsContainer from "../components/SidebarsContainer";
import ProductsSection from "../components/ProductsSection";
import CategoriesSection from "../components/CategoriesSection";
import MonthsSection from "../components/MonthsSection";
import BannerSection from "../components/BannerSection";
import Myproducts from "../components/Myproducts";
import PremiumProducts from './../components/PremiumProducts';
import FeatureService from './../components/FeatureService';

export default function Home() {
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

      {/* قسم منتجاتنا   */}
      <Myproducts />
      {/* PremiumProducts */}
      <PremiumProducts />
      {/* FeatureService */}
      <FeatureService />
    </div>
  );
}
