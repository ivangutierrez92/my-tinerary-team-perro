import React from 'react'
import "../styles/components/form-new-hotel.css"
import cities from "../data/cities";


export default function FormNewHotel({onSubmit}) {
  
  return (
    <form className="form-new-hotel" onSubmit={onSubmit}>
      <div className="new-hotel-form-col">
        <label htmlFor="hotel-name">Hotel Name: </label>
        <input type="text" name="name" id="hotel-name" />
      </div>
      <div className="new-hotel-form-col">
        <label htmlFor="photo-url">Photo (URL):</label>
        <input type="text" name="photo" id="photo-url" />
      </div>
      <div className="new-hotel-form-col">
        <label htmlFor="capacity">Capacity:</label>
        <input type="text" name="capacity" id="capacity" />
      </div>
      <div className="new-hotel-form-col">
        <label htmlFor="city-id">City:</label>
        <select defaultValue="" name="cityId" id="city-id">
          <option value="">Choose city</option>
          <option value="636d2492b99d56d4e6fdc415">Lanai</option>
          <option value="636d2492b99d56d4e6fdc416">Paris</option>
          <option value="636d2492b99d56d4e6fdc417">Rustenburg</option>
          <option value="636d2492b99d56d4e6fdc418">Los Angeles</option>
          <option value="636d2492b99d56d4e6fdc413">Buenos Aires</option>
          <option value="636d2492b99d56d4e6fdc41a">Tremezzo</option>
          <option value="636d2492b99d56d4e6fdc414">Melbourne</option>
          <option value="636d2492b99d56d4e6fdc41c"> Singapore</option>
          <option value="636d2492b99d56d4e6fdc41d">Caibarién</option>
        </select>
      </div>
      <input
        id="form-button"
        type="submit"
        value="Continue"
        className="new-hotel-form-button"
      />
    </form>
  );
}



