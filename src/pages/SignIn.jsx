import GoogleButton from "../components/GoogleButton";
import SignInForm from "../components/SignInForm";
import "../styles/pages/sign-in.css";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import signInActions from "../redux/actions/signInActions";
import { useNavigate } from "react-router";

export default function SignIn() {
  const nav = useNavigate();

  let { logged } = useSelector((store) => store.signIn);
  let { sendData } = signInActions;

  let formRef = useRef(null);
  const dispatch = useDispatch();

  const send = async (event) => {
    let object = {};
    let properties = ["email", "password"];
    event.preventDefault();
    properties.forEach(
      (prop) => (object[prop] = formRef.current.elements[prop].value)
    );

    try {
      let res = await dispatch(sendData(object));
      if (res.payload.success) {
        nav(`/`);
      }
    } catch (error) {}
  };
  // localStorage.setItem("Sign User", JSON.stringify(object));

  return (
    <div>
      <div className="container">
        <h1 className="title">Sign In</h1>
        <SignInForm formRef={formRef} onSubmit={send} />
        <GoogleButton content={"Sign in with Google"} />
        <Link to="/signup" className="sign-link">
          Create an account
        </Link>
      </div>
    </div>
  );
}
