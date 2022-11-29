import axios from "axios";
import React from "react";
import swal from "sweetalert";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { useNavigate, useParams } from "react-router";
import "../styles/pages/EditCollection.css";
import { useSelector } from "react-redux";

export default function EditMyTinerary() {
  let { itinerary: itineraryId } = useParams();
  let { token } = useSelector(store => store.signIn);
  const [itinerary, setItinerary] = useState(null);
  const [cities, setCities] = useState([]);
  let navigate = useNavigate();
  let formRef = useRef(null);
  let [message, setMessage] = useState("...Loading");
  useEffect(() => {
    const getCities = () => axios.get(`${process.env.REACT_APP_API_URL}/api/cities`);
    const getItineraries = () => axios.get(`${process.env.REACT_APP_API_URL}/api/itineraries/${itineraryId}`);

    Promise.all([getCities(), getItineraries()])
      .then(results => {
        let [citiesRes, itinerariesRes] = results;
        setCities(citiesRes.data.response);
        setItinerary(itinerariesRes.data.response);
        setMessage("");
      })
      .catch(error => {
        if (error.response) {
          setMessage("error", error.response.data.message || error.response.data, "error");
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
      .put(`${process.env.REACT_APP_API_URL}/api/itineraries/${itineraryId}`, newItinerary, headers)
      .then(response => {
        if (response.data.success) {
          swal("Itinerary edited", "The itinerary was edited succesfully", "success");
          navigate(`/mytineraries`);
        } else {
          swal("Error", "Something went wrong", "error");
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
      <h1 className="EditCollection-title">Edit Tinerary</h1>
      {message ? (
        <h2 className="EditCollection-title">{message}</h2>
      ) : (
        itinerary && (
          <form ref={formRef} onSubmit={onSubmit} className="EditCollectionForm">
            <div className="EditCollectionForm-field">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                defaultValue={itinerary.name}
                className="EditCollectionForm-input"
              />
            </div>
            <div className="EditCollectionForm-field">
              <label htmlFor="photo">Photo 1 URL:</label>
              <input
                type="text"
                name="photo"
                id="photo"
                defaultValue={itinerary.photo[0] ? itinerary.photo[0] : ""}
                className="EditCollectionForm-input"
              />
            </div>

            <div className="EditCollectionForm-field">
              <label htmlFor="photo2">Photo 2 URL:</label>
              <input
                type="text"
                name="photo"
                id="photo2"
                defaultValue={itinerary.photo[1] ? itinerary.photo[1] : ""}
                className="EditCollectionForm-input"
              />
            </div>

            <div className="EditCollectionForm-field">
              <label htmlFor="photo3">Photo 3 URL:</label>
              <input
                type="text"
                name="photo"
                id="photo3"
                defaultValue={itinerary.photo[2] ? itinerary.photo[2] : ""}
                className="EditCollectionForm-input"
              />
            </div>

            <div className="EditCollectionForm-field">
              <label htmlFor="price">Price in USD:</label>
              <input
                type="number"
                name="price"
                id="price"
                defaultValue={itinerary.price}
                className="EditCollectionForm-input"
              />
            </div>
            <div className="EditCollectionForm-field">
              <label htmlFor="duration">Duration in hours:</label>
              <input
                type="number"
                name="duration"
                id="duration"
                defaultValue={itinerary.duration}
                className="EditCollectionForm-input"
              />
            </div>

            <div className="EditCollectionForm-field">
              <label htmlFor="city">City:</label>
              {cities.length && (
                <select name="cityId" id="city" defaultValue={itinerary.cityId} className="NewCityForm-input">
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
              <textarea
                name="description"
                id="description"
                defaultValue={itinerary.description}
                className="EditCollectionForm-textarea"
              />
            </div>
            <input type="submit" value="Edit Itinerary" className="EditCollectionForm-button" />
          </form>
        )
      )}
    </div>
  );
}
