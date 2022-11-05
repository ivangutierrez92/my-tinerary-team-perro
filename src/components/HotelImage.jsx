import React from 'react'
import CardImage from "../data/datosHoteles"
import "../styles/components/HotelImage.css"

export default function HotelImage() {
  console.log(CardImage[0].name)
  return <img className='hotel-image'  src={CardImage[0].photo[0]} alt={CardImage[0].name} />;
}
