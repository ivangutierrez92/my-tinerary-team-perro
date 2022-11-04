import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import SignUpForm from "../components/SignUpForm";
import Layout from "../layouts/Layout";
import "../styles/pages/SignUp.css";

export default function SignUp() {
  let formRef = useRef(null);
  let navigate = useNavigate();
  const sendData = event => {
    event.preventDefault();

    let formObject = {};
    for (let input of formRef.current) {
      if (input.type !== "submit") {
        if (input.value) {
          formObject[input.name] = input.value;
        } else {
          let label = input.labels[0].innerText.slice(0, -1);
          alert(`You have to complete the field ${label}`);
          return;
        }
      }
    }
    let storage = localStorage.getItem("registeredUsers");
    storage = storage ? JSON.parse(storage) : [];
    storage.push(formObject);
    localStorage.setItem("registeredUsers", JSON.stringify(storage));
    formRef.current.reset();

    alert("Thank for registering! you will be redirected soon ");
    navigate("/");
  };
  return (
    <Layout>
      <div className="SignUp">
        <h1 className="SignUp-title">Register to share your adventures!</h1>
        <hr />
        <SignUpForm formRef={formRef} onSubmit={sendData} />
        <button className="Google-button">
          <img src="./img/g-logo.png" alt="google icon"></img>SIGN IN WITH GOOGLE
        </button>
      </div>
    </Layout>
  );
}