import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCars = createAsyncThunk("fetchCars" , async () => {
    const request = await fetch(`http://localhost:3000/cars`);
    const data = await request.json();
    return data;
});

const CarsSlice = createSlice({
    name : "cars",
    initialState : {
        data : [],
        loading : false,
        Error : null
    },
    reducers : [],

    extraReducers : (builder) => {
        builder.addCase(fetchCars.pending , (state) => {
            state.loading = true , state.Error = null;
        });
        builder.addCase(fetchCars.fulfilled , (state , action) => {
            state.loading = false , state.Error = null,
            state.data = action.payload;
        });
        builder.addCase(fetchCars.rejected , (state , action) => {
            state.loading = false , state.Error = action.error.message || "Error";
        });
    }
});
export default CarsSlice.reducer