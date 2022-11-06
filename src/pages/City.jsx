import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Layout from "../layouts/Layout";
import cities from "../data/cities";
import activities from "../data/activities";
import "../styles/pages/City.css";
import Itinerary from "../components/Itinerary";

export default function City() {
  let { city: cityId } = useParams();
  let [city, setCity] = useState({});
  let [itineraries, setItineraries] = useState([]);

  useEffect(() => {
    let currentCity = cities.find(city => city.id === cityId);
    setCity(currentCity);

    let itinerariesArray = activities.filter(itinerary => itinerary.cityId === cityId);
    setItineraries(itinerariesArray);
  }, [cityId]);
  return (
    <Layout>
      <div className="City">
        <div className="City-header">
          <div className="City-image">
            <img src={city?.photo} alt={city?.name} />
          </div>
          <div className="City-content">
            <h1>{city?.name}</h1>
            <p>{`${city?.name} is a beautiful place in ${city?.continent} `}</p>
            <p>{`with a population of ${city?.population?.toLocaleString()} people.`}</p>
            <p>{`Here you can see the opinion of our users of what to do here`}</p>
          </div>
        </div>
        {itineraries.length ? (
          <>
            <h2 className="City-itinerariesTitle">See what others are saying about the itineraries of the city</h2>
            {itineraries.map(itinerary => (
              <Itinerary itinerary={itinerary} key={itinerary.id}/>
            ))}
          </>
        ) : (
          <h2 className="City-itinerariesTitle">Couldn't found Itineraries for this city</h2>
        )}
      </div>
    </Layout>
  );
}
