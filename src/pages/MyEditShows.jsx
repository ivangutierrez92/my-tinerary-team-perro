import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useNavigate, useParams } from "react-router";
import swal from "sweetalert";
import "../styles/pages/EditCollection.css";

export default function MyEditHotels(params) {
  let form = useRef(null);
  let { show: showId } = useParams();
  let [showEdit,setShowEdit] = useState(null);
  let [hotel, setHotel] = useState([]);
  let nav = useNavigate();
  console.log(showEdit);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/shows/${showId}`)
      .then((res) => {
        setShowEdit(res.data.response);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/hotels`)
      .then((response) => {
        setHotel(response.data.response);
      })
      .catch((error) => {
        alert(`${error.response.data.message}, ${error.message}`);
      });
  }, []);
  console.log(hotel);

  const onSubmit = (event) => {
    let showObject = {};

    event.preventDefault();
    let inputs = ["name", "photo", "price","description","hotelId"];

    inputs.forEach((input) => {
      showObject[input] = form.current.elements[input].value;
    });
    // showObject["userId"] = "636d1ed3692e58acbf29845d";
    axios
      .patch(
        `${process.env.REACT_APP_API_URL}/api/shows/${showId}`,
        showObject
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

  console.log(showEdit);

  return (
    <form ref={form} className="Form" onSubmit={onSubmit}>
      {showEdit && (
        <>
          <div className="Form-field">
            <label htmlFor="show-name">Hotel Name: </label>
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