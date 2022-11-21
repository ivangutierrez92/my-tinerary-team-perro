import { createReducer } from "@reduxjs/toolkit";
import myCitiesActions from "../actions/myCitiesActions";
const { getInitialMyCities, deleteCity } = myCitiesActions;

const initialState = {
  cities: [],
  message: "",
  cityToEdit: null
};

const myCitiesReducer = createReducer(initialState, builder => {
  builder
    .addCase(getInitialMyCities.fulfilled, (state, action) => {
      return { ...state, message: "", cities: action.payload };
    })
    .addCase(getInitialMyCities.pending, (state, action) => {
      return { ...state, message: "Loading..." };
    })
    .addCase(getInitialMyCities.rejected, (state, action) => {
      return {
        ...state,
        cities: [],
        message: action.error.message,
      };
    })
    .addCase(deleteCity.fulfilled, (state, action) => {
      let newCities = state.cities.filter(city => city._id !== action.payload);
      return { ...state, message: "", cities: newCities };
    });
});

export default myCitiesReducer;
