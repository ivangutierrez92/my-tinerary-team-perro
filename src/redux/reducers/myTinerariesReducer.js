import { createReducer } from "@reduxjs/toolkit";
import myTinerariesActions from "../actions/myTinerariesActions";
const { getInitialMyTineraries, deleteItinerary } = myTinerariesActions;

const initialState = {
  itineraries: [],
  message: "",
};

const myTinerariesReducer = createReducer(initialState, builder => {
  builder
    .addCase(getInitialMyTineraries.fulfilled, (state, action) => {
      return { ...state, message: "", itineraries: action.payload };
    })
    .addCase(getInitialMyTineraries.pending, (state, action) => {
      return { ...state, message: "Loading..." };
    })
    .addCase(getInitialMyTineraries.rejected, (state, action) => {
      return { state, itineraries: [], message: action.error.message };
    })
    .addCase(deleteItinerary.fulfilled, (state, action) => {
      if(action.payload.success) {
        let newItineraries = state.itineraries.filter(itinerary => itinerary._id !== action.payload.id);
        let message = "";
        message = newItineraries.length ? "" : "Couldn't find itineraries for this user";
        return { ...state, message, itineraries: newItineraries };
      }
    });
});

export default myTinerariesReducer;
