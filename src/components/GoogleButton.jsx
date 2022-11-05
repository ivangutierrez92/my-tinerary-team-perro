import React from "react";
import "../styles/components/GoogleButton.css"

export default function GoogleButton({content}) {
  return (
    <button className="Google-button">
      <img src="./img/g-logo.png" alt="google icon"></img>{content}
    </button>
  );
}
