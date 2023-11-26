import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page.jsx";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import Service from "./pages/Service/Service.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import OurTeam from "./pages/OurTeam/OurTeam.jsx";
import SingleTeam from "./pages/SingleTeam/SingleTeam.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/service",
        element: <Service></Service>,
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/ourteam",
        element: <OurTeam></OurTeam>,
      },
      {
        path: "/singleteam",
        element: <SingleTeam></SingleTeam>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
