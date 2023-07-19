import { createSlice } from '@reduxjs/toolkit';
import { logIn, logout } from './authOperations';

const pending = state => {
  state.isUserFetching = true;
};
const rejected = state => {
  state.isUserFetching = false;
  state.isLoggedIn = false;
};

const initialState = {
  accessToken: null,
  isLoggedIn: false,
  isUserFetching: false,
  userData: {
    email: null,
    id: null,
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addAccessToken: (state, { payload }) => {
      state.accessToken = payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(logIn.pending, pending)
      .addCase(logIn.rejected, rejected)
      .addCase(logout.pending, pending)
      .addCase(logout.rejected, rejected)
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.userData = {
          login: payload.login,
          id: payload.id,
        };
        state.accessToken = payload.accessToken;
        state.isLoggedIn = true;
        state.isUserFetching = false;
      })
      .addCase(logout.fulfilled, () => ({ ...initialState })),
});

export default authSlice.reducer;

export const { addAccessToken } = authSlice.actions;
