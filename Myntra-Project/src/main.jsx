import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux"

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import { Myntra } from './components/Myntra.jsx'
import { MyntraStore } from './store/index.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={MyntraStore} >
   <Myntra />
   </Provider>
  </StrictMode>,
)
