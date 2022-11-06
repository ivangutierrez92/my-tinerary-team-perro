import React,{useEffect,useState} from 'react'
import {useParams} from "react-router-dom";
import HotelData from "../data/datosHoteles"
import ShowData from "../data/shows"
import "../styles/pages/Hotel.css"
import HotelInfo from "../components/HotelInfo"
import Show from "../components/Show"
import Layout from "../layouts/Layout";

export default function Hotel() {
  let {id} = useParams();
  let[hotel,SetHotel]= useState({ });

  useEffect(()=> {
    let aux=HotelData.find(hotel=>hotel.id === id);
    SetHotel(aux)
  },[id])


  return (
    
      <Layout>
        <HotelInfo info={hotel} />

        <div>Hotel:{hotel.name}</div>
      </Layout>
    
  );
}
