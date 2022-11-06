import React from "react";
import { useRef } from "react";
import NewCityForm from "../components/NewCityForm";
import Layout from "../layouts/Layout";
import cities from "../data/cities";
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

    if (cities.some(city => city.name.toLowerCase() === newCity.name.toLowerCase())) {
      alert("La ciudad que intenta ingresar ya está en la base de datos");
      return;
    }

    localStorage.setItem("newCity", JSON.stringify(newCity));
    alert("La ciudad se ha guardado con éxito");
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
