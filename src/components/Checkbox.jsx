import React from "react";
import '../styles/components/Checkbox.css';

export default function Checkbox({name, onClick}) {
  return (
    <div className="Checkbox-container">
      <label htmlFor={name}>{name}</label>
      <input type="checkbox" onClick={onClick} name={name} id={name} />
    </div>
  );
}
