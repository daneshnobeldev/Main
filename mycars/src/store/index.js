import { addCar,removeCar,changeSearchTerm,carsReducer } from "./slices/carsSlice";
import { changeName,changeCost,formsReducer } from "./slices/formSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    name:'car',
    reducer:{
        form:formsReducer,
        cars:carsReducer
    },

});

export {store};
export {addCar,removeCar,changeSearchTerm,changeName,changeCost};