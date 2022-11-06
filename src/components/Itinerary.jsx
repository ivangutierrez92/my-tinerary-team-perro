import React, { useEffect, useState } from "react";
import "../styles/components/Itinerary.css";
import registeredUsers from "../data/registeredUsers";

export default function Itinerary({ itinerary }) {
  let [user, setUser] = useState("");
  let [isShowingComments, setIsShowingComments] = useState(false);
  useEffect(() => {
    let itineraryUser = registeredUsers.find(user => user.id === itinerary.userId);
    setUser(itineraryUser);
  }, [itinerary]);

  const showComments = () => {
    setIsShowingComments(!isShowingComments);
  };

  return (
    <div className="Itinerary" key={itinerary.key}>
      <img className="Itinerary-image" src={itinerary.photo[0]} alt={itinerary.name} />
      <div className="Itinerary-body">
        <h3>{itinerary.name}</h3>
        <p>{itinerary.description}</p>
        <div className="Itinerary-info">
          <p>
            <span className="bold">Price:</span> {itinerary.price} USD.
          </p>
          <p>
            <span className="bold">Duration:</span> {itinerary.duration} hrs.
          </p>
        </div>
        <p>
          Review By: {user?.name} {user?.lastName}
        </p>
        <button className="Itinerary-button" onClick={showComments}>
          Comments
        </button>
        {isShowingComments && (
          <>
            <hr></hr>
            <div className="Itinerary-comments"></div>
          </>
        )}
      </div>
    </div>
  );
}
