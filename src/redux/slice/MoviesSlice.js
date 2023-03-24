import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    movies: []
}
export const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        getmovies: (state, action) => {
            state.movies = action.payload
        }
    }
})


export const { getmovies} = moviesSlice.actions;

export default moviesSlice.reducer;