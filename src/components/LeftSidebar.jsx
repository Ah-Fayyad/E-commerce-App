import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function LeftSidebar() {
  const { t } = useTranslation();

  const itemClass =
    "block px-4 py-2 cursor-pointer hover:underline hover:underline-offset-8 ease-in-out duration-300 transform hover:translate-x-2";

  const categories = t("sidebarCategories", { returnObjects: true });

  return (
    <div className="flex-shrink-0 hidden w-64 text-gray-700 xl:block">
      <nav className="py-6">
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index} className={itemClass}>
              <Link to="/Products">{category}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}