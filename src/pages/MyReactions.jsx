import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import myReactionsActions from "../redux/actions/myReactionsActions";
import reactionColors from "../data/reactionColors";
import '../styles/pages/MyReactions.css'

export default function MyReactions() {
  let { getMyReactions } = myReactionsActions;
  let dispatch = useDispatch();
  let { id, token } = useSelector(store => store.signIn);
  let reactions = useSelector(store => store.myReactions);

  useEffect(() => {
    dispatch(getMyReactions({ userId: id, token }));
  }, []);
  return (
    <div className="MyReactions">
      <h1 className="MyReactions-main-title">My Reactions</h1>
      {reactions &&
        Object.keys(reactions).map(key => (
          <>
            <h2 className="MyReactions-title">{key}</h2>
            {reactions[key].map(reaction => (
              <div className="MyReactions-activity" style={{backgroundColor: reactionColors[key] || "black"}}>
                <h3>{reaction.itineraryId.name}</h3>
                <img className="MyReactions-activity-image" src={reaction.itineraryId.photo[0]} />
                <button className="MyReactions-activity-button">X</button>
              </div>
            ))}
          </>
        ))}
    </div>
  );
}
