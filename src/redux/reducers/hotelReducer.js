import { createReducer } from "@reduxjs/toolkit";
import hotelActions from "../actions/hotelActions";

const { getHotelBefore,getHotelAfter } = hotelActions;

const initialState = {
  hotelList: [],
  name:"",
  order:"asc",
  firstRender: true,
};

const hotelReducer = createReducer(initialState, (builder) => {
  builder
  .addCase(getHotelBefore.fulfilled, (state, action) => {
    return {
      ...state,hotelList: action.payload,firstRender: false,
    };
  })
  .addCase(getHotelAfter.fulfilled, (state, action)=>{
    return{
    ...state,
    hotelList: action.payload.data,
    name:action.payload.name,
    order:action.payload.order,
    firstRender:false,


    }




  })




});

export default hotelReducer;
