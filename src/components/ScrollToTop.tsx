import React, { useState, useEffect } from "react";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Use smooth scrolling
    });
  };

  return (
    <div
      className={`${
        isVisible ? "translate-x-0" : "translate-x-56"
      } fixed right-0 bottom-0 m-4 transition-transform duration-300 ease-in-out`}
    >
      <button
        onClick={scrollToTop}
        className="bg-[#ff6600] hover:bg-[#ff8000] text-white font-bold p-3 shadow-xl rounded-full"
      >
        <svg
          fill="currentColor"
          viewBox="0 0 16 16"
          height="2em"
          width="2em"
        >
          <path
            fillRule="evenodd"
            d="M8 12a.5.5 0 00.5-.5V5.707l2.146 2.147a.5.5 0 00.708-.708l-3-3a.5.5 0 00-.708 0l-3 3a.5.5 0 10.708.708L7.5 5.707V11.5a.5.5 0 00.5.5z"
          />
        </svg>
      </button>
    </div>
  );
};

export default ScrollToTop;
