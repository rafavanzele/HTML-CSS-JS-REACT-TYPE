import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// CONFIGURANDO ROUTER
import { createBrowserRouter, RouterProvider, Route, Navigate } from 'react-router-dom'

// COMPONENTE BASE
import Home from './routes/Home.jsx'

// COMPONENTES/ROUTES/PÁGINAS
import Contact from './routes/Contact.jsx'

// 2 CRIANDO PROVIDER
import { CounterContextProvider } from './context/CounterContext.jsx'

// 5 CRIANTO CONTEXTO MAIS COMPLEXO
import { TitleColorContextProvider } from './context/TitleColorContext.jsx'

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
    
    <CounterContextProvider>
      
      <TitleColorContextProvider>
        <RouterProvider router={router} />
      </TitleColorContextProvider>
      
    </CounterContextProvider>
    
  </React.StrictMode>,
)
