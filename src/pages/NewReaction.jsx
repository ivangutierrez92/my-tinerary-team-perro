import axios from "axios";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import swal from "sweetalert";

export default function NewReaction() {
  const [itineraries, setItineraries] = useState([]);
  const [shows, setShows] = useState([]);
  const formRef = useRef(null);
  const { token } = useSelector(store => store.signIn);
  const [activity, setActivity] = useState("itineraryId");
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/itineraries`)
      .then(res => {
        setItineraries(res.data.response);
      })
      .catch();
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/shows`)
      .then(res => {
        setShows(res.data.response);
      })
      .catch(() => {});
  }, []);

  const changeActivity = activityChanged => {
    setActivity(activityChanged);
  };

  const onSubmit = async event => {
    event.preventDefault();
    let properties = ["name", "icon", "iconBack"];
    let newReaction = {};
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    properties.forEach(property => {
      newReaction[property] = formRef.current.elements[property].value;
    });
    newReaction[activity] = formRef.current.elements[activity].value;
    try {
      let confirmation = await swal({
        title: "Is the icon correct?",
        icon: newReaction.icon,
        buttons: ["Cancel", "Confirm"],
      });
      if (confirmation) {
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
      {!shows.length && !itineraries.length ? (
        <h2 className="EditCollection-title">There aren't activities</h2>
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

          <div>
            <button type="button" onClick={() => changeActivity("itineraryId")}>
              Itineraries
            </button>
            <button type="button" onClick={() => changeActivity("showId")}>
              Shows
            </button>
          </div>
          {activity === "itineraryId" ? (
            <>
              <label htmlFor="itinerary">Itinerary:</label>
              {itineraries.length && (
                <select name="itineraryId" id="itinerary" defaultValue="" className="EditCollectionForm-input">
                  <option value="">-- Select Itinerary --</option>
                  {itineraries.map(itinerary => (
                    <option key={itinerary._id} value={itinerary._id}>
                      {itinerary.name}
                    </option>
                  ))}
                </select>
              )}
            </>
          ) : (
            <>
              <label htmlFor="show">Show:</label>
              {shows.length && (
                <select name="showId" id="show" defaultValue="" className="EditCollectionForm-input">
                  <option value="">-- Select Show --</option>
                  {shows.map(show => (
                    <option key={show._id} value={show._id}>
                      {show.name}
                    </option>
                  ))}
                </select>
              )}
            </>
          )}
          <div className="EditCollectionForm-field"></div>

          <input type="submit" value="Create Reaction" className="EditCollectionForm-newButton" />
        </form>
      )}
    </div>
  );
}
