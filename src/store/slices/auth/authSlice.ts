import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  isUserAuthenticated: boolean;
}

const initialState: AuthState = {
  isUserAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state) => {
      state.isUserAuthenticated = true;
    },
    logOut: (state) => {
      state.isUserAuthenticated = false;
    },
  },
});

export const { logIn, logOut } = authSlice.actions;
