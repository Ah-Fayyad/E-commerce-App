"use client";

import { useState, useEffect } from "react";

/**
 * Custom Hook: useDebounce
 * @param {any} value - القيمة المراد عمل debounce لها
 * @param {number} delay - مدة الانتظار بالمللي ثانية
 * @returns {any} debouncedValue - القيمة بعد انتهاء فترة الـ debounce
 *
 * مثال استخدام:
 * const debouncedSearch = useDebounce(searchTerm, 500);
 */
export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // إعداد المؤقت لتحديث القيمة بعد انتهاء delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // تنظيف المؤقت عند تغيير القيمة أو delay
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};
