import { useSelector } from "react-redux"
import { HomeItem } from "./HomeItem"

export function Home(){
   const display=useSelector(store=>store.Item)
    
    return(
         <main>
                <div className="items-container">
                    {
                       display.map(items=><HomeItem  key={items.id} item={items} />)
                    }
                </div>
            </main>
    )
}