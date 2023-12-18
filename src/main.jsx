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
import FAQ from "./pages/FAQ/FAQ.jsx";
import ServiceDetail1 from "./pages/ServiceDetail1/ServiceDetail1.jsx";
import ServiceDetail2 from "./pages/ServiceDetail2/ServiceDetail2.jsx";
import ServiceDetail3 from "./pages/ServiceDetail3/ServiceDetail3.jsx";
import ServiceDetail4 from "./pages/ServiceDetail4/ServiceDetail4.jsx";
import ServiceDetail5 from "./pages/ServiceDetail5/ServiceDetail5.jsx";
import ServiceDetail6 from "./pages/ServiceDetail6/ServiceDetail6.jsx";
import Contact from "./pages/Contact/Contact.jsx";

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
        path: "/servicedetail1",
        element: <ServiceDetail1></ServiceDetail1>,
      },
      {
        path: "/servicedetail2",
        element: <ServiceDetail2></ServiceDetail2>,
      },
      {
        path: "/servicedetail3",
        element: <ServiceDetail3></ServiceDetail3>,
      },
      {
        path: "/servicedetail4",
        element: <ServiceDetail4></ServiceDetail4>,
      },
      {
        path: "/servicedetail5",
        element: <ServiceDetail5></ServiceDetail5>,
      },
      {
        path: "/servicedetail6",
        element: <ServiceDetail6></ServiceDetail6>,
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
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
