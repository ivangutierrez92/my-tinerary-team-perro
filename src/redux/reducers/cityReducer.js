import { createReducer } from "@reduxjs/toolkit";
import cityActions from "../actions/cityActions";
import myCitiesActions from "../actions/myCitiesActions";
const { getInitialData, getCities } = cityActions;
const { deleteCity } = myCitiesActions;

const initialState = {
  cities: [],
  continents: [],
  initial: true,
  message: "",
  search: "",
  continentFilter: [],
};

const cityReducer = createReducer(initialState, builder => {
  builder

    .addCase(getInitialData.fulfilled, (state, action) => {
      let arrContinents = action.payload.map(city => city.continent);
      arrContinents = [...new Set(arrContinents)];
      arrContinents = [...arrContinents].map(continent => {
        return { name: continent, checked: false };
      });
      return { ...state, cities: action.payload, message: "", continents: arrContinents, initial: false };
    })
    .addCase(getInitialData.pending, (state, action) => {
      return { ...state, message: "Loading..." };
    })
    .addCase(getInitialData.rejected, (state, action) => {
      return { ...state, cities: [], message: action.error.message };
    })
    .addCase(getCities.fulfilled, (state, action) => {
      return {
        ...state,
        cities: action.payload.data,
        search: action.payload.search,
        continents: action.payload.continents,
        message: "",
      };
    })
    .addCase(getCities.rejected, (state, action) => {
      return {
        ...state,
        cities: [],
        message: action.error.message,
        continents: action.meta.arg.continents,
        search: action.meta.arg.search,
      };
    })
    .addCase(deleteCity.fulfilled, (state, action) => {
      let newCities = state.cities.filter(city => city._id !== action.payload);
      return {
        ...state,
        cities: newCities,
      };
    });
});

export default cityReducer;
