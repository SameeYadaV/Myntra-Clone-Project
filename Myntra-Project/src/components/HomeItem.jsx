import {useDispatch, useSelector} from "react-redux";
import { bagActions } from "../store/BagItem";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";

export function HomeItem({item}){

    const check=useSelector(store=>store.bag)
    const checkelement=check.indexOf(item.id) >=0;

const dispatch=useDispatch();

    function handelButton(){
        dispatch(bagActions.addToBag(item.id))
    }
    function handelButtondelete(){
        dispatch(bagActions.removeToBag(item.id))
    }
    return(
        <div className="item-container">
      <img className="item-image" src={item.image} alt="item image"/>
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {
      checkelement ? 
       <button className="btn btn-danger m-3 w-75 " onClick={handelButtondelete}  > <MdDeleteOutline /> Remove</button>:
       <button className="btn btn-success m-3 w-75" onClick={handelButton} ><IoIosAddCircleOutline /> Add to bag</button>
      }
     
     

    </div>
    )
}