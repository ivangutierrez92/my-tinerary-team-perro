import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import swal from "sweetalert";
import "../styles/pages/EditCollection.css";

export default function MyEditHotels(params) {
  let form = useRef(null);
  let { show: showId } = useParams();
  let [showEdit,setShowEdit] = useState(null);
  let [hotel, setHotel] = useState([]);
  let nav = useNavigate();
  let { token }= useSelector(store => store.signIn);

  useEffect(() => {
    const getShow=()=>axios.get(`${process.env.REACT_APP_API_URL}/api/shows/${showId}`)
    
    const getHotels=()=> axios.get(`${process.env.REACT_APP_API_URL}/api/hotels`)

      Promise.all([getShow(), getHotels()])
      .then(([showRes,hotelsRes]) => {
        setShowEdit(showRes.data.response);
        setHotel(hotelsRes.data.response);
      })
    
      .catch((error) => {
        alert(`${error.response.data.message}, ${error.message}`);
      });
  }, []);

  const onSubmit = (event) => {
    let headers = { headers: { Authorization: `Bearer ${token}`}}
    let showObject = {};

    event.preventDefault();
    let inputs = ["name", "photo", "price","description","hotelId"];

    inputs.forEach((input) => {
      showObject[input] = form.current.elements[input].value;
    });
    axios
      .patch(
        `${process.env.REACT_APP_API_URL}/api/shows/${showId}`,
        showObject,headers
      )
      .then((response) => {
        swal(
          "Show upgraded",
          "the Show was successfully upgraded",
          "success"
        );
        nav(`/myshows`);
      })
      .catch((error) => {
        swal(
          "Error creating new Show",
          error.response.data.message,
          "error"
        );
      });
  };



  return (
    <form ref={form} className="Form" onSubmit={onSubmit}>
      {showEdit && (
        <>
          <div className="Form-field">
            <label htmlFor="show-name">Show Name: </label>
            <input
              defaultValue={showEdit.name}
              type="text"
              name="name"
              id="show-name"
              className="Form-input"
            />
          </div>
          <div className="Form-field">
            <label htmlFor="photo-url">Photo (URL):</label>
            <input
              defaultValue={showEdit.photo ? showEdit.photo : ""}
              type="text"
              name="photo"
              id="photo-url"
              className="Form-input"
            />
          </div>
          <div className="Form-field">
            <label htmlFor="price">Price:</label>
            <input
              defaultValue={showEdit.price}
              type="text"
              name="price"
              id="price"
              className="Form-input"
            />
          </div>

          <div className="Form-field">
            <label htmlFor="description">Description:</label>
            <textarea
              defaultValue={showEdit.description}
              type="text"
              name="description"
              id="description"
              className="Form-textarea"
            />
          </div>
          <div className="Form-field">
            <label htmlFor="hotelId">Hotel:</label>
            {
              hotel.length && (
            <select
              defaultValue={showEdit.hotelId}
              name="hotelId"
              id="hotelId"
              className="Form-input"
            >
              <option   value="">--Choose Hotel--</option>
              {hotel.map((names) => (
                <option key={names._id}  value={names._id}>{names.name}</option>
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