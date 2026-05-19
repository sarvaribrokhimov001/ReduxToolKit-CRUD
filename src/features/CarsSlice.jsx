import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API = "http://localhost:3000/cars";

  export const fetchCars = createAsyncThunk("cars/fetchCars", async () => {
    const res = await fetch(API);
    return await res.json();
  }
 );

export const addCar = createAsyncThunk("cars/addCar", async (car) => {
    const res = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(car)
    });
    return await res.json();
  }
);

export const deleteCar = createAsyncThunk("cars/deleteCar", async (id) => {
    await fetch(`${API}/${id}`, {
      method: "DELETE"
    });
    return id;
  }
);

export const updateCar = createAsyncThunk("cars/updateCar", async (car) => {
    const res = await fetch(`${API}/${car.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(car)
    });
    return await res.json();
  }
);

const CarsSlice = createSlice({
  name: "cars",
  initialState: {
    data: [],
    loading: false,
    error: null
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchCars.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchCars.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });

    builder.addCase(fetchCars.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(addCar.fulfilled, (state, action) => {
      state.data.push(action.payload);
    });

    builder.addCase(deleteCar.fulfilled, (state, action) => {
      state.data = state.data.filter(
        (car) => car.id !== action.payload
      );
    });

    builder.addCase(updateCar.fulfilled, (state, action) => {
      state.data = state.data.map((car) =>
        car.id === action.payload.id
          ? action.payload
          : car
      );
    });
  }
});
export default CarsSlice.reducer;