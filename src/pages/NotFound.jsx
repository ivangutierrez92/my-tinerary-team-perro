import React from 'react'
import "../styles/pages/not-found.css";
import { Link as LinkRouter } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import Layout from "../layouts/Layout";





export default function NotFound() {
  return (
    <Layout>
      <div
        className="not-found"
        style={{ backgroundImage: "url('/img/notFound.jpg')" }}
      >
        <div className="text">
          <img className="sad" src="/img/sad.svg" alt="not-found" />
          <h2>Not found error</h2>
          <p>The resource requested could not be found on this server!</p>
          <LinkRouter to="/">
            <CallToAction content="Return to Home" icon="/img/home.svg" />
          </LinkRouter>
        </div>
      </div>
    </Layout>
  );
}
