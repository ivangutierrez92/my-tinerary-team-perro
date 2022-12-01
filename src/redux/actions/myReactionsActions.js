import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getMyReactions = createAsyncThunk("getMyReactions", async data => {
  let headers = { headers: { Authorization: `Bearer ${data.token}` } };
  try {
    let res = await axios.get(`${process.env.REACT_APP_API_URL}/api/reactions?userId=${data.userId}`, headers);
    return { success: true, response: res.data.response };
  } catch (error) {
    if (error.response) {
      return { success: false, message: error.response.data.message || error.response.data };
    } else {
      return { success: false, message: error.message };
    }
  }
});


const myReactionsActions = {
  getMyReactions,

};

export default myReactionsActions;
