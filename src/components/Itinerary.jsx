import React, { useState } from "react";
import "../styles/components/Activity.css";

export default function Itinerary({ itinerary }) {
  let [isShowingComments, setIsShowingComments] = useState(false);

  const showComments = () => {
    setIsShowingComments(!isShowingComments);
  };

  return (
    <div className="Activity" key={itinerary.key}>
      <img className="Activity-image" src={itinerary.photo[0]} alt={itinerary.name} />
      <div className="Activity-body">
        <h3>{itinerary.name}</h3>
        <p>{itinerary.description}</p>
        <div className="Activity-info">
          <p>
            <span className="bold">Price:</span> {itinerary.price} USD.
          </p>
          <p>
            <span className="bold">Duration:</span> {itinerary.duration} hrs.
          </p>
        </div>
        <button className="Activity-button" onClick={showComments}>
          Comments
        </button>
        {isShowingComments && (
          <>
            <hr></hr>
            <div className="Activity-comments"></div>
          </>
        )}
      </div>
    </div>
  );
}
