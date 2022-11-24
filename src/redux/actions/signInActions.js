import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const sendData = createAsyncThunk("sendData", async (data) => {
  console.log(data);
  try {
    let response = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/auth/sign-in`,
      data
    );
    // .then(response => {

    console.log(response);
    return response.data;
    // }
    // })
  } catch (error) {
    console.log(error);
    if (error.response) {
      return {message: error.response.data.message, success:false};
    } else {
      return { message: error.message, success: false };
      
      
    }
  }
});


const resendData = createAsyncThunk("resendData", async (token) => {

  let headers = {headers:{'Authorization': `Bearer ${token}`}}
  try {
    let user = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/auth/token`,
      null,headers
    );

    return{
      response:user.data.response,
      success:true,
      token:token
    } 
    
    

  } catch (error) {
    console.log(error);
    if (error.response) {
      return { message: error.response.data.message, success: false };
    } else {
      return { message: error.message, success: false };
    }
  }
});

const signInActions = {
  sendData,
  resendData,
};
export default signInActions;
