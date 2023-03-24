import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "../slice/FavoritSlice";
import moviesSlice from "../slice/MoviesSlice";


export const store = configureStore({
    reducer: {
        movies: moviesSlice,
        favorit: favoriteSlice
    }
})