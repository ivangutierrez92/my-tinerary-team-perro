import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/components/Activity.css";
import Reaction from "./Reaction";
import reactionsActions from "../redux/actions/reactionsActions";

export default function Itinerary({ itinerary }) {
  let reactions = useSelector(store => store.reactions);
  let {token} = useSelector(store => store.signIn);
  let {toggleReaction} = reactionsActions
  let [isShowingComments, setIsShowingComments] = useState(false);
  let [indexCarousel, setIndexCarousel] = useState(0);
  const dispatch = useDispatch();

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

  const onReaction = (name, itineraryId) => {
    dispatch(toggleReaction({name, itineraryId, token}))
  }

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
            <Reaction key={reaction._id} name={reaction.name} icon={reaction.icon} iconBack={reaction.iconBack} reacted={reaction.reacted} count={reaction.userId} onReaction={() => onReaction(reaction.name, itinerary._id)}/>
          ))}
        </div>
      )}
    </div>
  );
}
