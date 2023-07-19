import { createSlice } from "@reduxjs/toolkit";
import { addReview } from "./reviewOperations";

const pending = (state) => {
  state.isLoading = true;
};

const rejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const initialState = {
  review: null,
  isLoading: false,
  error: null,
};

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    setNewDate: (state, { payload }) => {
      state.date = payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(addReview.pending, pending)
      .addCase(addReview.rejected, rejected)
      .addCase(addReview.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.review = payload;
      }),
});

export default reviewsSlice.reducer;

export const { setNewDate } = reviewsSlice.actions;
