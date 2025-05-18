import { configureStore } from "@reduxjs/toolkit";

import { carsReducer } from "./car/slice";
import { filterCarsReducer } from "./filters/slice";
import { favoritesSlice } from "./favorite/slice";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filters: filterCarsReducer,
    favorites: favoritesSlice,
  },
});
