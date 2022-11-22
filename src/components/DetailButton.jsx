import React from 'react'
import { Link as LinkRouter } from "react-router-dom";
import "../styles/components/detail-button.css"

export default function DetailButton({hotel}) {


  return (
    <LinkRouter to={`/hotel/${hotel._id}`}>
      <button className="CollectionCard-button">Details</button>
    </LinkRouter>
  );
}
