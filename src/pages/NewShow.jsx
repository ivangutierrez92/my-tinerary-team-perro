import React, { useEffect } from "react";
import axios from "axios";
import { useRef } from "react";
import { useSelector } from "react-redux";
import swal from "sweetalert";
import NewShowForm from "../components/NewShowForm"
import { useNavigate } from "react-router";



export default function NewShow() {
let nav= useNavigate();
let formRef= useRef(null);
  let { token,id } = useSelector((store) => store.signIn);


const onSubmit= (event)=>{
  event.preventDefault();
  let headers = { headers: { Authorization: `Bearer ${token}` } };

  let newShow = {}
  let inputs = ["name", "photo", "price", "description","hotelId","date"];



 inputs.forEach((input) => {
   newShow[input] = formRef.current.elements[input].value;
 });
 newShow["userId"]=id
 axios
   .post(`${process.env.REACT_APP_API_URL}/api/shows/`, newShow,headers)
   .then((response) => {
     if (response.data.success) {
       swal("Show created", "the Show was successfully created", "success");
       nav("/myshows")

     } else {
          swal(
            "Error creating new Show",
            response.data.message.join("\n"),
            "error"
          );

     }
   })

   .catch((error) => {
     swal("Error creating new Hotel", error.message, "error");
   });




}


  return (
    <>
      <h1 className="update-profile-title">New Show</h1>
     <NewShowForm formRef={formRef} onSubmit={onSubmit} />
     
    </>
      )
  }


