import { createAsyncThunk } from '@reduxjs/toolkit';
import { addReviewAPI } from '../../service/API/reviewsApi';

export const addReview = createAsyncThunk(
  "reviews/addReview",
  async (review, thunkAPI) => {
    try {
      const data = await addReviewAPI(review);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
