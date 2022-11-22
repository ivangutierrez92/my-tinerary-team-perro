import { createReducer } from "@reduxjs/toolkit";
import myShowsActions from "../actions/myShowsAction";
const { myShowsInit, myShowsDelete } = myShowsActions;

const initialState = {
  showsList: [],
};

const myShowsReducer = createReducer(initialState, (builder) =>{
  builder.addCase(myShowsInit.fulfilled, (state, action) => {
    return { ...state, hotelist: action.payload };
  }).addCase(myShowsDelete.fulfilled, (state, action) => {
    const newShowsList= state.showsList.filter(shows=>shows._id != action.payload)
  
  return{...state,showsList: newShowsList}
  
  })
});

export default myShowsReducer;