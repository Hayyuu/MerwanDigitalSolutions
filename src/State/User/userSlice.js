import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:'user',
    initialState:{
        data:{}},
    reducers:{
        register:(state,action)=>{
           return {...state, data:action.payload,registerd:true};
        },
        login:(state,action)=>{
            return {...state, data:action.payload,signedIn:true};
        },
    },
});

export const {register,login}=userSlice.actions;
export default userSlice.reducer;
