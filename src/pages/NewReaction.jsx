import axios from "axios";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import swal from "sweetalert";
import Swal from "sweetalert2";

export default function NewReaction() {
  const [itineraries, setItineraries] = useState([]);
  const [message, setMessage] = useState("");
  const formRef = useRef(null);
  const {token} = useSelector(store => store.signIn);
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
  }, []);

  const onSubmit = async event => {
    event.preventDefault();
    let properties = ["name", "icon", "iconBack", "itineraryId"];
    let newReaction = {};
    let headers = {headers: {"Authorization": `Bearer ${token}`}}
    properties.forEach(property => {
      newReaction[property] = formRef.current.elements[property].value;
    });
    try {
      let confirmation = await Swal.fire({
        title: "Is the icon correct?",
        imageUrl: newReaction.icon,
        imageWidth: 50,
        imageHeight: 50,
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "cancel",
      });
      if (confirmation.isConfirmed) {
        let res = await axios.post(`${process.env.REACT_APP_API_URL}/api/reactions`, newReaction, headers);
        if (res.data.success) {
          swal("Success", "The reaction was created successfully", "success");
          formRef.current.reset();
        } else {
          swal("Error", res.data.message.join("\n"), "error");
        }
      }
    } catch (error) {
      if (error.response) {
        swal("Error", error.response.data.message || error.response.data, "error");
      } else {
        swal("Error", error.message, "error");
      }
    }
  };
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
