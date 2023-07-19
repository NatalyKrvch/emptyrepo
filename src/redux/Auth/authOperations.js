import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import {
  logInUserAPI,
  logOutUserAPI,
} from '../../service/API/Auth&UserAPI';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const logIn = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const data = await logInUserAPI(user);
      token.set(data.accessToken);
      return data;
    } catch (error) {
       console.log(error);
      // if (error.response.status === 401) {
      //   toast.error(
      //     'Invalid email or password. Please check data you entered! ',
      //     {
      //       position: toast.POSITION.TOP_RIGHT,
      //     }
      //   );
      //   return;
      // }
      // toast.error('Something went wrong. Please try again!', {
      //   position: toast.POSITION.TOP_RIGHT,
      // });
      // return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await logOutUserAPI();
      token.unset();
      return data;
    } catch (error) {
      console.log(error);
      // toast.error('Something went wrong. Please try again!', {
      //   position: toast.POSITION.TOP_RIGHT,
      // });
      // return rejectWithValue(error.response.status);
    }
  }
);
