import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const myShowsInit = createAsyncThunk("myShowsInit", async (data) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/shows/userId=${data.userId}`
    );
    console.log(response.data.response);
    return response.data.response;
  } catch (error) {
    console.log(error);
  }
});

const myShowsDelete = createAsyncThunk("myShowsDelete", async (data) => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_API_URL}/api/shows/${data.shows.id}`
    );
    console.log(response.data.response);
    return response.data.response;
  } catch (error) {
    console.log(error);
  }
});

const myShowsActions = {
  myShowsInit,
  myShowsDelete,
};

export default myShowsActions;
