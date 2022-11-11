import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import "../styles/components/CollectionCard.css";

export default function CollectionCard({ city }) {
  return (
    <div className="CollectionCard">
      <div className="CollectionCard-photo">
      <LinkRouter to={`/city/${city._id}`}>
        <img src={city.photo} alt={city.name}></img>
      </LinkRouter>
      </div>
      <div className="CollectionCard-body">
        <h3 className="CollectionCard-title">{city.name}</h3>
        <div className="CollectionCard-content">
          <p>
            <span className="CollectionCard-label">Continent:</span> {city.continent}
          </p>
          <p>
            <span className="CollectionCard-label">Population:</span> {city.population.toLocaleString()}
          </p>
          </div>
          <LinkRouter to={`/city/${city._id}`}>
            <button className="CollectionCard-button">See Itineraries!</button>
          </LinkRouter>
      </div>
    </div>
  );
}
