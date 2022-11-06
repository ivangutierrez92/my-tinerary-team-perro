import React from 'react'
import { Link as LinkRouter } from "react-router-dom";
import "../styles/components/detail-button.css"

export default function HotelDetails({hotel}) {
  return (
    <LinkRouter to={`/hotel/id=${hotel}`}>
      <button className="button-detail">Details</button>
    </LinkRouter>
  );
}
