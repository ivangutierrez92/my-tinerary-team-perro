import React from "react";
import "../styles/components/sign-in-form.css";

export default function SingInForm({ formRef, onSubmit }) {
    
  return (
    <form className="Form" onSubmit={onSubmit} ref={formRef}>
      
        <div className="Form-field">
          <label htmlFor="email">Email Address:</label>
          <input type="email" name="email" id="email" className="Form-input" />
        </div>
        <div className="Form-field">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" className="Form-input" />
        </div>
      
      
      <input type="submit" value="Continue" className="Form-button" />
    </form>


  );
  
}





