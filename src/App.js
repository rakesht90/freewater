import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Advertise from "./components/Advertise";
import Distribute from "./components/Distribute";
import HallOfFame from "./components/HallOfFame";
import Faq from "./components/Faq";
import ContactUs from "./components/ContactUs";
import Layout from "./components/Layout";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Body />,
      },
      {
        path: "/advertise",
        element: <Advertise />,
      },
      {
        path: "/distribute",
        element: <Distribute />,
      },
      {
        path: "/hall-of-fame",
        element: <HallOfFame />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={appRouter} />;
}
