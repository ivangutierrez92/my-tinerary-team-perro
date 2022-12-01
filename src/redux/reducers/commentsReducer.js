import { createReducer } from "@reduxjs/toolkit";
import commentsActions from "../actions/commentsActions";
import myCommentsActions from "../actions/myCommentsActions";
const { getInicialComments, createComment } = commentsActions;
const { deleteComments } = myCommentsActions;

const initialState = {};

const commentsReducer = createReducer(initialState, (builder) => {
  builder.addCase(getInicialComments.fulfilled, (state, action) => {
    if (action.payload.success) {
      let newState = {
        ...state,
      };
      newState[action.payload.showId] = action.payload.response;
      console.log(newState);
      return newState;
    } else {
      let newState = {
        ...state,
      };
      newState[action.payload.showId] = [];
      return newState;
    }
  }).addCase(createComment.fulfilled,(state,action)=>{
    
    
    console.log(action)
    if(action.payload.success){
    let newState = {
     ...state,
    };

    newState[action.payload.response.showId] = [action.payload.response,...newState[action.payload.response.showId]];
    return newState;
  }
  })






});

export default commentsReducer;
