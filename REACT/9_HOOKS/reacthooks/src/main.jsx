import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// COMPONENTES
import Home from './routes/Home'
import Contact from './routes/Contact'
import { HookUseContext } from './components/HookUseContext.jsx'

// CONFIGURANDO ROUTER
import { createBrowserRouter, RouterProvider, Route, Navigate } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    
    // Componente base:
    children: [
      {
        path: '/',
        element: <Home/>
      },

      {
        path: 'contact',
        element: <Contact/>
      },

      
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <HookUseContext>
      <RouterProvider router={router}/>
    </HookUseContext>
    
  </React.StrictMode>,
)
