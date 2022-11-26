import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import swal from "sweetalert";
import "../styles/pages/EditCollection.css";

export default function NewItinerary() {
  const [cities, setCities] = useState([]);
  let navigate = useNavigate();
  let formRef = useRef(null);
  let { token } = useSelector(store => store.signIn);
  let [message, setMessage] = useState("");
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/cities`)
      .then(res => {
        setCities(res.data.response);
      })
      .catch(error => {
        if (error.response) {
          setMessage(error.response.data.message);
        } else {
          setMessage(error.message);
        }
      });
  }, []);

  let onSubmit = event => {
    event.preventDefault();

    let properties = ["name", "photo", "price", "duration", "description", "cityId"];
    let newItinerary = {};
    let headers = { headers: { Authorization: `Bearer ${token}` } };

    properties.forEach(property => {
      if (property === "photo") {
        newItinerary["photo"] = [...formRef.current.elements["photo"]].map(photo => photo.value);
      } else {
        newItinerary[property] = formRef.current.elements[property].value;
      }
    });

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/itineraries`, newItinerary, headers)
      .then(response => {
        console.log(response);
        if (response.data.success) {
          swal("Itinerary created", "The itinerary was created succesfully", "success");
          navigate("/mytineraries");
        } else {
          swal("Error", response.data.message.join("\n"), "error");
        }
      })
      .catch(error => {
        if (error.response) {
          swal("Error", error.response.data.message || error.response.data, "error");
        } else {
          swal("Error", error.message, "error");
        }
      });
  };

  return (
    <div className="EditCollection">
      <h1 className="EditCollection-title">New Itinerary</h1>
      {message ? (
        <h2 className="EditCollection-title">{message}</h2>
      ) : (
        <form ref={formRef} onSubmit={onSubmit} className="EditCollectionForm">
          <div className="EditCollectionForm-field">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" className="EditCollectionForm-input" />
          </div>
          <div className="EditCollectionForm-field">
            <label htmlFor="photo">Photo 1 URL:</label>
            <input type="text" name="photo" id="photo" className="EditCollectionForm-input" />
          </div>

          <div className="EditCollectionForm-field">
            <label htmlFor="photo2">Photo 2 URL:</label>
            <input type="text" name="photo" id="photo2" className="EditCollectionForm-input" />
          </div>

          <div className="EditCollectionForm-field">
            <label htmlFor="photo3">Photo 3 URL:</label>
            <input type="text" name="photo" id="photo3" className="EditCollectionForm-input" />
          </div>

          <div className="EditCollectionForm-field">
            <label htmlFor="price">Price in USD:</label>
            <input type="number" name="price" id="price" className="EditCollectionForm-input" />
          </div>
          <div className="EditCollectionForm-field">
            <label htmlFor="duration">Duration in hours:</label>
            <input type="number" name="duration" id="duration" className="EditCollectionForm-input" />
          </div>

          <div className="EditCollectionForm-field">
            <label htmlFor="city">City:</label>
            {cities.length && (
              <select name="cityId" id="city" defaultValue="" className="NewCityForm-input">
                <option value="">-- Select City --</option>
                {cities.map(city => (
                  <option key={city._id} value={city._id}>
                    {city.name}
                  </option>
                ))}
              </select>
            )}
          </div>

          <div className="EditCollectionForm-field">
            <label htmlFor="description">Description:</label>
            <textarea name="description" id="description" className="EditCollectionForm-textarea" />
          </div>

          <input type="submit" value="Create City" className="EditCollectionForm-newButton" />
        </form>
      )}
    </div>
  );
}
