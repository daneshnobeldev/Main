import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";
import albumsApi from "./apis/albumsApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { photosApi } from "./apis/photosApi";

const store = configureStore({
    name:'store',
    reducer:{
        users:usersReducer,
        albums:albumsApi.reducer,
        photos:photosApi.reducer
    },
    middleware: (getDefaultMiddleware) =>{
        return getDefaultMiddleware()
        .concat(albumsApi.middleware)
        .concat(photosApi.middleware)
    }
});

setupListeners(store.dispatch);

export {store}
export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/removeUser';
export * from './apis/albumsApi';
export * from './apis/photosApi';
