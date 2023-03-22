import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "../slice";


export const store = configureStore({
    reducer: {
        movies: moviesSlice,
        favorite:moviesSlice
    }
})