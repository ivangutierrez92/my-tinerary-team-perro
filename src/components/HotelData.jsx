import React from "react";

import "../styles/components/hotel-data.css";
export default function HotelData({ capacity, city, name }) {
  return (
    <div className="CollectionCard-body">
      <h5 className="CollectionCard-title">{name}</h5>
      <div className="CollectionCard-content">
        <p>
          <span className="CollectionCard-label">Capacity</span>:{capacity}
        </p>
        <p>
          <span className="CollectionCard-label">City</span>:{city}
        </p>
      </div>
    </div>
  );
}
