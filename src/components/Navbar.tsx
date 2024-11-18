import { useEffect, useState } from "react";
import { Globe, MapPin, Phone, Star, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
      } fixed left-0 right-0 z-50 bg-white bg-opacity-20 backdrop-blur-md transition-transform duration-300`}
    >
      <div className="flex flex-wrap items-center justify-between px-4 py-3 mx-24 md:py-2">
        <div className="flex items-center gap-2 md:gap-4 ">
          <span className="items-center hidden gap-1 p-2 text-white bg-blue-500 rounded-full md:p-3 md:flex">
            <Phone size={20} />
            <span className="hidden md:block">+998(50)005-07-68</span>
          </span>
        </div>

        <div className="items-center hidden space-x-4 text-gray-300 md:flex md:space-x-10">
          <p className="text-lg text-white md:text-xl">s i n c e 2008</p>
          <img
            src={"/images/navrozlogo.svg"}
            alt="logo"
            width={70}
            height={40}
          />
          <div className="flex gap-1">
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <MapPin size={20} className="hidden text-white md:block" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Globe size={20} className="hidden text-white md:block" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Tilni ozgartirish</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Russian</DropdownMenuItem>
              <DropdownMenuItem>Uzbek</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to="/booking">
            <Button className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 md:px-7 md:py-6 rounded-full text-[14px] md:text-[16px] hidden md:flex">
              Band qilish
            </Button>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Menu
                size={32}
                className="absolute top-0 right-0 text-white cursor-pointer md:hidden"
              />
            </SheetTrigger>
            <SheetContent className="p-4 text-gray-900 bg-white bg-opacity-90">
              <SheetHeader>
                <SheetTitle className="text-xl font-bold">
                  Navroz Hotel
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
                    <span className="text-gray-900">+998(50)005-07-68</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="text-blue-500" size={20} />
                    <span className="text-gray-900">Bizning manzil</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Globe className="text-blue-500" size={20} />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>Tilni ozgartirish</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>English</DropdownMenuItem>
                        <DropdownMenuItem>Russian</DropdownMenuItem>
                        <DropdownMenuItem>Uzbek</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <span>Til o&apos;zgartirish</span>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="items-center justify-center hidden w-full h-12 border-t border-b md:flex">
        <NavLinks />
      </div>
    </div>
  );
}
