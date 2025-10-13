import React, { useState, useEffect } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // يراقب النزول في الصفحة
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // لما أدوس يطلع فوق
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <div className="fixed z-50 bottom-6 right-6">
        {/* تأثير الخلفية ping */}
        <span className="absolute inline-flex w-12 h-12 rounded-full animate-ping bg-sky-400 opacity-20"></span>

        {/* الزر */}
        <button
          onClick={scrollToTop}
          aria-label="scroll-to-top"
          className="relative flex items-center justify-center w-12 h-12 transition bg-white rounded-full shadow-lg hover:bg-gray-100"
         >
          <svg
            className="animate-bounce"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 20V4M5 11L12 4L19 11"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    )
  );
}