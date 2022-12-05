import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/pages/Hotel.css";
import DetailHotel from "../components/DetailHotel";
import Show from "../components/Show";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import reactionsActions from "../redux/actions/reactionsActions";

export default function Hotel() {
  let [hotel, setHotel] = useState({});
  let [shows, setShow] = useState({});
  let { id } = useParams();
  let { token } = useSelector(store => store.signIn);
  let {getShowsReactions} = reactionsActions;

  let dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/hotels/${id}`)
      .then(function (response) {
        // manejar respuesta exitosa
        setHotel(response.data.response);
      })
      .catch(function (error) {
        // manejar error
      });

    axios
      .get(`${process.env.REACT_APP_API_URL}/api/shows?hotelId=${id}`)
      .then(function (response) {
        // manejar respuesta exitosa
        setShow(response.data.response);
      })
      .catch(function (error) {
        // manejar error
      });
  }, [id]);

  useEffect(() => {
    if (Object.keys(shows).length) {
      dispatch(getShowsReactions({ shows, token }));
    }
  }, [shows]);

  return (
    <div className="container-hotel">
      {Object.keys(hotel).length > 0 ? (
        <>
          <DetailHotel info={hotel} />
          {shows.length > 0 ? (
            shows?.map(show => <Show key={show.id} shows={show} />)
          ) : (
            <h2 className="no-show">No Show for this Hotel</h2>
          )}
        </>
      ) : (
        <h2 className="no-show"> No Hotel </h2>
      )}
    </div>
  );
}
