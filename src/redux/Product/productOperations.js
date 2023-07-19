import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getProductsAPI,
  addProductAPI,
  removeProductAPI,
  changeProductAPI,
  getProductByIdAPI,
} from "../../service/API/productsApi";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async ({ page, per_page }, { rejectWithValue }) => {
    try {
      const data = await getProductsAPI(page ?? null, per_page ?? null);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (product, thunkAPI) => {
    try {
      const data = await addProductAPI(product);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeProduct = createAsyncThunk(
  "products/removeProduct",
  async (id, thunkAPI) => {
    console.log(id);
    try {
      const data = await removeProductAPI(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeProduct = createAsyncThunk(
  "products/changeProduct",
  async ({id, body}, thunkAPI) => {
    console.log(id, body);
    try {
      const data = await changeProductAPI(id, body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getProductById = createAsyncThunk(
  'products/getProductById',
  async (id, { rejectWithValue }) => { 
    try {
      const data = await getProductByIdAPI(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);