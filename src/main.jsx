import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles.css'
import { JournalisApp } from './JournalisApp.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>

      <JournalisApp />
      
    </BrowserRouter>

  </React.StrictMode>,
)
