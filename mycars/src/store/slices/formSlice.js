import { createSlice } from "@reduxjs/toolkit";
import {addCar} from './carsSlice';



const formSlice = createSlice({
    name:'createCar',
    initialState:{
        name:'',
        cost:0
    },
    reducers:{
        changeName(state,action){
            state.name = action.payload.name
        },

        changeCost(state,action){
            state.cost = action.payload.cost || ''
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(addCar,(state)=>{
            state.name = '';
            state.cost = 0;
        })
    }
})


export const {changeName,changeCost} = formSlice.actions;
export const formsReducer = formSlice.reducer;
