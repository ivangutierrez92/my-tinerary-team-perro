import React from "react";
import { useRef } from "react";
import Layout from "../layouts/Layout";
import "../styles/pages/NewCity.css";

export default function NewCity() {
  let formRef = useRef(null);

  const onSubmit = event => {
    event.preventDefault();
    let properties = ["name", "continent", "population", "photo"];
    let newCity = {};
    properties.forEach(property => {
      newCity[property] = formRef.current.elements[property];
    });
    console.log(newCity);
  };
  return (
    <Layout>
      <div className="NewCity">
        <h1 className="NewCity-title">New City</h1>
        <hr />
        <form ref={formRef} onSubmit={onSubmit} className="NewCity-form">
          <div className="NewCity-form-field">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" className="NewCity-formInput" />
          </div>
          <div className="NewCity-form-field">
            <label htmlFor="continent">Continent:</label>
            <select name="continent" id="continent" defaultValue="" className="NewCity-formInput">
              <option value="">-- Select continent --</option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
          <div className="NewCity-form-field">
            <label htmlFor="photo">Photo's URL:</label>
            <input type="email" name="email" id="email" className="NewCity-formInput" />
          </div>
          <div className="NewCity-form-field">
            <label htmlFor="pupulation">Population:</label>
            <input type="number" name="population" id="population" min={0} className="NewCity-formInput" />
          </div>

          <input type="submit" value="Create City" className="NewCity-button" />
        </form>
      </div>
    </Layout>
  );
}
