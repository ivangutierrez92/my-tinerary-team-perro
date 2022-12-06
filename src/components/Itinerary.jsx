import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/components/Activity.css";
import Reaction from "./Reaction";
import reactionsActions from "../redux/actions/reactionsActions";
import commentsActions from "../redux/actions/commentsActions";
import Comments from "./Comments";
import NewComment from "./NewComment";
import { useRef } from "react";
import swal from "sweetalert";

let { getInicialComments, createComment } = commentsActions;


export default function Itinerary({ itinerary }) {
  let formRef = useRef(null);
  let user = useSelector((store) => store.signIn);
  let comments = useSelector((store) => store.comments);

  let reactions = useSelector(store => store.reactions);
  let {token} = useSelector(store => store.signIn);
  let {toggleReaction} = reactionsActions
  let [isShowingComments, setIsShowingComments] = useState(false);
  let [indexCarousel, setIndexCarousel] = useState(0);
  const dispatch = useDispatch();

  const onSubmit = async (event) => {

    event.preventDefault();

    let newComment = {};
    newComment["comment"] = formRef.current.elements["comment"].value;
    newComment["itineraryId"] = itinerary._id;

    try {
      let answer = await swal("This comment will be posted", {
        buttons: ["cancel", "ok"],
        dangerMode: true,
      });

      if (answer) {
        let headers = { headers: { Authorization: `Bearer ${user.token}` } };
        let response = await dispatch(
          createComment({ newComment, headers, id:itinerary._id })
        ).unwrap();

        if (response.success) {
          swal("Comment Posted", "New Comment added successfully", "success");
          formRef.current.reset();
        } else {
          swal("Error", response.message.join("\n"), "error");
        }
      }
    } catch (error) {
      swal("Something went wrong", error.message, "error");
    }
  };








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
  useEffect(() => {
    dispatch(
      getInicialComments({
        id: itinerary._id,
        query: { params: { itineraryId: itinerary._id } },
      })
    );
  }, []);

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
        {isShowingComments ? (
          <>
            <NewComment formRef={formRef} onSubmit={onSubmit} user={user}  />
          {
              comments[itinerary._id]?.map((comment)=>(

              <Comments comment={comment} user={comment.userId.name ||user.name} isUser = {user.id === (comment.userId._id||comment.userId)} activityId={itinerary._id } />
              
              ))



          }
          
          </>
        ):("")
        }
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
