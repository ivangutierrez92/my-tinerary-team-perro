import { createReducer } from "@reduxjs/toolkit";
import reactionsActions from "../actions/reactionsActions";
const {  getReactions } = reactionsActions;

const initialState = {
};

const reactionsReducer = createReducer(initialState, builder => {
  builder
    .addCase(getReactions.fulfilled, (state, action) => {
      if (action.payload.success) {
        for(let reaction in action.payload.response) {
          action.payload.response[reaction].reacted = false;
        }
        return action.payload.response;
      }
    });
});

export default reactionsReducer;
