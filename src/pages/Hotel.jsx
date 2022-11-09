import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HotelData from "../data/datosHoteles";
import ShowData from "../data/shows";
import "../styles/pages/Hotel.css";
import DetailHotel from "../components/DetailHotel";
import Show from "../components/Show";
import Layout from "../layouts/Layout";

export default function Hotel() {
  let { id } = useParams();
  let [hotel, SetHotel] = useState({});
  let [shows, SetShow] = useState([]);

  useEffect(() => {
    let aux = HotelData.find((hotel) => hotel.id === id);
    SetHotel(aux);
    let auxShow = ShowData.filter((show) => show.hotelId === id);
    SetShow(auxShow);
  }, [id]);

  return (
    <Layout>
      <div className="container-hotel">
        
        <DetailHotel info={hotel} />

        {shows.length > 0 ? (
          shows?.map((show) => <Show key={show.id} shows={show} />)
        ) : (
          <h2 className="no-show">No Show for this Hotel</h2>
        )}
      </div>
    </Layout>
  );
}
