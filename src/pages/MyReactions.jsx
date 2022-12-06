import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import myReactionsActions from "../redux/actions/myReactionsActions";
import reactionColors from "../data/reactionColors";
import "../styles/pages/MyReactions.css";
import swal from "sweetalert";

export default function MyReactions() {
  let { getMyReactions, deleteMyReaction } = myReactionsActions;
  let dispatch = useDispatch();
  let { id, token } = useSelector(store => store.signIn);
  let reactions = useSelector(store => store.myReactions);

  useEffect(() => {
    dispatch(getMyReactions({ userId: id, token }));
  }, []);

  const onDeleteReaction = async (reactionId, reactionName) => {
    let res = await swal("Confirmation", "Are you sure that you want to delete this reaction?", {
      buttons: ["Cancel", "Delete"],
      dangerMode: true,
    });
    if (res) {
      let dispatchResponse = await dispatch(deleteMyReaction({ reactionId, token, reactionName })).unwrap();
      if (!dispatchResponse.success) {
        swal("Error", dispatchResponse.message, "error");
      }
    }
  };

  return (
    <div className="MyReactions">
      <h1 className="MyReactions-main-title">My Reactions</h1>
      {reactions &&
        Object.keys(reactions).sort().map(
          key =>
            reactions[key].length && (
              <>
                <h2 className="MyReactions-title">{key}</h2>
                {reactions[key].map(reaction => (
                  <div className="MyReactions-activity" style={{ backgroundColor: reactionColors[key] || "black" }}>
                    <h3>{reaction.itineraryId ? reaction.itineraryId.name : reaction.showId.name}</h3>
                    <img className="MyReactions-activity-image" src={reaction.itineraryId ? reaction.itineraryId.photo[0] : reaction.showId.photo} />
                    <button
                      className="MyReactions-activity-button"
                      onClick={() => onDeleteReaction(reaction._id, reaction.name)}
                    >
                      X
                    </button>
                  </div>
                ))}
              </>
            )
        )}
    </div>
  );
}
