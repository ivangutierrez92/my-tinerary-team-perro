import React from 'react'

import "../styles/components/hotel-data.css";
export default function HotelData({ capacity, city, name }) {
  return (
    <>
      <h5 className="hotel-title">{name}</h5>
      <div className="detail">
        <p>Capacity:{capacity}</p>
        <p>City:{city}</p>
      </div>
    </>
  );
}
