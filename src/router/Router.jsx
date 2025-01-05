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
import AboutPage from "../pages/AboutPage";

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
        path: "/jobs",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutPage />
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />
      }

    ],
  },

]);

export default router;
