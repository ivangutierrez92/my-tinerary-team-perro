import { createReducer } from "@reduxjs/toolkit";
import myReactionsActions from "../actions/myReactionsActions";
const {  getMyReactions } = myReactionsActions;

const initialState = null;

const myReactionsReducer = createReducer(initialState, builder => {
  builder.addCase(getMyReactions.fulfilled, (state, action) => {
    if(action.payload.success){
      let newState = action.payload.response.reduce((acc, curr) => {
        if(!acc[curr.name]) {
          acc[curr.name] = []
        }
        acc[curr.name] = [...acc[curr.name], curr];
        return acc;
      }, {})
      return newState;
    }
  })
});

export default myReactionsReducer;
