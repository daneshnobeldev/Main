import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:3005/";
 const fetchUsers = createAsyncThunk("users/fetch",async()=>{
    const response = await axios.get("users");
    await pause(1000);
    return response.data;

});

const pause = (duration) => {
   return new Promise((resolve) => {
        setTimeout(resolve,duration)
    })
}
console.log(fetchUsers)
export {fetchUsers};



