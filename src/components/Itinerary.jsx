import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import "../styles/components/Activity.css";
import Reaction from "./Reaction";

export default function Itinerary({ itinerary }) {
  let reactions = useSelector(store => store.reactions);
  let [isShowingComments, setIsShowingComments] = useState(false);
  let [indexCarousel, setIndexCarousel] = useState(0);
  useEffect(() => {
    const id = setTimeout(() => {
      if (indexCarousel === itinerary.photo.length - 1) {
        setIndexCarousel(0);
      } else {
        setIndexCarousel(indexCarousel + 1);
      }
    }, 5000);

    return () => clearTimeout(id);
  });

  const showComments = () => {
    setIsShowingComments(!isShowingComments);
  };

  return (
    <div className="Activity" key={itinerary.key}>
      <img className="Activity-image" src={itinerary.photo[indexCarousel]} alt={itinerary.name} />
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
      {reactions[itinerary._id] && (
        <div className="Activity-reactionContainer">
          {reactions[itinerary._id].map(reaction => (
            <Reaction key={reaction._id} name={reaction.name} icon={reaction.iconBack} count={reaction.count} />
          ))}
        </div>
      )}
    </div>
  );
}
