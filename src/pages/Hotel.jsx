import React from 'react'
import HotelCard from '../components/HotelCard'
import SelectSearch from '../components/SelectSearch'
import data from "../data/datosHoteles";
import Layout from '../layouts/Layout'
import "../styles/pages/hotels.css"
export default function Hotel() {
  // for(let hotel of data){
  //   console.log(hotel)

  // }
 
  
  return (
    <Layout>
        <SelectSearch />
      <div className='card-contain' >
        {
          data.map(hotel=> <HotelCard key={hotel.id}  hotel={hotel}/>)
        }        
      </div>
    </Layout>
  );
}
