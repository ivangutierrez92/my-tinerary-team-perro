import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import "../styles/components/CityCard.css";

export default function CityCard({ city }) {
  return (
    <div className="CityCard">
      <div className="CityCard-photo">
      <LinkRouter to={`city/${city.id}`}>
        <img src={city.photo} alt={city.name}></img>
      </LinkRouter>
      </div>
      <div className="CityCard-body">
        <h3 className="CityCard-title">{city.name}</h3>
        <div className="CityCard-content">
          <p>
            <span className="CityCard-label">Continent:</span> {city.continent}
          </p>
          <p>
            <span className="CityCard-label">Population:</span> {city.population.toLocaleString()}
          </p>
          </div>
          <LinkRouter to={`city/${city.id}`}>
            <button className="CityCard-button">Learn More</button>
          </LinkRouter>
      </div>
    </div>
  );
}
