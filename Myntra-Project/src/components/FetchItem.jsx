import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { ItemActions } from "../store/ItemSlice";
import { fetchingActions } from "../store/Fetching";

export function FetchItem(){
    const fetching=useSelector(store=> store.Fetching)
    const dispatch=useDispatch();

    useEffect(()=>{
        if(fetching.fetchDone) return;

        const controller=new AbortController;
        const signal=controller.signal;

        // dispatch(fetchingActions.markFetchStart())

        fetch("http://localhost:8080/items" ,{signal})
        .then(res=>res.json())
        .then(({items})=>{
            dispatch(ItemActions.Adddata(items))
            dispatch(fetchingActions.markFetchDone())
            dispatch(fetchingActions.markFetchFinish())
        })

        return()=>{
            controller.abort();
        }

    },[fetching])
   return(
    <div>

    </div>
   )
}