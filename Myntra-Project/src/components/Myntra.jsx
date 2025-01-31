import App from "../App";
import {BrowserRouter,Routes,Link,Route} from "react-router-dom"
import { Bag } from "./Bag";
import { Header } from "./Header";
import { Home } from "./Home";


export function Myntra(){
    return(
         <BrowserRouter>
         <Link to="/" ></Link>
         <Link to="/header"></Link>
           <Link to="bag"></Link>
           <Link to="/" ></Link>
           <Link to="/main" ></Link>
           <Routes>
            <Route path="bag" element={<Bag/>} ></Route>
            <Route path="/" element={<App/>} ></Route>
            <Route path="/header"element={<Header/>} ></Route>
            <Route path="/main" element={<Home/>}></Route>
            <Route path="*" element={<center className="text-danger fs-2 m-5">
              Not found : Page you requested not found
              <span className="m-5" >
              <Link to="/" className="link-underline link-underline-opacity-0 " >Myntra</Link>
              </span>
            </center>} ></Route>
           </Routes>
           </BrowserRouter>
    )
}