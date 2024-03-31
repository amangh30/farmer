import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import { GlobalProvider } from './GlobalContext';


ReactDOM.createRoot(document.getElementById('root')).render(
    <GlobalProvider />
)
