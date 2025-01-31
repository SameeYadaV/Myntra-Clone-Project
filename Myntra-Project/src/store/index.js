import {configureStore} from"@reduxjs/toolkit"
import  ItemSlice  from "./ItemSlice"
import FetchingSlice from "./Fetching"
import { bagSlice } from "./BagItem"

 export const MyntraStore=configureStore({
    reducer:{
        Item:ItemSlice.reducer,
        Fetching:FetchingSlice.reducer,
        bag:bagSlice.reducer
        
    }
})