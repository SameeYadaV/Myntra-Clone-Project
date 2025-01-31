import { createSlice } from "@reduxjs/toolkit";

const FetchingSlice=createSlice({
    name:'Fetching',
    initialState:{
        fetchDone:false,
        currentFetch:false
    },
    reducers:{
        markFetchDone:(state)=>{
            state.fetchDone =true;
        },
        markFetchStart:(state)=>{
         state.currentFetch=true;
        },
        markFetchFinish:(state)=>{
         state.currentFetch=true;
        }

    }
})

export const fetchingActions=FetchingSlice.actions;
export default FetchingSlice;
