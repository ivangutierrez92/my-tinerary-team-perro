import React, { useEffect, useState } from "react";
import "../styles/components/show.css";
import "../styles/components/Activity.css";
import Comments from "./Comments";
import NewComment from "./NewComment";
import { useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import commentsActions from "../redux/actions/commentsActions";

export default function Show({ shows }) {

  let comments = useSelector((store) => store.comments);
  let formRef = useRef(null);
  let [buttonComent, SetButtonComent] = useState(false);
  const buttonClick = () => SetButtonComent(!buttonComent);
  let user = useSelector((store) => store.signIn);
  let dispatch = useDispatch();
  let { getInicialComments, createComment } = commentsActions;

  const onSubmit = async (event) => {
    event.preventDefault();

    let newComment = {};
    newComment["comment"] = formRef.current.elements["comment"].value;
    newComment["showId"] = shows._id;
  
    try {
      let answer = await swal("This comment will be posted", {
        buttons: ["cancel", "ok"],
        dangerMode: true,
      });

      if (answer) {
        let headers = { headers: { Authorization: `Bearer ${user.token}` } };
        let response =await dispatch(createComment({newComment,headers})).unwrap()

        if (response.success) {
              swal(
                "Comment Posted",
                "New Comment added successfully",
                "success"
              );
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
    dispatch(getInicialComments(shows._id));
  }, []);


  return (
    <article className="Activity">
      <img className="Activity-image" src={shows.photo} alt={shows.name} />
      <div className="Activity-body">
        <p className="p-show">{shows.name}</p>
        <p>{shows.description}</p>
        <div className="Activity-info">
          <p>Price: ${shows.price}</p>
        </div>
        <button className="Activity-button" onClick={buttonClick}>
          Comments
        </button>
        {buttonComent ? (
          <>
            <NewComment formRef={formRef} onSubmit={onSubmit} user={user}  />
          {
              comments[shows._id]?.map((comment)=>(

              <Comments comment={comment} user={comment.userId.name ||user.name} isUser = {user.id === (comment.userId._id||comment.userId)  }/>
              
              ))



          }
          
          </>
        ) : (
          ""
        )}
      </div>
    </article>
  );
}
