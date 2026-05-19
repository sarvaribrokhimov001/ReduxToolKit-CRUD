import { configureStore } from "@reduxjs/toolkit";
import cars from "../features/CarsSlice";

export const store = configureStore({
  reducer: {
    cars
  }
});