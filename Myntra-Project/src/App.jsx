import { Outlet } from "react-router-dom"
import { Footer } from "./components/footer"
import { Header } from "./components/Header"
import { Home } from "./components/Home"
import { FetchItem } from "./components/FetchItem"
import { LoadingSpinner } from "./components/LoadingSpinner"
import { useSelector } from "react-redux"

function App() {
  const loader=useSelector(store=>store.Fetching)

  return (
    <>
   <Header/>
   <FetchItem/>
   {loader.currentFetch?<Outlet/>:<LoadingSpinner/>}
    <Home/>
    <Footer/>
    </>
  )
}

export default App
