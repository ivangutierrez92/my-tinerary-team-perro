import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HotelData from "../data/datosHoteles";
import ShowData from "../data/shows";
import "../styles/pages/Hotel.css";
import DetailHotel from "../components/DetailHotel";
import Show from "../components/Show";
import Layout from "../layouts/Layout";
import axios from "axios";


export default function Hotel() {
  let { name } = useParams();
  let [hotel, setHotel] = useState({});
  let [shows, SetShow] = useState([]);

  useEffect(() => {
    // let aux = HotelData.find((hotel) => hotel.id === id);
    // SetHotel(aux);
    // let auxShow = ShowData.filter((show) => show.hotelId === id);
    // SetShow(auxShow);
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/hotels?name=${name}`)
      .then(function (response) {
        // manejar respuesta exitosa
        setHotel(response.data.response);
        console.log(response.data.response)
      })
      .catch(function (error) {
        // manejar error
        console.log(error);
      });



  }, [name]);

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
