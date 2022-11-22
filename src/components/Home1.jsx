import React from "react";
import CallToAction from "./CallToAction";
import "../styles/components/Home1.css";
import { Link as LinkRouter } from "react-router-dom";

export default function Home1() {
  return (
    <div className="Home1" style={{ backgroundImage: "url('./img/banner.jpg')" }}>
      <div className="Home1-content">
        <div className="Home1-left">
          <h1>If not now, then when? Travel with us to your next adventure</h1>
          <div className="Home1-logo">
            <img src="./img/logo-my-tinerary.png" alt="logo my tinerary" />
          </div>
        </div>
        <div className="Home1-right">
          <LinkRouter to="cities">
            <CallToAction content="Explore Cities" icon="./img/bxs-compass.svg" />
          </LinkRouter>
          <LinkRouter to="hotels">
            <CallToAction content="Explore Hotels" icon="./img/bxs-compass.svg" />
          </LinkRouter>
        </div>
      </div>
    </div>
  );
}
