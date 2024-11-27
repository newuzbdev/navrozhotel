import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export default function AllRoomTypes() {
  const { t } = useTranslation();

  const rooms = [
    {
      title: t("standartOne"),
      image: "/images/rooms/navrozstandart1.jpg",
      slug: "standartone",
    },
    {
      title: t("standartTwo"),
      image: "/images/rooms/navrozstandart2.jpg",
      slug: "standarttwo",
    },
    {
      title: t("standartThree"),
      image: "/images/rooms/navrozstandart3.jpg",
      slug: "standartthree",
    },
    {
      title: "Deluxe",
      image: "/images/rooms/navrozdeluxe.jpg",
      slug: "deluxe",
    },
    { title: "Vip", image: "/images/rooms/navrozviproom.jpg", slug: "vip" },
    {
      title: t("vipOne"),
      image: "/images/rooms/navrozvip1.jpg",
      slug: "vipone",
    },

    {
      title: t("vipTwo"),
      image: "/images/rooms/navrozvip2rooms.jpg",
      slug: "viptwo",
    },
  ];

  return (
    <main className="min-h-screen px-4 py-12 mx-4 sm:mx-4 md:mx-4 lg:mx-24">
      <header className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal font-[Zodiak]">
          {t("roomTypes")}
        </h1>
      </header>
      <div className="grid gap-16 md:gap-24 ">
        {rooms.map((room, index) => (
          <section
            key={room.title}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center`}
          >
            <div className="w-full md:w-1/2 relative aspect-[3/2] mb-8 md:mb-0">
              <div className="absolute inset-0"></div>
              <img
                src={room.image}
                alt={room.title}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col items-center justify-center w-full text-center md:w-1/2 md:px-8">
              <NavLink to={`/room/${room.slug}`}>
                <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4 font-medium font-[Zodiak] cursor-pointer">
                  {room.title}
                </h2>
              </NavLink>
              <NavLink to={`/${room.slug}`}>
                <Button className="bg-white text-black transition-all duration-300 ease-out hover:border-white hover:bg-blue-500 border-black border rounded-full font-[Satoshi] flex items-center justify-center group relative w-32  h-12 overflow-hidden px-10">
                  <span className="absolute transition-opacity duration-500 ease-out opacity-100 group-hover:opacity-0">
                    {t("booknow")}
                  </span>
                  <ChevronRight className="absolute text-white transition-all duration-500 ease-out transform translate-x-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
                </Button>
              </NavLink>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
