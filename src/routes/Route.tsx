import { Layout } from "@/components/layout/Layout";
import Booking from "@/page/Booking";
import Deluxe from "@/page/Deluxe";
import Home from "@/page/Home";
import Kitchen from "@/page/Kitchen";
import Massage from "@/page/Massage";
import Pool from "@/page/Pool";
import Rooms from "@/page/Rooms";
import Sauna from "@/page/Sauna";
import StandartRoomOne from "@/page/StandartOne";
import StandartRoom2 from "@/page/StandartTwo";
import Ticket from "@/page/Ticket";
import Vip from "@/page/Vip";
import VipOne from "@/page/VipOne";
import VipTwo from "@/page/VipTwo";
import { createBrowserRouter } from "react-router-dom";
import StandartRoom4 from "@/page/StandartFour";
import StandartRoom3 from "@/page/StandartThree";

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
        path: "/standartfour",
        element: <StandartRoom4 />,
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
      },
      {
        path: "/massage",
        element: <Massage />,
      },
      {
        path: "/ticket",
        element: <Ticket />,
      },
      {
        path: "/sauna",
        element: <Sauna />,
      },
    ],
  },
]);

export default router;
