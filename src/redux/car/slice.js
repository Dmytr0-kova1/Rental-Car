import { createSlice } from "@reduxjs/toolkit";

import { fetchCars, searchCar, searchCarBrands } from "./operations";

const initialState = {
  items: [],
  brands: [],
  selectedCar: null,
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
      })
      .addCase(searchCar.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(searchCar.fulfilled, (state, action) => {
        state.selectedCar = action.payload;
        state.isLoading = false;
      })
      .addCase(searchCar.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const carsReducer = slice.reducer;
