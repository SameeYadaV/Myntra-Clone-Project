import { useSelector } from "react-redux";
import { BagItem } from "./BagItem";
import { BagSummary } from "./BagSummary";
import { Footer } from "./footer";
import { Header } from "./Header";

export function Bag(){

  const items=useSelector(store=>store.Item)
  const bag=useSelector(store=>store.bag)
  const finalitem=items.filter(item=>{
    const indexof=bag.indexOf(item.id)
    return indexof >=0
  })
    return(
   <>
   <Header/>
    <main>
      <div className="bag-page">
        <div className="bag-items-container"> 
        {
          finalitem.map(items=> <BagItem item={items} key={items.id} />)
        }
         </div>
        <BagSummary  />
        </div>
          </main>
          <Footer/>
   </>
    )
}