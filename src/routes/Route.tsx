// import { Layout } from "@/components/layout/Layout";
import Home from "@/page/Home";
import Vip from "@/page/Vip";
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
        path: "/vip",
        element: <Vip />,
      },
    ],
  },
]);

export default router;
