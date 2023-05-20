import { createSlice,nanoid   } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name:'cars',
    initialState:{
        searchTerm :'',
        list:[]
    },
    reducers:{
        addCar(state,action){
            ;
            const newCar = action.payload.car;
            newCar.id = nanoid();
            state.list.push(newCar)
        },
        removeCar(state,action){
            const updated = state.list.filter(car => {
                return car.id !== action.payload.id
            });
            state.list = updated;
        },
        changeSearchTerm(state,action){
            state.searchTerm = action.payload.query
        }
    }
})

export const {addCar,removeCar,changeSearchTerm} = carsSlice.actions;
export const carsReducer = carsSlice.reducer;