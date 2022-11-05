
import GoogleButton from "../components/GoogleButton";
import SignInForm from "../components/SignInForm";
import Layout from "../layouts/Layout";
import "../styles/pages/sign-in.css";
import React,{useRef} from "react";

export default function SignIn() {
  
  let formRef= useRef(null);
  
  const send = event=>{
    let object = {};
    event.preventDefault();
    
    for (let current of formRef.current){

          object[current.name] = current.value;
        
    }
    localStorage.setItem("Sign User", JSON.stringify(object));
  }
  return (
    <Layout>
      <div className="container">
        <h1 className="title">Sign In</h1>
        <SignInForm  formRef={formRef}  onSubmit={send}/>
        <GoogleButton content={"Sign in with Google"}/>
      </div>
    </Layout>
  );
}

