
import React from "react";
import "../styles/components/scroll-to-top.css"








export default function ScrollToTop() {
 
  return (
    <button
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }}
      className="scroll-top"
    >
      <img src="./img/scroll-to-top.svg" alt="scroll-button" />
    </button>
  );
}
