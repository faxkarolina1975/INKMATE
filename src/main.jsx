import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import '/index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Registro from './Components/Registro';
import Login from './Components/Login';
import Edit from './Components/Edit';
import Inicio from './Components/Inicio';
import Home from './Components/Home';
import Gallery from './Components/Gallery';
import Chat from './Components/Chat';
import Feed from './Components/Feed';
import Post from './Components/Post';


import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Registro/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/edit",
    element: <Edit/>,
  },
  {
    path: "/Inicio",
    element: <Inicio/>,
  },
  {
    path: "/Home",
    element: <Home/>,
  },
  {
    path: "/Gallery",
    element: <Gallery/>,
  },
  {
    path: "/Chat",
    element: <Chat/>,
  },
  {
    path: "/Post",
    element: <Post/>,
  },
  {
    path: "/Feed",
    element: <Feed/>,
  },
  {
    path: "/Registro",
    element: <Registro/>,
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
