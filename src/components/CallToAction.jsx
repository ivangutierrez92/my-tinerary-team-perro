import React from "react";
import "../styles/components/CallToAction.css";

export default function CallToAction({ icon, content }) {
  return (
    <button className="CallToAction">
      <img src={icon} alt=""/>
      {content}
    </button>
  );
}
