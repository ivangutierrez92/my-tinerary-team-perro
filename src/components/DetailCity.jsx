import React from "react";
import '../styles/components/DetailCity.css'

export default function DetailCity({city}) {
  return (
    <div className="DetailCity">
      <div className="DetailCity-image">
        <img src={city?.photo} alt={city?.name} />
      </div>
      <div className="DetailCity-content">
        <h1>{city?.name}</h1>
        <p>{`${city?.name} is a beautiful place in ${city?.continent} `}</p>
        <p>{`with a population of ${city?.population?.toLocaleString()} people.`}</p>
        <p>{`Here you can see the opinion of our users of what to do here`}</p>
      </div>
    </div>
  );
}
