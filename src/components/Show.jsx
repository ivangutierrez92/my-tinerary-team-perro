import React, { useState } from "react";
import "../styles/components/show.css";
import "../styles/components/Activity.css";
export default function Show({ shows }) {
  let [buttonComent, SetButtonComent] = useState(false);

  const buttonClick = () => SetButtonComent(!buttonComent);

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
        {buttonComent ? <hr></hr> : ""}
      </div>
    </article>
  );
}
