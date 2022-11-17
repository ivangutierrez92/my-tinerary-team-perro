import GoogleButton from "../components/GoogleButton";
import SignInForm from "../components/SignInForm";
import "../styles/pages/sign-in.css";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
  let formRef = useRef(null);

  const send = event => {
    let object = {};
    event.preventDefault();
    console.log(formRef.current[0].value);
    for (let current of formRef.current) {
      object[current.name] = current.value;
    }
    localStorage.setItem("Sign User", JSON.stringify(object));
  };
  return (
    <div>
      <div className="container">
        <h1 className="title">Sign In</h1>
        <SignInForm formRef={formRef} onSubmit={send} />
        <GoogleButton content={"Sign in with Google"} />
        <Link to="/signup" className="sign-link">Create an account</Link>
      </div>
    </div>
  );
}
