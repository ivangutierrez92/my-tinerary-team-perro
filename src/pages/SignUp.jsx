import React, { useRef } from "react";
import GoogleButton from "../components/GoogleButton";
import SignUpForm from "../components/SignUpForm";
import "../styles/pages/SignUp.css";
import { Link as LinkRouter } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";

export default function SignUp() {
  let formRef = useRef(null);

  const sendData = async event => {
    event.preventDefault();
    let properties = ["name", "lastName", "email", "password", "photo", "age"];
    let newUser = {};

    properties.forEach(property => {
      newUser[property] = formRef.current.elements[property].value;
    });
    newUser.role = "user";
    let confirmation;
    try {
      confirmation = await swal(
        "Is the information right?",
        `Name: ${newUser.name}
        Last Name: ${newUser.lastName}
        Email: ${newUser.email}
        Age: ${newUser.age}`,
        { buttons: ["Cancel", "Yes"] }
      );
    } catch (error) {
    }
    if (confirmation) {
      try {
        let response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/sign-up`, newUser);
        if (response.data.success) {
          swal(
            "User created",
            "The user was created successfully, you will recieve a confirmation mail, please confirm it to continue",
            "success"
          );
          formRef.current.reset();
        } else {
          swal("Error", response.data.message.join("\n"), "error");
        }
      } catch (error) {
        if (error.response) {
          swal("Error", error.response.data.message, "error");
        } else {
          swal("Error", error.message, "error");
        }
      }
    }
  };

  return (
    <div className="SignUp">
      <h1 className="SignUp-title">Register to share your adventures!</h1>
      <SignUpForm formRef={formRef} onSubmit={sendData} />
      <GoogleButton content="SIGN UP WITH GOOGLE" />
      <LinkRouter to="/signin" className="sign-link">
        Already have an account?
      </LinkRouter>
    </div>
  );
}
