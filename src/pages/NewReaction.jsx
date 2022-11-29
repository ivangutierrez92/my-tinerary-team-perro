import axios from "axios";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function NewReaction() {
  const [itineraries, setItineraries] = useState([]);
  const [message, setMessage] = useState("");
  const formRef = useRef(null);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/itineraries`)
      .then(res => {
        setItineraries(res.data.response);
      })
      .catch(error => {
        if (error.response) {
          setMessage(error.response.data.message || error.response.data);
        } else {
          setMessage(error.message);
        }
      });
  });

  const onSubmit = () => {
    
  }
  return (
    <div className="EditCollection">
      <h1 className="EditCollection-title">New Reaction</h1>
      {message ? (
        <h2 className="EditCollection-title">{message}</h2>
      ) : (
        <form ref={formRef} onSubmit={onSubmit} className="EditCollectionForm">
          <div className="EditCollectionForm-field">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" className="EditCollectionForm-input" />
          </div>
          <div className="EditCollectionForm-field">
            <label htmlFor="icon">Icon:</label>
            <input type="text" name="icon" id="icon" className="EditCollectionForm-input" />
          </div>

          <div className="EditCollectionForm-field">
            <label htmlFor="iconBack">Icon Back:</label>
            <input type="text" name="iconBack" id="iconBack" className="EditCollectionForm-input" />
          </div>

          <div className="EditCollectionForm-field">
            <label htmlFor="itinerary">Itinerary:</label>
            {itineraries.length && (
              <select name="itineraryId" id="itinerary" defaultValue="" className="NewCityForm-input">
                <option value="">-- Select Itinerary --</option>
                {itineraries.map(itinerary => (
                  <option key={itinerary._id} value={itinerary._id}>
                    {itinerary.name}
                  </option>
                ))}
              </select>
            )}
          </div>

          <input type="submit" value="Create Reaction" className="EditCollectionForm-newButton" />
        </form>
      )}
    </div>
  );
}
