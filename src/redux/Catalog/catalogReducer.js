import { createSlice } from "@reduxjs/toolkit";
import {
  getCatalogs,
  addCatalog,
  removeCatalog,
  changeCatalog,
} from "./catalogOperations";

const pending = (state) => {
  state.isLoading = true;
};

const rejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const initialState = {
  catalogs: [],
  totalItems: 0,
  isLoading: false,
  error: null,
};

const catalogsSlice = createSlice({
  name: "catalogs",
  initialState,
  reducers: {
    setNewDate: (state, { payload }) => {
      state.date = payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getCatalogs.pending, pending)
      .addCase(getCatalogs.rejected, rejected)
      .addCase(addCatalog.pending, pending)
      .addCase(addCatalog.rejected, rejected)
      .addCase(removeCatalog.pending, pending)
      .addCase(removeCatalog.rejected, rejected)
      .addCase(changeCatalog.pending, pending)
      .addCase(changeCatalog.rejected, rejected)
      .addCase(getCatalogs.fulfilled, (state, { payload }) => {
        state.catalogs = payload.data;
        state.totalItems = payload.total;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addCatalog.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.catalogs.push(payload);
      })
      .addCase(removeCatalog.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.catalogs = state.catalogs.filter(
          (catalog) => catalog._id !== payload._id
        );
      })
      .addCase(changeCatalog.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.catalogs = state.catalogs
          .filter((catalog) => catalog._id !== payload._id)
          .push(...payload); //переделать скорее всего !!!
      }),
});

export default catalogsSlice.reducer;

export const { setNewDate } = catalogsSlice.actions;
