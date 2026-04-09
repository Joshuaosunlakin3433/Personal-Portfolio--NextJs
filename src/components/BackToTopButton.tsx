"use client";

import { useEffect, useState } from "react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 right-5 z-20 h-11 px-4 rounded-full border border-white/20 bg-gray-900/90 text-white/80 text-sm font-semibold hover:text-white hover:bg-gray-800 transition duration-300"
      aria-label="Back to top"
    >
      Back to Top
    </button>
  );
};

export default BackToTopButton;
