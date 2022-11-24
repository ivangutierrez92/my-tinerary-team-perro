import React from "react";
import "../styles/components/SignUpForm.css";

export default function SingUpForm({ formRef, onSubmit }) {
  return (
    <form className="SignUp-form" onSubmit={onSubmit} ref={formRef}>
      <div className="SignUp-form-col">
        <div className="SignUp-form-field">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="SignUp-form-field">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" name="lastName" id="lastName" />
        </div>
      </div>
      <div className="SignUp-form-col">
        <div className="SignUp-form-field">
          <label htmlFor="email">Email Address:</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="SignUp-form-field">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" />
        </div>
      </div>
      <div className="SignUp-form-col">
        <div className="SignUp-form-field">
          <label htmlFor="photo">Photo URL:</label>
          <input type="text" name="photo" id="photo" />
        </div>
        <div className="SignUp-form-field">
          <label htmlFor="age">Age:</label>
          <input type="number" min={0} name="age" id="age" />
        </div>
      </div>

      <input type="submit" value="Create account" className="SignUp-button" />
    </form>
  );
}
