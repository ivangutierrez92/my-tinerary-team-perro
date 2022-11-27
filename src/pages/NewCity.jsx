import React from "react";
import { useRef } from "react";
import NewCityForm from "../components/NewCityForm";
import axios from "axios";
import "../styles/pages/NewCity.css";
import swal from "sweetalert";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

export default function NewCity() {
  let {token} = useSelector(store => store.signIn);
  let formRef = useRef(null);
  let navigate = useNavigate();
  const onSubmit = event => {
    event.preventDefault();

    let properties = ["name", "continent", "population", "photo"];
    let newCity = {};
    let headers = {headers: {'Authorization': `Bearer ${token}`}}
    properties.forEach(property => {
      newCity[property] = formRef.current.elements[property].value;
    });

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/cities/`, newCity, headers)
      .then(response => {
        if (response.data.success) {
          swal("City created", "The city was created succesfully", "success");
          formRef.current.reset();
          navigate(`/city/${response.data.id}`);
        } else {
          swal("Error", response.data.message.join("\n"), "error");
        }
      })
      .catch(error => {
        if(error.response) {
          swal("Error", error.response.data.message || error.response.data, "error");
        } else {
          swal("Error", error.message, "error");
        }
      });
  };

  return (
    <div className="NewCity">
      <h1 className="NewCity-title">New City</h1>
      <NewCityForm formRef={formRef} onSubmit={onSubmit} />
    </div>
  );
}
