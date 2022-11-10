import React from "react";
import { useRef } from "react";
import NewCityForm from "../components/NewCityForm";
import Layout from "../layouts/Layout";
import axios from "axios";
import "../styles/pages/NewCity.css";

export default function NewCity() {
  let formRef = useRef(null);

  const onSubmit = event => {
    event.preventDefault();

    let properties = ["name", "continent", "population", "photo"];
    let newCity = {};
    properties.forEach(property => {
      newCity[property] = formRef.current.elements[property].value;
    });
    //Hardcoded userId
    newCity["userId"] = "636d1ed3692e58acbf29845c";
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/cities/`, newCity)
      .then(response => {
        alert(response.data.message);
      })
      .catch(error => {
        alert(`${error.response.data.message}, ${error.message}`);
      });

    formRef.current.reset();
  };

  return (
    <Layout>
      <div className="NewCity">
        <h1 className="NewCity-title">New City</h1>
        <hr />
        <NewCityForm formRef={formRef} onSubmit={onSubmit} />
      </div>
    </Layout>
  );
}
