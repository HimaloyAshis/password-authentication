import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Shop from './components/Shop/Shop';
import Product from './components/Product/Product';
import Home from './components/Home/Home';
import Order from './components/Order/Order';
import cardProductLoader from './loader/cardProductLoader';
import Checkout from './components/Chekout/Checkout';
import Longin from './components/Login/Longin';
import SignIn from './components/Signin/SignIn';
import AuthProvider from './components/Provider/AuthProvider';
import PrivateRoutes from './components/Routes/PrivateRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/shop',
        element: <Shop></Shop>,
      },
      {
        path: 'product',
        element: <Product></Product>
      },
      {
        path: 'order',
        element: <PrivateRoutes><Order></Order></PrivateRoutes>,
        loader: cardProductLoader
      },
      {
        path: 'checkout',
        element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes>
      },
      {
        path: '/login',
        element: <Longin></Longin>,
      },
      {
        path: '/signup',
        element: <SignIn></SignIn>,
      }

    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router = {router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
