import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
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
    navigate('/')

  };
  return (
    <Layout>
      <div className="SignUp">
        <h1 className="SignUp-title">Register to share your adventures!</h1>
        <hr />
        <form className="SignUp-form" onSubmit={sendData} ref={formRef}>
          <div className="SignUp-col">
            <div className="SignUp-form-field">
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="SignUp-form-field">
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" name="lastName" id="lastName" />
            </div>
          </div>
          <div className="SignUp-col">
            <div className="SignUp-form-field">
              <label htmlFor="email">Email Address:</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="SignUp-form-field">
              <label htmlFor="password">Password:</label>
              <input type="password" name="password" id="password" />
            </div>
          </div>
          <div className="SignUp-col">
            <div className="SignUp-form-field">
              <label htmlFor="age">Age:</label>
              <input type="number" name="age" id="age" />
            </div>
            <div className="SignUp-form-field"></div>
          </div>

          <input type="submit" value="Create account" className="SignUp-button" />
          
        </form>
        <button className="Google-button"><img src="./img/g-logo.png" alt="google icon"></img>SIGN IN WITH GOOGLE</button>
      </div>
    </Layout>
  );
}
