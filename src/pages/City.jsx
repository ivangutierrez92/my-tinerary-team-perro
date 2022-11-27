import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../styles/pages/City.css";
import Itinerary from "../components/Itinerary";
import DetailCity from "../components/DetailCity";
import axios from "axios";

export default function City() {
  let { city: cityId } = useParams();
  let [city, setCity] = useState({});
  let [itineraries, setItineraries] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/cities/${cityId}`)
      .then(res => setCity(res.data.response))
      .catch(error => {
        setLoading(false);
      });

    axios
      .get(`${process.env.REACT_APP_API_URL}/api/itineraries?cityId=${cityId}`)
      .then(res => {
        setItineraries(res.data.response);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [cityId]);
  return (
    <>
      {loading && <h2 className="City-title">Loading...</h2>}
      {!loading && Object.keys(city).length === 0 && <h2 className="City-title">Couldn't find the City</h2>}
      {!loading && Object.keys(city).length > 0 && (
        <div className="City">
          <DetailCity city={city} />
          {itineraries.length ? (
            <>
              <h2 className="City-title">See what others are saying about the itineraries of the city</h2>
              {itineraries.map(itinerary => (
                <Itinerary itinerary={itinerary} key={itinerary._id} />
              ))}
            </>
          ) : (
            <h2 className="City-title">Couldn't found Itineraries for this city</h2>
          )}
        </div>
      )}
    </>
  );
}
