import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux";
//import store from "./components/Redux/store.js"

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
 // <Provider >
    <App />
  //</Provider>
  //</React.StrictMode>,
)


