import { createSlice } from "@reduxjs/toolkit";

let initialState = {
   
    favorit: []
}
export const favoriteSlice = createSlice({
    name: "favorit",
    initialState,
    reducers: {
    
        favoriteMovies: (state, action) => {
            state.favorit = [ ...state.favorit,action.payload ]
        },
        deleteMovies: (state, action) => {
            state.favorit = [ ...action.payload ]
        }

    }
})


export const { favoriteMovies,deleteMovies} = favoriteSlice.actions;

export default favoriteSlice.reducer;