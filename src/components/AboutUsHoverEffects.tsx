import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function AboutUsHoverEffects() {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <div className="flex items-center justify-center mt-24">
        <img
          src={"/images/navroz2.jpg"}
          alt="aboutus"
          width={68}
          height={85}
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 mx-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8 sm:mx-4 md:mx-4 lg:mx-24">
        {[
          {
            title: t("rooms"),
            image: "/images/rooms/navrozviproom.jpg",
            link: "/rooms",
          },
          { title: t("pool"), image: "/images/poolnavroz.jpg", link: "/pool" },
          {
            title: t("kitchen"),
            image: "/images/kitchennavruz.jpg",
            link: "/kitchen",
          },
        ].map((item, index) => (
          <NavLink key={index} to={item.link}>
            <div className="relative group w-full h-[300px] md:h-[400px] lg:h-[477px] flex items-center justify-center transition-all ease-in-out duration-700 overflow-hidden mb-4 md:mb-0">
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <span className="text-4xl md:text-6xl lg:text-[90px] text-blue-600 font-medium transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:translate-y-full font-[Zodiak]">
                  {item.title}
                </span>
              </div>
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-full transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100 group-hover:scale-110"
              />
            </div>
          </NavLink>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <NavLink to={"/booking"}>
          <Button className="bg-white text-black transition-all duration-300 ease-out hover:border-white hover:bg-blue-500 border-black border rounded-full font-[Satoshi] flex items-center justify-center group relative w-32  h-12 overflow-hidden px-10">
            <span className="absolute transition-opacity duration-500 ease-out opacity-100 group-hover:opacity-0">
              {t("booknow")}
            </span>
            <ChevronRight className="absolute text-white transition-all duration-500 ease-out transform translate-x-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
          </Button>
        </NavLink>
      </div>
    </div>
  );
}
