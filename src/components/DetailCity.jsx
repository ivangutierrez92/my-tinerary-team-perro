import React from "react";
import "../styles/components/Detail.css";

export default function DetailCity({ city }) {
  return (
    <>
      <div className="Detail">
        <div className="Detail-image">
          <img src={city.photo} alt={city.name} />
          {city.userId && (<div className="Detail-user">
            <img src={city.userId.photo} alt={`${city.userId.name}`} />
            <p>By {city.userId.name}</p>
          </div>)} 
        </div>
        <div className="Detail-content">
          <h1>{city.name}</h1>
          <p>{`${city?.name} is a beautiful place in ${city?.continent} `}</p>
          <p>{`with a population of ${city.population.toLocaleString()} people.`}</p>
          <p>{`Here you can see the opinion of our users of what to do here`}</p>
        </div>
      </div>
    </>
  );
}
