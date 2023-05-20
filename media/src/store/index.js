import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";

const store = configureStore({
    name:'store',
    reducer:{
        users:usersReducer
    }
});

export {store}
export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/removeUser';
