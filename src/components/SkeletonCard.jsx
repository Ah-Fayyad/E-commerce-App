import React from "react";

export default function SkeletonCard() {
  return (
    <div className="p-4 border rounded-lg shadow-md animate-pulse">
      <div className="h-40 mb-4 bg-gray-300 rounded"></div>
      <div className="h-4 mb-2 bg-gray-300 rounded"></div>
      <div className="w-2/3 h-4 bg-gray-300 rounded"></div>
    </div>
  );
}
