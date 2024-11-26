import { useEffect, useState } from "react";
import { MapPin, Phone, Star, Menu } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export default function Navbar() {
  const location = useLocation();
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScrollToAboutUs = () => {
    const aboutUsSection = document.getElementById("aboutus");
    aboutUsSection?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToContactUs = () => {
    const contactUsSection = document.getElementById("contactus");
    contactUsSection?.scrollIntoView({ behavior: "smooth" });
  };

  const handleMapClick = () => {
    window.open(
      "https://www.google.com/maps/dir/?api=1&destination=41.554849,60.627559",
      "_blank"
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsNavbarVisible(window.scrollY < lastScrollY);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const NavLinks = () => (
    <nav className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
      {[
        { href: "/", label: "Asosiy" },
        { href: "/rooms", label: "Xonalar" },
        {
          href: "#contactus",
          label: "Bog'lanish",
          onClick: handleScrollToContactUs,
        },
        {
          href: "#aboutus",
          label: "Biz haqimizda",
          onClick: handleScrollToAboutUs,
        },
      ].map((link) => (
        <Link
          key={link.href}
          to={link.href}
          onClick={link.onClick}
          className={`text-[16px] md:text-[20px] text-white font-medium relative ${
            location.pathname === link.href ? "after:w-full" : ""
          } hover:text-white after:content-[''] after:absolute after:bottom-[-16px] after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-12`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <div
      className={`${
        isNavbarVisible ? "top-0" : "-top-[175px]"
      } fixed left-0 right-0 z-50 transition-transform duration-300 lg:bg-white lg:bg-opacity-20 lg:backdrop-blur-md`}
    >
      <div className="flex flex-wrap items-center justify-between px-4 py-3 mx-4 lg:mx-24 md:py-2">
        <div className="items-center hidden lg:flex lg:gap-4">
          <span className="items-center hidden gap-1 p-2 text-white bg-blue-500 rounded-full lg:p-3 lg:flex">
            <Phone size={20} />
            <span className="hidden lg:block">+998 68 228 49 11</span>
          </span>
        </div>

        <div className="items-center hidden space-x-4 text-gray-300 lg:flex lg:space-x-10">
          <p className="text-base white text- lg:text-xl">2 0 0 8</p>
          <NavLink to={"/"}>
            <img
              src={"/images/navrozlogo.svg"}
              alt="logo"
              width={70}
              height={40}
            />
          </NavLink>
          <div className="flex gap-2">
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
          </div>
        </div>

        <div className="flex items-center gap-2 lg:gap-4">
          <MapPin
            size={20}
            className="hidden text-white cursor-pointer lg:block"
            onClick={handleMapClick}
          />
          <Link to="/booking" className="hidden lg:block">
            <Button className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 lg:px-7 lg:py-6 rounded-full text-[14px] lg:text-[16px] hidden lg:flex">
              Band qilish
            </Button>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Menu
                size={32}
                className="absolute text-white cursor-pointer lg:hidden top-2 right-2"
              />
            </SheetTrigger>
            <SheetContent className="p-4 text-gray-900 bg-white bg-opacity-90">
              <SheetHeader>
                <SheetTitle className="text-xl font-bold">
                  Navro'z Hotel
                </SheetTitle>
              </SheetHeader>
              <div className="mt-4 space-y-4">
                <nav className="flex flex-col items-start gap-4">
                  {[
                    { href: "/", label: "Asosiy" },
                    { href: "/rooms", label: "Xonalar" },
                    { href: "/booking", label: "Bog'lanish" },
                    {
                      href: "#aboutus",
                      label: "Biz haqimizda",
                      onClick: handleScrollToAboutUs,
                    },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={link.onClick}
                      className={`text-[16px] text-black font-medium relative ${
                        location.pathname === link.href ? "after:w-full" : ""
                      } hover:text-black after:content-[''] after:absolute after:bottom-[-16px] after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-12`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="flex flex-col items-start gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <Phone className="text-blue-500" size={20} />
                    <span className="text-gray-900">+998 68 228 49 11</span>
                  </div>
                  <div
                    className="flex items-center gap-2 hover:cursor-pointer"
                    onClick={handleMapClick}
                  >
                    <MapPin
                      className="text-blue-500 cursor-pointer"
                      size={20}
                    />
                    <span className="text-gray-900">Bizning manzil</span>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="items-center justify-center hidden w-full h-12 border-t border-b lg:flex">
        <NavLinks />
      </div>
    </div>
  );
}
