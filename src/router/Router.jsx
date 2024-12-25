import React from "react";

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import MyJobs from "../pages/MyJobs";
import SalaryPage from "../pages/SalaryPage";
import CreateJob from "../pages/CreateJob";
import UpdateJob from "../pages/UpdateJob";
import Login from "../pages/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Banner from "../components/Banner";
import Signup from "../pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Banner />,
      },
      {
        path: "/home",
        element: <Home />,
      },



    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Signup />
  }
]);

export default router;
