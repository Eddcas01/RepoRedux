import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './store'
import './index.css'
import Header from './Components/Header'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Index from './Pages/Index'
import Productos from './Components/Productos'
import { Provider } from 'react-redux'

const router = createBrowserRouter([

  {
    path: '/',
    element: <Header />,

    children: [
      {
        index: true,
        element: <Index />


      },
      {
        path: '/productos',
        element: <Productos />
      }
    ]
  }



])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider

        router={router}

      >



      </RouterProvider>
    </Provider>
  </React.StrictMode >,
)
