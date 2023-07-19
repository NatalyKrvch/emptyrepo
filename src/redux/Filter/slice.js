import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: 'Вид картки',
    reducers: {
        setFilter: (state, {payload}) => state = payload
    },
})

export const { setFilter } =filterSlice.actions;
export const filterReducer = filterSlice.reducer;