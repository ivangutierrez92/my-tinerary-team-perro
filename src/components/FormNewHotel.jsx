import React, { useState, useEffect } from "react";
import "../styles/components/form-new-hotel.css";
import "../styles/components/Form.css"
import axios from "axios";

export default function FormNewHotel({ onSubmit }) {
  let [city, setCity] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/cities`)
      .then((response) => {
        setCity(response.data.response);
      })
      .catch((error) => {
        alert(`${error.response.data.message}, ${error.message}`);
      });
  }, []);
  console.log(city);

  return (
        <form className="Form" onSubmit={onSubmit}>
          <div className="Form-field">
            <label htmlFor="hotel-name">Hotel Name: </label>
            <input type="text" name="name" id="hotel-name" className="Form-input"/>
          </div>
          <div className="Form-field">
            <label htmlFor="photo-url">Photo (URL):</label>
            <input type="text" name="photo" id="photo-url"  className="Form-input"/>
          </div>
          <div className="Form-field">
            <label htmlFor="capacity">Capacity:</label>
            <input type="text" name="capacity" id="capacity" className="Form-input" />
          </div>
          <div className="Form-field">
            <label htmlFor="city-id">City:</label>
            <select defaultValue="" name="cityId" id="city-id" className="Form-input">
              <option value="">--Choose city--</option>
              {city?.map((names) => (
                <option value={names._id}>{names.name}</option>
              ))}
            </select>
          </div>
          <input
            id="form-button"
            type="submit"
            value="Continue"
            className="Form-button"
          />
        </form>
  );
}
