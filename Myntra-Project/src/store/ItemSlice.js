import { createSlice } from "@reduxjs/toolkit";



  const ItemSlice=createSlice({
    name:"Item",
    initialState:[],
    reducers:{
        Adddata:(store,action)=>{
            return action.payload
        }
    }
})
export const ItemActions=ItemSlice.actions;
export default ItemSlice;