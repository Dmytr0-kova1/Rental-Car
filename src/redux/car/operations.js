import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const goitApi = axios.create({
  baseURL: "https://car-rental-api.goit.global/",
});

export const fetchCars = createAsyncThunk(
  "cars/fetchAll",
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const { brand, rentalPrice, minMileage, maxMileage } = state.filters;
      const { page, limit } = state.cars;

      const params = new URLSearchParams();

      if (brand) params.append("brand", brand);
      if (rentalPrice) params.append("rentalPrice", rentalPrice);
      if (minMileage) params.append("minMileage", minMileage);
      if (maxMileage) params.append("maxMileage", maxMileage);
      if (limit) params.append("limit", limit);
      if (page) params.append("page", page);

      const { data } = await goitApi.get("cars", { params });
      return data.cars || data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const searchCar = createAsyncThunk(
  "cars/searchCar",
  async (id, thunkAPI) => {
    try {
      const { data } = await goitApi.get(`cars/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const searchCarBrands = createAsyncThunk(
  "cars/searchCarBrands",
  async (_, thunkAPI) => {
    try {
      const { data } = await goitApi.get("brands");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
