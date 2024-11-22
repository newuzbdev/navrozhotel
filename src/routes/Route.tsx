import { Layout } from "@/components/layout/Layout";
import Booking from "@/page/Booking";
import Deluxe from "@/page/Deluxe";
import Home from "@/page/Home";
import Kitchen from "@/page/Kitchen";
import Pool from "@/page/Pool";
import Rooms from "@/page/Rooms";
import StandartRoomOne from "@/page/StandartOne";
import StandartRoom3 from "@/page/StandartThree";
import StandartRoom2 from "@/page/StandartTwo";
import Vip from "@/page/Vip";
import VipOne from "@/page/VipOne";
import VipTwo from "@/page/VipTwo";
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
        path: "/vipone",
        element: <VipOne />,
      },
      {
        path: "/viptwo",
        element: <VipTwo />,
      },
      {
        path: "/deluxe",
        element: <Deluxe />,
      },
      {
        path: "/standartone",
        element: <StandartRoomOne />,
      },
      {
        path: "/standarttwo",
        element: <StandartRoom2 />,
      },
      {
        path: "/standartthree",
        element: <StandartRoom3 />,
      },
      {
        path: "/booking",
        element: <Booking />,
      },
      {
        path: "/pool",
        element: <Pool />,
      },
      {
        path: "/kitchen",
        element: <Kitchen />,
      }
    ],
  },
]);

export default router;
