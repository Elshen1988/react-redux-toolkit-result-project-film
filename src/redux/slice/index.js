import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: []
}
export const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        getmovies: (state, action) => {
            state.movies = action.payload
        },
        searchmovies: (state, action) => {
            state.favorite ={...action.payload}
        }
     
    }
})


export const { getmovies,searchmovies } = moviesSlice.actions;

export default moviesSlice.reducer;