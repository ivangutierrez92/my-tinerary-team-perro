import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useNavigate, useParams } from "react-router";
import swal from "sweetalert";
import "../styles/pages/EditCollection.css";
import { useSelector } from "react-redux";

export default function MyEditHotels() {
  let {token}= useSelector(store=>store.signIn)
  let form = useRef(null)
  let {hotel:hotelid} = useParams();
  let [hotelEdit,setHotelEdit]=useState(null)
  let [city, setCity] = useState([]);
   let nav = useNavigate();
  console.log(hotelid)


useEffect(()=>{
axios
.get(`${process.env.REACT_APP_API_URL}/api/hotels/${hotelid}`)
.then(res=>{
  setHotelEdit(res.data.response)
})
},[])

 useEffect(() => {
   axios
     .get(`${process.env.REACT_APP_API_URL}/api/cities`)
     .then((response) => {
       setCity(response.data.response);
     })
     .catch((error) => {
       alert(`${error.response.data.message}, ${error.message}`);
     });
 }, []);
 console.log(city);


const onSubmit = (event) => {
  let headers = { headers: { Authorization: `Bearer ${token}` } };
  let hotelObject = {};

  event.preventDefault();
  let inputs = ["name","capacity", "cityId"];

  inputs.forEach((input) => {
    
      hotelObject[input] = form.current.elements[input].value;
    
  });
  hotelObject.photo=[...form.current.elements["photo"]].map((photo)=>photo.value);
  // hotelObject["userId"] = "636d1ed3692e58acbf29845d";
  axios
    .patch(`${process.env.REACT_APP_API_URL}/api/hotels/${hotelid}`,hotelObject,headers)
    .then((response) => {
      swal("Hotel upgraded", "the Hotel was successfully upgraded", "success");
      nav(`/hotel/${response.data.id}`);
    })
    .catch((error) => {
      swal("Error creating new Hotel",error.response.data.message,"error");
    });
};




console.log(hotelEdit)

return (
  <form ref={form} className="Form" onSubmit={onSubmit}>
    {hotelEdit && (
      <>
        <div className="Form-field">
          <label htmlFor="hotel-name">Hotel Name: </label>
          <input
            defaultValue={hotelEdit.name}
            type="text"
            name="name"
            id="hotel-name"
            className="Form-input"
          />
        </div>
        <div className="Form-field">
          <label htmlFor="photo-url">Photo (URL):</label>
          <input
            defaultValue={hotelEdit.photo[0] ? hotelEdit.photo[0] : ""}
            type="text"
            name="photo"
            id="photo-url"
            className="Form-input"
          />
        </div>
        <div className="Form-field">
          <label htmlFor="photo-url2">Photo (URL):</label>
          <input
            defaultValue={hotelEdit.photo[1] ? hotelEdit.photo[1] : ""}
            type="text"
            name="photo"
            id="photo-url2"
            className="Form-input"
          />
        </div>

        <div className="Form-field">
          <label htmlFor="photo-url3">Photo (URL):</label>
          <input
            defaultValue={hotelEdit.photo[2] ? hotelEdit.photo[2] : ""}
            type="text"
            name="photo"
            id="photo-url3"
            className="Form-input"
          />
        </div>

        <div className="Form-field">
          <label htmlFor="capacity">Capacity:</label>
          <input
            defaultValue={hotelEdit.capacity}
            type="text"
            name="capacity"
            id="capacity"
            className="Form-input"
          />
        </div>
        <div className="Form-field">
          <label htmlFor="city-id">City:</label>
          {
            city.length&&( 
          <select
            defaultValue={hotelEdit.cityId}
            name="cityId"
            id="city-id"
            className="Form-input"
          >
            <option  value="">--Choose city--</option>
            {city?.map((names) => (
              <option key={names._id} value={names._id}>{names.name}</option>
            ))}
          </select>
          )
          }
        </div>
        <input
          id="form-button"
          type="submit"
          value="Continue"
          className="Form-button"
        />
      </>
    )}
  </form>
);







}