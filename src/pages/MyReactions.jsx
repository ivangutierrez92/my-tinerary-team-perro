import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import myReactionsActions from "../redux/actions/myReactionsActions";

export default function MyReactions() {
  let { getMyReactions } = myReactionsActions;
  let dispatch = useDispatch();
  let { id, token } = useSelector(store => store.signIn);
  let reactions = useSelector(store => store.myReactions);

  useEffect(() => {
    dispatch(getMyReactions({ userId: id, token }));
  }, []);
  return (
    <div>
      <h1>My Reactions</h1>
      {reactions &&
        Object.keys(reactions).map(key => (
          <>
            <h2>{key}:</h2>
            {reactions[key].map(reaction => (
              reaction.itineraryId.name
            ))}
          </>
        ))}
    </div>
  );
}
