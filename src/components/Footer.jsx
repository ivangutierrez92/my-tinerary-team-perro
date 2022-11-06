import React from "react";
import "../styles/components/footer.css";
import { Link as LinkRouter } from "react-router-dom";

export default function Footer(){


  return (
    <>
      <div className="footer">
        <div>
          <h2>Hotels</h2>
          <LinkRouter to="/hotels">
            <img
              src="/img/hotel.svg"
              className="footer-icon"
              alt="hotel-icon"
            />
          </LinkRouter>
        </div>
        <div>
          <h2>Cities</h2>
          <LinkRouter to="/cities">
            <img
              src="/img/cities.svg"
              className="footer-icon"
              alt="hotel-icon"
            />
          </LinkRouter>
        </div>
        <div className="social">
          <p>Social networks</p>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img
              src="/img/facebook.svg"
              className="footer-icon"
              alt="facebook-icon"
            />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img
              src="/img/instagram.svg"
              className="footer-icon"
              alt="instagram-icon"
            />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <img
              src="/img/twitter.svg"
              className="footer-icon"
              alt="twitter-icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/cristian-hermosa-31217760/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/img/linkedin.svg"
              className="footer-icon"
              alt="linkedin-icon"
            />
          </a>
          <a
            href="https://github.com/cristianeze16/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/img/github.svg"
              className="footer-icon"
              alt="github-icon"
            />
          </a>
          <a
            href="https://github.com/ivangutierrez92/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/img/github.svg"
              className="footer-icon"
              alt="github-icon"
            />
          </a>
        </div>
        <p>Copyright © - MYTINERARY All Rights Reserved.</p>
        <p>MINDHUB COHORT 35</p>
      </div>
    </>
  );

}