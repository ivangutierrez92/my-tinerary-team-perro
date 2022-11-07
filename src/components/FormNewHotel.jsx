import React from 'react'
import "../styles/components/form-new-hotel.css"
export default function FormNewHotel({formRef, onSubmit}) {
  
  return (
    <form className="form-new-hotel" onSubmit={onSubmit} ref={formRef} >
      <div className="new-hotel-form-col">
        <label htmlFor="hotel-id">Hotel Id:</label>

        <input type="text" name="hotel-id" id="hotel-id" />
      </div>
      <div className="new-hotel-form-col">
        <label htmlFor="hotel-name">Hotel Name: </label>
        <input type="text" name="name" id="hotel-name" />
      </div>
      <div className="new-hotel-form-col">
        <label htmlFor="photo-url">Photo (URL):</label>
        <input type="text" name="photo-url" id="photo-url" />
      </div>
      <div className="new-hotel-form-col">
        <label htmlFor='capacity' >Capacity:</label>
        <input type="text" name="capacity" id="capacity" />
      </div>
      <div className="new-hotel-form-col">
        <label htmlFor='city-id' >City Id:</label>
        <input type="text" name="city-id" id="city-id" />
      </div>
      <div className="new-hotel-form-col">
        <label htmlFor='user-id'>User Id:</label>
        <input type="text" name="user-id" id="user-id" />
      </div>
      <input id='form-button' type="submit" value="Continue" className='new-hotel-form-button'  />
    </form>
  );
}



