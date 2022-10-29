import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import '/index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Registro from './Components/Registro';
import Login from './Components/Login';
import Edit from './Components/Edit';
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
    path: "/feed",
    element: <Feed/>,
  },
  {
    path: "/Post",
    element: <Post/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
