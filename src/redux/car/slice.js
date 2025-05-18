import { createSlice } from "@reduxjs/toolkit";

import { fetchCars, searchCarBrands } from "./operations";

const initialState = {
  items: [],
  brands: [],
  isLoading: true,
  isError: false,
};

const slice = createSlice({
  name: "cars",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.items = [];
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCars.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(searchCarBrands.fulfilled, (state, action) => {
        state.brands = action.payload;
      });
  },
});

export const carsReducer = slice.reducer;
