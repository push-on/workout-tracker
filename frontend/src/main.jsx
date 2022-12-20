import ReactDOM from 'react-dom/client'
import React from 'react'


import { BrowserRouter } from "react-router-dom"
import { App } from './App'
import { WorkoutContextProvider } from './context/WorkoutContextProvider'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WorkoutContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </WorkoutContextProvider>
  </React.StrictMode>,
)
