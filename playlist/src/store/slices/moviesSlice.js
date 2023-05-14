import {createSlice} from '@reduxjs/toolkit';
import {resetAction} from '../store';

const moviesSlice = createSlice({
    name:'movies',
    reducers:{
        addMovie(state,action){
           state.push(action.payload)
        },
        removeMovie : (state,action) => {
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
})

export const {addMovie,removeMovie} = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;