import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { useNavigate, useParams } from "react-router";
import swal from "sweetalert";
import "../styles/pages/EditCollection.css";

export default function EditMyTinerary() {
  let { itinerary: itineraryId } = useParams();
  const [itinerary, setItinerary] = useState(null);
  let navigate = useNavigate();
  let formRef = useRef(null);
  let [message, setMessage] = useState("...Loading");
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/itineraries/${itineraryId}`)
      .then(res => {
        setItinerary(res.data.response);
        setMessage("");
      })
      .catch(error => {
        console.log(error);
        if (error.response) {
          setMessage(error.response.data.message.join("\n"));
        } else {
          setMessage(error.message);
        }
      });
  }, []);

  let onSubmit = event => {
    event.preventDefault();

    let properties = ["name", "photo", "price", "duration", "description"];
    let newItinerary = {};

    properties.forEach(property => {
      if (property === "photo") {
        newItinerary["photo"] = [...formRef.current.elements["photo"]].map(photo => photo.value);
      } else {
        newItinerary[property] = formRef.current.elements[property].value;
      }
    });

    axios
      .put(`${process.env.REACT_APP_API_URL}/api/itineraries/${itineraryId}`, newItinerary)
      .then(response => {
        swal("Itinerary edited", "The itinerary was edited succesfully", "success");
        navigate(`/mytineraries`);
      })
      .catch(error => {
        swal("Error", error.response.data.message.join("\n"), "error");
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
              <label htmlFor="photo3">Photo 3 URLs:</label>
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
              <label htmlFor="description">Description:</label>
              <textarea
                name="description"
                id="description"
                defaultValue={itinerary.description}
                className="EditCollectionForm-textarea"
              />
            </div>

            <input type="submit" value="Edit City" className="EditCollectionForm-button" />
          </form>
        )
      )}
    </div>
  );
}
