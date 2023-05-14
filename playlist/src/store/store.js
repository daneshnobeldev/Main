import { configureStore } from "@reduxjs/toolkit";
import { resetAction } from "./actions";
import { addSong,removeSong,songsReducer } from "./slices/songsSlice";
import {addMovie,removeMovie,moviesReducer} from './slices/moviesSlice';




const store = configureStore({
    reducer:{
        songs:songsReducer,
        movies:moviesReducer
    }
})



export {store}
export {resetAction};
export {addSong,removeSong,addMovie,removeMovie}