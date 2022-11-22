import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useNavigate, useParams } from "react-router";
import swal from "sweetalert";
import "../styles/pages/EditCollection.css";

export default function EditMyCity() {
  let { city: cityId } = useParams();
  const [city, setCity] = useState(null);
  let navigate = useNavigate();
  let formRef = useRef(null);
  let [message, setMessage] = useState("...Loading");
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/cities/${cityId}`)
      .then(res => {
        setCity(res.data.response);
        setMessage("");
      })
      .catch(error => {
        if (error.response) {
          setMessage(error.response.data.message.join("\n"));
        } else {
          setMessage(error.message);
        }
      });
  }, []);

  let onSubmit = event => {
    event.preventDefault();

    let properties = ["name", "continent", "population", "photo"];
    let newCity = {};
    properties.forEach(property => {
      newCity[property] = formRef.current.elements[property].value;
    });
    axios
      .put(`${process.env.REACT_APP_API_URL}/api/cities/${cityId}`, newCity)
      .then(response => {
        swal("City Edited", "The city was edited succesfully", "success");
        navigate(`/city/${response.data.id}`);
      })
      .catch(error => {
        swal("Error", error.response.data.message.join("\n"), "error");
      });
  };

  return (
    <div className="EditCollection">
      <h1 className="EditCollection-title">Edit City</h1>
      {message ? (
        <h2 className="EditCollection-title">{message}</h2>
      ) : (
        city && (
          <form ref={formRef} onSubmit={onSubmit} className="NewCityForm">
            <div className="NewCityForm-field">
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" id="name" defaultValue={city.name} className="NewCityForm-input" />
            </div>
            <div className="NewCityForm-field">
              <label htmlFor="continent">Continent:</label>
              <select name="continent" id="continent" defaultValue={city.continent} className="NewCityForm-input">
                <option value="">-- Select continent --</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
              </select>
            </div>
            <div className="EditCollectionForm-field">
              <label htmlFor="photo">Photo's URL:</label>
              <input name="photo" id="photo" defaultValue={city.photo} className="EditCollectionForm-input" />
            </div>
            <div className="EditCollectionForm-field">
              <label htmlFor="population">Population:</label>
              <input
                type="number"
                name="population"
                id="population"
                defaultValue={city.population}
                className="EditCollectionForm-input"
              />
            </div>

            <input type="submit" value="Edit City" className="EditCollectionForm-button" />
          </form>
        )
      )}
    </div>
  );
}
