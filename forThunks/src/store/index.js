import { configureStore } from "@reduxjs/toolkit";
import {usersReducer} from './slices/usersSlice';
export const store = configureStore({
    name : 'store',
    reducer:{
        users: usersReducer
    }
})


export * from '../store/slices/usersSlice';
export * from './thunks/usersThunk';

