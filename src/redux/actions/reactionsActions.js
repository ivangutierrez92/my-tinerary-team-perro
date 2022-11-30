import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getReactions = createAsyncThunk("getReactions", async data => {
  try {
    let res = {}
    for(let itinerary of data) {
      let reaction = await axios.get(`${process.env.REACT_APP_API_URL}/api/reactions?itineraryId=${itinerary._id}`)
      res[itinerary._id] = reaction.data.response;
    }
    return {success: true, response: res};
  } catch (error) {
    if (error.response) {
      return { success: false, message: error.response.data.message || error.response.data };
    } else {
      return { success: false, message: error.message };
    }
  }
});

const reactionsActions = {
  getReactions
};

export default reactionsActions;
