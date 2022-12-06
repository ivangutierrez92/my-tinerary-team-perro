import React from 'react'
import "../styles/components/Comments.css";

export default function NewComment({formRef,onSubmit,user}) {
  return (
    <form ref={formRef} onSubmit={onSubmit}   className="new-comments">
      <img
        className="photo-profile"
        src={user.photo}
        alt={user.name}
      />
      <div className="container-comment">
        <input name='comment' type="text" placeholder="Add your comment..." />
        <button name='clean' className="clean-button" type='reset'>
          <img src="/img/clean-text.svg" alt="clean-icon" />
        </button>
      </div>

      <button  name='send' className="button-comment" type='submit'>
        <img src="/img/send-fill.svg" alt="send-icon" />
        Send
      </button>
    </form>
  );
}
