import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// CONFIGURANDO ROUTER
import { createBrowserRouter, RouterProvider, Route, Navigate } from 'react-router-dom'

// COMPONENTE BASE
import Home from './routes/Home.jsx'

// COMPONENTES/ROUTES/PÁGINAS
import Contact from './routes/Contact.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
// carregamento dinamico
import Product from './routes/Product.jsx'
// rotas aninhadas/nested routs
import Info from './routes/Info.jsx'
// search
import Search from './routes/Search.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    // Adicionando página de erro:
    errorElement: <ErrorPage/>,
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

      // CARREGAMENTO DINÂMICO
      {
        path: 'products/:id',
        element: <Product/>
      },

      // ROTAS ANINHADAS/NESTED ROUTS
      {
        path: 'products/:id/info',
        element: <Info/>
      },

      // SEARCH
      {
        path: 'search',
        element: <Search/>
      },

      // REDIRECT (exemplo: página teste que existia mas nao existe mais, redireciono pra home)
      {
        path: 'teste',
        element: <Navigate to={'/'}/>
      }
    ]
  },

  {/*
  {
    path:'contact',
    element: <Contact/>
  }
*/}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
