import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/home.jsx'
import Rollete from '../pages/roulette.jsx'
import AdminPanel from './components/adminpanel/adminPanel.jsx'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/roulette',
        element: <Rollete />
      },
    ]
  },
  {
    path: '/adminpanel',
    element: <AdminPanel />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={Router} />
)

