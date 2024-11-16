import { CardContent } from "@/components/ui/card";

interface HotelLocationProps {
  id: number;
  imageUrl: string;
  featured?: boolean;
}

export default function HotelLocation() {
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
    <div className="mx-4 sm:mx-4 md:mx-4 lg:mx-24 py-8">
      <h1
        className="text-[48px] font-normal text-center mb-8 font-[Zodiak] mt-10"
        style={{ color: "rgba(19, 99, 222, 1)" }}
      >
        Mehmonxona joylashuvi
      </h1>
      <div className="grid gap-6">
        {/* Featured rooms */}
        <div className="grid md:grid-cols-2 gap-6">
          {rooms
            .filter((room) => room.featured)
            .map((room) => (
              <div key={room.id} className="group overflow-hidden">
                <CardContent className="p-0 relative aspect-[4/3]">
                  <img
                    src={room.imageUrl}
                    alt={"Hotellocation"}
                    className="object-cover transition-transform group-hover:scale-125 duration-700 w-full h-full"
                  />
                </CardContent>
              </div>
            ))}
        </div>

        {/* Standard rooms */}
        <div className="grid md:grid-cols-3 gap-6">
          {rooms
            .filter((room) => !room.featured)
            .map((room) => (
              <div key={room.id} className="group overflow-hidden">
                <CardContent className="p-0 relative aspect-[4/3]">
                  <img
                    src={room.imageUrl}
                    alt={"hotellocation"}
                    className="object-cover transition-transform group-hover:scale-125 duration-700 w-full h-full"
                  />
                </CardContent>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
