"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Volver arriba"
          className="
            fixed
            bottom-6
            right-6
            z-50
            bg-blue-600/90
            hover:bg-blue-700
            text-white
            p-3
            rounded-full
            shadow-lg
            backdrop-blur
            transition
            hover:scale-110
          "
        >
          ↑
        </button>
      )}
    </>
  );
}
