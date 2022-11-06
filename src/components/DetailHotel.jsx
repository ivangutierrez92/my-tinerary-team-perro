import React from 'react'
import "../styles/components/detail-hotel.css"
export default function DetailHotel({info}) {
  
  return (
    <article className="detail-card">
      <img
        className="detail-image"
        src={info.photo ? info.photo[0] : ""}
        alt=""
      />
      <div className="info-hotel">
        <h1>Hotel : {info.name}</h1>
        <p className="description-hotel">
          <b>{info.name}</b> building planned and conditioned to provide lodging
          services to people and that allows visitors to move around. We provide
          guests with additional services such as restaurants, swimming pools
          and childcare. For you to spend a unique moment with your family.With
          a <b> capacity </b> of {info.capacity} visitors
        </p>
      </div>
    </article>
  );
}



