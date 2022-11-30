import React from "react";
import '../styles/components/Reaction.css';

export default function Reaction({ name, icon, count }) {
  return (
    <div className="Reaction">
      <button>
        <img className="Reaction-icon" src={icon} alt={name} />
      </button>
      <p className="Reaction-count">{count}</p>
    </div>
  );
}
