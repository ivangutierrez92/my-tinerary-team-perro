import axios from 'axios';
import React, { useEffect } from 'react'
import { useRef, useState } from "react";
import { useSelector } from 'react-redux';
import swal from 'sweetalert';
import UpdateProfileForm from '../components/UpdateProfileForm';
import "../styles/pages/update-profile.css"

export default function UpdateProfile() {
  let formRef=useRef(null);
  let user = useSelector((store) => store.signIn);
  
  let [getUser,setGetUser] = useState(null)

useEffect(() => {
  let headers = { headers: { Authorization: `Bearer ${user.token}` } };

  axios
  .get(`${process.env.REACT_APP_API_URL}/api/auth/me/${user.id}`,headers)
  .then((response) => {

    setGetUser(response.data.response)

  })
  .catch(error=>{
    swal("Error",error.response.data.message,"error");
  })



},[])







  const sendData= async (event)=>{
  event.preventDefault();
   let headers = { headers: { Authorization: `Bearer ${user.token}` } };
  let profileUpdated={}
  let alertConfirmation;
  let properties=["name","lastName","age","photo"]
  
    properties.forEach((property) => {
      profileUpdated[property] = formRef.current.elements[property].value;
    });

    try {
      alertConfirmation = await swal(
        "Are you sure?",
        "your profile will be updated",
        { buttons: ["Cancel", "Yes"] }
      );
    } catch (error) {
      
    }
    if(alertConfirmation){
      axios
      .patch(`${process.env.REACT_APP_API_URL}/api/auth/me/${user.id}`,profileUpdated,headers)
      .then((response)=>{
        swal("success","Your profile has been updated successfully","success");

      })
      .catch(error=>{
        swal(
          "Error updating your profile",error.response.data.message, "error"
        )
      })
      
    }



}













  return (
    <>
      <h1 className="update-profile-title">Update your profile</h1>
      {
      getUser&&
      <UpdateProfileForm formRef={formRef} onSubmit={sendData} user={getUser}/>
    }

    </>
  );
}
