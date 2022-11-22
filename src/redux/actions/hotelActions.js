import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getHotelBefore = createAsyncThunk("getHotels", async () => {
  let params={
      params:{
        order: "asc"
      }


  }
  
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/hotels/`,params);
    return response.data.response;
  } catch (error) {
    console.log(error);
  }
});

const getHotelAfter = createAsyncThunk("getHotelAfter", async data => {
  let searchParams = {
    params: {
      name: data.name,
      order: data.order,
    },
  };
  console.log(searchParams);
  try {
    const response = await axios.get(process.env.REACT_APP_API_URL + data.param, searchParams);
    return { data: response.data.response, name: data.name, order: data.order };
  } catch (error) {
    console.log(error);
    throw error
  }
});

const hotelActions = {
  getHotelBefore,
  getHotelAfter,
};

export default hotelActions;
