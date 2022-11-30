import React from "react";
import "../styles/components/Reaction.css";

export default function Reaction({ name, icon, iconBack, reacted, count, onReaction }) {
  return (
    <div className="Reaction">
      <button onClick={onReaction}>
        <img className={reacted ? "Reaction-icon" : "Reaction-iconBack"} src={reacted ? icon : iconBack} alt={name} />
      </button>
      <p className="Reaction-count">{count > 0 && count}</p>
    </div>
  );
}
