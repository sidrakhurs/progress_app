import { createSlice } from "@reduxjs/toolkit";

const progressSlice=createSlice({
    name:"input",
    initialState:{
        value:0,
    },
    reducers:{
        setProgress:(state,action)=>{
state.value=action.payload
        }
    }
})
export const{setProgress}=progressSlice.actions;
export default progressSlice.reducer;