import { createReducer } from "@reduxjs/toolkit";
import reactionsActions from "../actions/reactionsActions";
const {  getReactions, toggleReaction } = reactionsActions;

const initialState = {
};

const reactionsReducer = createReducer(initialState, builder => {
  builder
    .addCase(getReactions.fulfilled, (state, action) => {
      if (action.payload.success) {
        return action.payload.response;
      }
    })
    .addCase(toggleReaction.fulfilled, (state, action) => {
      
      if(action.payload.success) {
        let {id, itineraryId} = action.payload;
        
        let newReactions = state[itineraryId].map(reaction => {
          if(reaction._id === id) {
            return {...reaction, reacted: !reaction.reacted, userId: reaction.reacted ? reaction.userId - 1 : reaction.userId + 1}
          } else {
            return reaction;
          }
        });
        let newState = {...state};
        newState[itineraryId] = newReactions;
        return newState;
      } else {
        console.log(action.payload.message);
      }
    });
});

export default reactionsReducer;