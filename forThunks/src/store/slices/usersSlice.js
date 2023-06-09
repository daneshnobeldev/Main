import {createSlice} from '@reduxjs/toolkit';
import { fetchUsers } from '../thunks/usersThunk';
const usersSlice = createSlice({
    name : 'users',
    initialState : {
        isLoading:false,
        data : [],
        error : null
    },
   
    extraReducers(builder){
        builder.addCase(fetchUsers.pending,(state,action) =>{
            state.isLoading = true;
        });
        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchUsers.rejected,(state,action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    }
})

export const usersReducer = usersSlice.reducer;