import React from "react";
import "../styles/components/sign-in-form.css";

export default function SingInForm({ formRef, onSubmit }) {
    
  return (
    <form className="container-form" onSubmit={onSubmit} ref={formRef}>
      <div className="SignIn-form-col">
        <div className="form-field">
          <label htmlFor="email">Email Address:</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="form-field">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" />
        </div>
      </div>
      
      <input type="submit" value="Continue" className="button" />
    </form>


  );
  
}





