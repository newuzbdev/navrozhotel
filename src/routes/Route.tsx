// import { Layout } from "@/components/layout/Layout";
import Home from "@/page/Home";
import Rooms from "@/page/Rooms";
import React from "react";
const Vip = React.lazy(() => import("@/components/VipRoom"));
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/rooms",
        element: <Rooms />,
      },
      {
        path: "/vip",
        element: <Vip />,
      },
    ],
  },
]);

export default router;
