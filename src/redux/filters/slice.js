import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brand: "",
  rentalPrice: "",
  minMileage: "",
  maxMileage: "",
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    resetFilters: () => initialState,
  },
});

export const { setFilter, resetFilters } = slice.actions;
export const filterCarsReducer = slice.reducer;
