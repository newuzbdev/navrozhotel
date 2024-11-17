import { Layout } from "@/components/layout/Layout";
import Deluxe from "@/page/Deluxe";
import Home from "@/page/Home";
import Rooms from "@/page/Rooms";
import Vip from "@/page/Vip";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
      {
        path: "/deluxe",
        element: <Deluxe />,
      },
    ],
  },
]);

export default router;
