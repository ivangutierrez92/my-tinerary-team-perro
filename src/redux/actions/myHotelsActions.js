import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const myHotelInit = createAsyncThunk("myHotelinit", async (data) => {
  try {
   const response= await axios.get(`${process.env.REACT_APP_API_URL}/api/hotels?userId=${data.userId}`)
   console.log(response.data.response);
   return response.data.response
  
  }catch(error){
    console.log(error);

  }
});

const myHotelDelete= createAsyncThunk("myHotelDelete", async data => {

  try{

    const response= await axios.delete(`${process.env.REACT_APP_API_URL}/api/hotels/${data.hotelId}`)
    console.log(response.data.id);
    return response.data.id



  }catch(error){

     console.log(error);


  }




})



const myHotelsActions = {
  myHotelInit,
  myHotelDelete,
};

export default myHotelsActions;


