import { createSlice } from "@reduxjs/toolkit";
import {resetAction} from '../store';

const songsSlice = createSlice({
    name:'songs',
    reducers:{
        addSong(state,action){
           state.push(action.payload)
        },
        removeSong : (state,action) => {
            const index = state.indexOf(action.payload);
            state.splice(index,1);

        }
    },
    extraReducers: (builder) => {
        builder.addCase(resetAction,() => {
            return [];
        })
    },
    initialState:[]
});

export const {addSong,removeSong} = songsSlice.actions;
export const songsReducer = songsSlice.reducer;