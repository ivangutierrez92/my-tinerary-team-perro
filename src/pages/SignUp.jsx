import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import GoogleButton from "../components/GoogleButton";
import SignUpForm from "../components/SignUpForm";
import Layout from "../layouts/Layout";
import registeredUsers from "../data/registeredUsers";
import "../styles/pages/SignUp.css";

export default function SignUp() {
  let formRef = useRef(null);
  let navigate = useNavigate();

  const sendData = event => {
    event.preventDefault();
    let properties = ["name", "lastName", "email", "password", "age"];
    let newUser = {};

    properties.forEach(property => {
      newUser[property] = formRef.current.elements[property].value;
    })
    if(registeredUsers.some((user) => user.email.toLowerCase() === newUser.email.toLowerCase())) {
      alert("El mail ingresado ya está en uso");
      return;
    }

    localStorage.setItem("newUser", JSON.stringify(newUser));
    formRef.current.reset();
    alert("Thank for registering! you will be redirected soon...");
    navigate("/");
  };

  return (
    <Layout>
      <div className="SignUp">
        <h1 className="SignUp-title">Register to share your adventures!</h1>
        <hr />
        <SignUpForm formRef={formRef} onSubmit={sendData} />
        <GoogleButton content="SIGN UP WITH GOOGLE" />
      </div>
    </Layout>
  );
}
