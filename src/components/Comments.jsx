import React from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import commentsActions from "../redux/actions/commentsActions";
import "../styles/components/Comments.css";

let { deleteComments, updateComments } = commentsActions;

export default function Comments({ comment, user, isUser, activityId }) {
  let { token } = useSelector((store) => store.signIn);
  let date = comment.createdAt.split("T");
  let dispatch = useDispatch();
  const editing = () => {
    let id = comment._id;
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    swal("Write something here:", {
      content: "input",
      buttons: ["cancel", "update"],
    }).then((value) => {
      console.log(value);
      if (value !== 0) {
        let text = value;

        dispatch(updateComments({ id, text, headers, activityId })).unwrap();
      } else {
        swal("Error", "Not be empty", "error");
      }
    });
  };
  const trash = async () => {
    let id = comment._id;

    let headers = { headers: { Authorization: `Bearer ${token}` } };
    let res = await swal("Are you sure you want to delete ", {
      buttons: ["Cancel", "Delete"],
      dangerMode: true,
    });
    if (res) {
      dispatch(deleteComments({ id, headers, activityId }));
    }
  };

  return (
    <div className="comments">
      <img className="photo-profile" src={comment.photo} alt="" />

      <div class="info-comments">
        <div class={isUser ? "text-comment" : "text-comment-other"}>
          <div class="info-comment">
            <h4>{user}</h4>
            <h5>Date: {date[0]}</h5>
          </div>
          <div className="user-options">
            <p>{comment.comment}</p>
            {isUser ? (
              <div className="editing">
                <img src="/img/bx-edit.svg" alt="" onClick={editing} />
                <img src="/img/bx-trash.svg" alt="" onClick={trash} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}


