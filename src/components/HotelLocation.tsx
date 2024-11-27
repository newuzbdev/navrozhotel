import { CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

interface HotelLocationProps {
  id: number;
  imageUrl: string;
  featured?: boolean;
}

export default function HotelLocation() {
  const { t } = useTranslation();
  const rooms: HotelLocationProps[] = [
    {
      id: 1,
      imageUrl: "/images/location/navrozmainlocation.jpg",
      featured: true,
    },
    {
      id: 2,
      imageUrl: "/images/location/navrozstreet1.jpg",
      featured: true,
    },
    {
      id: 3,
      imageUrl: "/images/location/navrozlocation.jpg",
    },
    {
      id: 4,
      imageUrl: "/images/location/navrozstreet2.jpg",
    },
    {
      id: 5,
      imageUrl: "/images/location/navrozlocation.jpg",
    },
  ];

  return (
    <div className="py-8 mx-4 sm:mx-4 md:mx-4 lg:mx-24">
      <h1
        className="text-[30px] font-normal text-center mb-8 font-[Zodiak] mt-10 sm:text-4xl md:text-7xl lg:text-[48px]"
        style={{ color: "rgba(19, 99, 222, 1)" }}
      >
        {t("hotelLocation")}
      </h1>
      <div className="grid gap-6">
        <div className="grid gap-6 md:grid-cols-2">
          {rooms
            .filter((room) => room.featured)
            .map((room) => (
              <div key={room.id} className="overflow-hidden group">
                <CardContent className="p-0 relative aspect-[4/3]">
                  <img
                    src={room.imageUrl}
                    alt={"Hotellocation"}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-125"
                  />
                </CardContent>
              </div>
            ))}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {rooms
            .filter((room) => !room.featured)
            .map((room) => (
              <div key={room.id} className="overflow-hidden group">
                <CardContent className="p-0 relative aspect-[4/3]">
                  <img
                    src={room.imageUrl}
                    alt={"hotellocation"}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-125"
                  />
                </CardContent>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
