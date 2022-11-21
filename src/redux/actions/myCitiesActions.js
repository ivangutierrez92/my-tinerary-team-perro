import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getInitialMyCities = createAsyncThunk("getInitialMyCities", async data => {
  let query = {
    params: {
      userId: data.userId,
    },
  };
  try {
    const res = await axios.get(process.env.REACT_APP_API_URL + data.endpoint, query);
    return res.data.response;
  } catch (error) {
    if (error.response) {
      throw error.response.data.message.join("\n");
    } else {
      throw error;
    }
  }
});

const deleteCity = createAsyncThunk("deleteCity", async data => {
  try {
    const res = await axios.delete(process.env.REACT_APP_API_URL + data.endpoint + data.cityId);
    return res.data.id;
  } catch (error) {
    if (error.response) {
      throw error.response.data.message.join("\n");
    } else {
      throw error;
    }
  }
});

const myCitiesActions = {
  getInitialMyCities,
  deleteCity,
};

export default myCitiesActions;
