import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "../Footer";

export const Layout = () => {
  return (
    <div className="">
      {/* <Sidebar /> */}
      <div className="">
        <Navbar />
        <>
          <Outlet />
        </>
        <Footer/>

      </div>
    </div>
  );
};
