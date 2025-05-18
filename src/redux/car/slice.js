import { createSlice } from "@reduxjs/toolkit";

import { fetchCars, searchCar, searchCarBrands } from "./operations";

const initialState = {
  items: [],
  brands: [],
  selectedCar: null,
  isLoading: true,
  isError: false,
  page: 1,
  limit: 8,
};

const slice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.page += 1;
    },
    resetPage: (state) => {
      state.page = 1;
    },
    clearCars: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        if (state.page === 1) {
          state.items = action.payload;
        } else {
          state.items = [...state.items, ...action.payload];
        }
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

export const { incrementPage, resetPage, clearCars } = slice.actions;
export const carsReducer = slice.reducer;
