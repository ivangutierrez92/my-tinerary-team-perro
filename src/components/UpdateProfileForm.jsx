import React from "react";

export default function UpdateProfileForm({ onSubmit, formRef, user }) {
  console.log(user);

  return (
    <form className="Form" onSubmit={onSubmit} ref={formRef}>
      <div className="Form-field">
        <label htmlFor="name">Name:</label>
        <input
          defaultValue={user.name}
          type="text"
          name="name"
          id="name"
          className="Form-input"
        />
      </div>
      <div className="Form-field">
        <label htmlFor="lastName">Last name:</label>
        <input
          defaultValue={user.lastName}
          type="text"
          name="lastName"
          id="lastName"
          className="Form-input"
        />
      </div>
      <div className="Form-field">
        <label htmlFor="age">Age:</label>
        <input
          defaultValue={user.age}
          type="text"
          name="age"
          id="age"
          className="Form-input"
        />
      </div>

      <div className="Form-field">
        <label htmlFor="photo">Photo URL:</label>
        <input
          defaultValue={user.photo}
          type="text"
          name="photo"
          id="photo"
          className="Form-input"
        />
      </div>

      <input type="submit" value="Update profile" className="Form-button" />
    </form>
  );
}
