import React, { useEffect,useState } from "react";
import DetailButton from "./DetailButton";
import HotelData from "./HotelData";
import "../styles/components/hotel-card.css";
import cities from "../data/cities";


export default function HotelCard({hotel}) {
  let [city,setCity]= useState("");
  
  
  useEffect(()=>{
      let aux= cities.find(  city => city.id === hotel.cityId );
      setCity(aux.name)
  }
  ,[hotel]);
  
  return (
    <>
      <article className="hotel-card">
        <img className="hotel-image" src={hotel.photo[0]} alt={hotel.name} />
        <HotelData capacity={hotel.capacity} city={city} name={hotel.name}/>
        <DetailButton  hotel={hotel.id}/>
      </article>
    </>
  );
}

//hotel/idHotel