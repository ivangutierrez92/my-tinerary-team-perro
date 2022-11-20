import React, { useEffect, useState } from "react";
import DetailButton from "./DetailButton";
import HotelData from "./HotelData";
// import cities from "../data/cities";
import "../styles/components/CollectionCard.css";

export default function HotelCard({ hotel }) {
  let [city, setCity] = useState("");

  useEffect(() => {
    
    setCity(hotel.cityId);
  }, [hotel]);
  // console.log(city.name)
  return (
    <>
      <article className="CollectionCard">
        <div className="CollectionCard-photo">
          <img src={hotel.photo[0]} alt={hotel.name} />
        </div>
        <HotelData capacity={hotel.capacity} city={city.name} name={hotel.name} />
        <DetailButton hotel={hotel} />
      </article>
    </>
  );
}

//hotel/idHotel
