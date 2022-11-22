import { createReducer } from "@reduxjs/toolkit";
import myHotelsActions from "../actions/myHotelsActions";
const {myHotelInit,myHotelDelete} = myHotelsActions

const initialState = {
  hotelList: [],
};


const myHotelsReducer = createReducer(initialState, builder=>{
builder.addCase(myHotelInit.fulfilled, (state, action) => {
  return { ...state, hotelList: action.payload };
}).addCase(myHotelDelete.fulfilled, (state, action) => {

const newHotelList= state.hotelList.filter(hotel=>hotel._id != action.payload)

  return{...state,hotelList:newHotelList}
})




})

export default myHotelsReducer;