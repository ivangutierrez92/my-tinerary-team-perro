import React from "react";
import "../styles/components/NewCityForm.css";

export default function NewCityForm({ formRef, onSubmit }) {
  return (
    <form ref={formRef} onSubmit={onSubmit} className="NewCityForm">
      <div className="NewCityForm-field">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" required className="NewCityForm-input" />
      </div>
      <div className="NewCityForm-field">
        <label htmlFor="continent">Continent:</label>
        <select name="continent" id="continent" defaultValue="" required className="NewCityForm-input">
          <option value="">-- Select continent --</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <div className="NewCityForm-field">
        <label htmlFor="photo">Photo's URL:</label>
        <input type="url" name="photo" id="photo" className="NewCityForm-input" />
      </div>
      <div className="NewCityForm-field">
        <label htmlFor="population">Population:</label>
        <input type="number" name="population" id="population" min={0} required className="NewCityForm-input" />
      </div>

      <input type="submit" value="Create City" className="NewCityForm-button" />
    </form>
  );
}
