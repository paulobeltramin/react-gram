import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { RouterProvider, createBrowserRouter }from 'react-router-dom'
import { Home } from './home/Home.jsx'
import { Login } from './login/Login.jsx'

const routes = createBrowserRouter([
  {
    path:'/',element:<Home/>
  },

  {
    path:'/login',element:<Login/>
  },

  
])

ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={routes}>
   <React.StrictMode>
    <App />
  </React.StrictMode>,
 </RouterProvider>
)
