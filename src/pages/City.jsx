import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Layout from "../layouts/Layout";
import cities from "../data/cities";
import '../styles/pages/City.css'

export default function City() {
  let {city: cityId} = useParams();
  let [city, setCity] = useState({})
  useEffect(() => {
    let currentCity = cities.find((city) => city.id === cityId);
    setCity(currentCity);
    console.log(cityId)
    
  }, [cityId]);
  return (
    <Layout>
          <div className="City">
            <div className="City-header">
              <div className="City-image">
                <img src={city?.photo} alt={city?.name} />
              </div>
              <div className="City-title">
                <h1>{city?.name}</h1>
              </div>
            </div>
          </div>
    </Layout>
  );
}
