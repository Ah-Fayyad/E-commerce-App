import React from "react";
import LeftSidebar from "./LeftSidebar";
import Sidebar from "./Sidebar";

export default function SidebarsContainer() {
  return (
    <div className="flex flex-col gap-6 px-4 md:flex-row">
      
      {/* Left Sidebar */}
      <div className="flex-shrink-0 w-full md:w-64">
        <LeftSidebar />
      </div>

      {/* فاصل بسيط (يظهر بس في الشاشات الكبيرة) */}
      <div className="hidden border-l border-gray-300 md:block"></div>

      {/* Right Sidebar */}
      <div className="flex-grow w-full">
        <Sidebar />
      </div>
    </div>
  );
}
