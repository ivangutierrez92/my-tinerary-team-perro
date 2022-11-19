import React from "react";
import '../styles/components/Checkbox.css';

export default function Checkbox({name, checked, onClick}) {
  return (
    <div className="Checkbox-container">
      <label htmlFor={name}>{name}</label>
      <input type="checkbox" defaultChecked={checked} onClick={onClick} name={name} id={name} />
    </div>
  );
}
