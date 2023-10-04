import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import { router } from './Router'
import ContextProvider from './ContextProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </HelmetProvider>
  </React.StrictMode>
)