import { configureStore } from "@reduxjs/toolkit";
import progressReducer from "../Redux/progressSlice"

 const store= configureStore({
    reducer:{
    progress:progressReducer,
    }
 })


 export default store;