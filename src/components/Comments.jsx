import React from 'react'

import "../styles/components/Comments.css"
export default function Comments({comment,user,isUser}) {
  let date = comment.createdAt.split("T");

  console.log(user)




  return (
    <div className="comments">
      <img className="photo-profile" src={comment.photo} alt="" />

      <div class="info-comments">
        <div class={isUser ? "text-comment" : "text-comment-other"}>
          <div class="info-comment">
            <h4>{user}</h4>
            <h5>Date: {date[0]}</h5>
          </div>
          <div className='user-options'>
            <p>{comment.comment}</p>
            {isUser ? (
              <img
                src="/img/options.png"
                alt="options"
                className="options-comment"
              ></img>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
