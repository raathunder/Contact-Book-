// import { createSlice } from "@reduxjs/toolkit";

import { USER_LOGIN, USER_LOGOUT } from "../contactConst/types";

const initialState = {
  user: null,
  name: "user",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        login: (state, action) => {
          state.user = action.payload;
        },
        // ...state,
        // user: [action.payload, ...state.user],
      };

    case USER_LOGOUT:
      return {
        // ...state,

        logout: (state) => {
          state.user = null;
        },
      };

    default:
      return state;
  }
};
