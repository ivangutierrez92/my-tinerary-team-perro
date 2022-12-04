import { createReducer } from "@reduxjs/toolkit";
import commentsActions from "../actions/commentsActions";
import signInActions from "../actions/signInActions";
const { getInicialComments, createComment, deleteComments, updateComments } =
  commentsActions;
const {signout} = signInActions;

const initialState = {};

const commentsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getInicialComments.fulfilled, (state, action) => {
      if (action.payload.success) {
        let newState = {
          ...state,
        };
        newState[action.payload.showId] = action.payload.response;
        return newState;
      } else {
        let newState = {
          ...state,
        };
        newState[action.payload.showId] = [];
        return newState;
      }
    })
    .addCase(createComment.fulfilled, (state, action) => {
      if (action.payload.success) {
        let newState = {
          ...state,
        };

        newState[action.payload.response.showId] = [
          action.payload.response,
          ...newState[action.payload.response.showId],
        ];
        return newState;
      }
    })
    .addCase(deleteComments.fulfilled, (state, action) => {
      if (action.payload.success) {
        let newComments = state[action.payload.showId].filter(
          (coment) => coment._id !== action.payload.id
        );
        return {
          ...state,
          [action.payload.showId]: newComments,
        };
      }
    })
    .addCase(updateComments.fulfilled, (state, action) => {
      if (action.payload.success) {
        let newComments = state[action.payload.showId].map((comment) => {
          if (comment._id === action.payload.id) {
            return {
              ...comment,
              comment: action.payload.comment,
            };
          } else {
            return comment;
          }
        });

        return {
          ...state,
          [action.payload.showId]: newComments,
        };
      }
    })
    .addCase(signout.fulfilled, (state, action) => {
      if (action.payload.success) {
        return initialState;
      }
    });
});

export default commentsReducer;
