import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Details from './componets/Details'
import Applied from './componets/Applied'
import ErrorPage from './componets/ErrorPage'

const route = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/error",
    element: <ErrorPage/>
  },
  {
    path: "/details",
    element: <Details/>
  },
  {
    path: "/applied",
    element: <Applied/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
