import React from 'react'
import "../styles/components/form-new-hotel.css"
import cities from "../data/cities";


export default function FormNewHotel({formRef, onSubmit}) {
  
  return (
    <form className="form-new-hotel" onSubmit={onSubmit} ref={formRef} >
      <div className="new-hotel-form-col">
        <label htmlFor="hotel-id">Hotel Id:</label>

        <input type="text" name="hotelId" id="hotel-id" />
      </div>
      <div className="new-hotel-form-col">
        <label htmlFor="hotel-name">Hotel Name: </label>
        <input type="text" name="name" id="hotel-name" />
      </div>
      <div className="new-hotel-form-col">
        <label htmlFor="photo-url">Photo (URL):</label>
        <input type="text" name="photo" id="photo-url" />
      </div>
      <div className="new-hotel-form-col">
        <label htmlFor='capacity' >Capacity:</label>
        <input type="text" name="capacity" id="capacity" />
      </div>
      <div className="new-hotel-form-col">
        <label htmlFor='city-id' >City:</label>
        <select defaultValue="" name="cityId" id="city-id" >
        <option value="">Choose city</option>
        {
          cities.map((city)=><option value={city.id}>{city.name}</option>)
        }
        </select>
      </div>
      {/* <div className="new-hotel-form-col">
        <label htmlFor='user-id'>User Id:</label>
        <input type="text" name="userId" id="user-id" />
      </div> */}
      <input id='form-button' type="submit" value="Continue" className='new-hotel-form-button'  />
    </form>
  );
}



