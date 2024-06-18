import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// CONFIGURANDO ROUTER
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'


// COMPONENTES/ROUTES/PÁGINAS
import Contact from './routes/Contact.jsx'
import ErrorPage from './routes/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    // Adicionando página de erro ao home:
    errorElement: <ErrorPage/>
  },

  {
    path:'contact',
    element: <Contact/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
