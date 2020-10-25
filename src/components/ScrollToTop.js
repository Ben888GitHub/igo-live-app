import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import "../App.css";

function ScrollToTop() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 300) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    //   <Left/>
    <FaArrowCircleUp
      className="scrollTop"
      onClick={scrollTop}
      style={{
        // marginLeft: 30,
        height: 50,
        display: showScroll ? "flex" : "none",
      }}
    />
  );
}

export default ScrollToTop;
