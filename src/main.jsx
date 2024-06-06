import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import Blog from "./Components/Blog/Blog.jsx";
import EstateDetail from "./Components/Estate/EstateDetail";
import Register from "./Components/Register/Register";
import AuthProvider from "./Components/AuthContext/AuthContext";
import Login from "./Components/Login/Login";
import PrivateRouter from "./Components/PrivateRoute/PrivateRouter";
import UpdateProfile from "./Components/Navbar/Update/UpdateProfile";
import NotFound from "./Components/404/NotFound";
import Map from "./Components/Map/Map";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
      path:'/',
      element:<Home></Home>
    },
      {
      path:'/blog',
      element:<PrivateRouter>
        <Blog></Blog>
      </PrivateRouter>
    },
    {
      path:'/detail/:detailId',
      element:<PrivateRouter>
        <EstateDetail></EstateDetail>
      </PrivateRouter>,
      loader: () => fetch("../estate.json"),
    },
    {
      path:'/register',
      element:<Register></Register>,
    },
    {
      path:'/login',
      element:<Login></Login>,
    },
    {
      path:'/update',
      element:<PrivateRouter>
        <UpdateProfile></UpdateProfile>
      </PrivateRouter>,
    },
    {
      path: '*', 
      element: <NotFound></NotFound>,
    },
    {
      path: '/map', 
      element: <Map></Map>
    }
 
  ]
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
