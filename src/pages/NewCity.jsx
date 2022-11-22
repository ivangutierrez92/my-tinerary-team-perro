import React from "react";
import { useRef } from "react";
import NewCityForm from "../components/NewCityForm";
import axios from "axios";
import "../styles/pages/NewCity.css";
import swal from "sweetalert";
import { useNavigate } from "react-router";

export default function NewCity() {
  let formRef = useRef(null);
  let navigate = useNavigate();
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
        if (response.data.success) {
          swal("City created", "The city was created succesfully", "success");
          navigate(`/city/${response.data.id}`);
        } else {
          swal("Error", response.data.message.join("\n"), "error");
        }
      })
      .catch(error => {
        swal("Error", error.response.data.message, "error");
      });

    formRef.current.reset();
  };

  return (
    <div className="NewCity">
      <h1 className="NewCity-title">New City</h1>
      <NewCityForm formRef={formRef} onSubmit={onSubmit} />
    </div>
  );
}
