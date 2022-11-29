import React from "react";
import axios from "axios";
import "../styles/pages/EditCollection.css";

import { useState, useEffect } from "react";







export default function UpdateProfileForm({ onSubmit, formRef, user }) {

  let [hotel, setHotel] = useState([]);
  
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/hotels`)
      .then((response) => {
        setHotel(response.data.response);
      })
      .catch((error) => {
        alert(`${error.response.data.message}, ${error.message}`);
      });
  }, []);
  return (
    <form ref={formRef} onSubmit={onSubmit} className="Form">
      <div className="Form-field">
        <label htmlFor="show-name">Show Name: </label>
        <input
          // defaultValue={showEdit.name}
          type="text"
          name="name"
          id="show-name"
          className="Form-input"
        />
      </div>
      <div className="Form-field">
        <label htmlFor="photo-url">Photo (URL):</label>
        <input
          // defaultValue={showEdit.photo ? showEdit.photo : ""}
          type="text"
          name="photo"
          id="photo-url"
          className="Form-input"
        />
      </div>
      <div className="Form-field">
        <label htmlFor="price">Price:</label>
        <input
          // defaultValue={showEdit.price}
          type="text"
          name="price"
          id="price"
          className="Form-input"
        />
      </div>

      <div className="Form-field">
        <label htmlFor="date">Date:</label>
        <input
          // defaultValue={showEdit.price}
          type="date"
          name="date"
          id="date"
          className="Form-input"
        />
      </div>

      <div className="Form-field">
        <label htmlFor="description">Description:</label>
        <textarea
          // defaultValue={showEdit.description}
          type="text"
          name="description"
          id="description"
          className="Form-textarea"
        />
      </div>
      <div className="Form-field">
        <label htmlFor="hotelId">Hotel:</label>
        {hotel.length && (
          <select
            // defaultValue={showEdit.hotelId}
            name="hotelId"
            id="hotelId"
            className="Form-input"
          >
            <option value="">--Choose Hotel--</option>
            {hotel.map((names) => (
              <option key={names._id} value={names._id}>
                {names.name}
              </option>
            ))}
          </select>
        )}
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
