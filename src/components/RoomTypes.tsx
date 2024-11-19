import {  CardContent } from "@/components/ui/card";

interface Room {
  id: number;
  title: string;
  imageUrl: string;
  size?: string;
  featured?: boolean;
  slug: string;
}

export default function Roomstypes() {
  const rooms: Room[] = [
    {
      id: 1,
      title: "VIP",
      imageUrl: "/images/rooms/navrozviproom.jpg",
      featured: true,
      slug: "vip",
    },
    {
      id: 2,
      title: "VIP bir kishilik",
      imageUrl: "/images/rooms/navrozvip1.jpg",
      featured: true,
      slug: "vipone",
    },
    {
      id: 3,
      title: "VIP ikki kishilik",
      imageUrl: "/images/rooms/navrozvip2rooms.jpg",
      slug: "viptwo",
    },
    
    {
      id: 4,
      title: "Deluxe",
      imageUrl: "/images/rooms/navrozdeluxe.jpg",
      slug: "deluxe",
    },
    {
      id: 5,
      title: "Standart bir kishilik",
      imageUrl: "/images/rooms/navrozstandart1.jpg",
      slug: "standartone",
    },
    {
      id: 6,
      title: "Standart ikki kishilik",
      imageUrl: "/images/rooms/navrozstandart2.jpg",
      slug: "standarttwo",
    },
  
  ];

  return (
    <div className="py-8 mx-auto ">
      <h1
        className="text-4xl font-normal text-center mb-8 font-[Zodiak] mt-10"
        style={{ color: "rgba(19, 99, 222, 1)" }}
      >
        Xona tariflari
      </h1>

      <div className="grid grid-cols-1 gap-6 mx-4 md:grid-cols-2 sm:mx-4 md:mx-4 lg:mx-24">
        {rooms.slice(0, 2).map((room) => (
            <a href={`/${room.slug}`} key={room.id}>
              <div className="overflow-hidden cursor-pointer group">
                <CardContent className="p-0 relative aspect-[4/3]">
                  <img
                    src={room.imageUrl}
                    alt={room.title}
                    className="absolute object-cover w-full h-full transition-transform duration-700 group-hover:scale-125"
                  />
                  <div className="absolute inset-0">
                    <div className="absolute bottom-4 left-4">
                      <h3
                        className="text-xl text-white px-2 py-1 font-[Satoshi]"
                        style={{ background: "rgba(11, 11, 11, 0.5)" }}
                      >
                        {room.title}
                      </h3>
                    </div>
                  </div>
                </CardContent>
              </div>
            </a>
          ))}
      </div>

      {/* Remaining Rooms in 4 Columns */}
      <div className="grid grid-cols-1 gap-6 mx-4 mt-8 sm:grid-cols-2 md:grid-cols-4 sm:mx-4 md:mx-4 lg:mx-24">
        {rooms.slice(2).map((room) => (
            <a href={`/${room.slug}`} key={room.id}>
              <div className="overflow-hidden cursor-pointer group">
                <CardContent className="p-0 relative aspect-[4/3]">
                  <img
                    src={room.imageUrl}
                    alt={room.title}
                    className="absolute object-cover w-full h-full transition-transform duration-700 group-hover:scale-125"
                  />
                  <div className="absolute inset-0">
                    <div className="absolute bottom-4 left-4">
                      <h3
                        className="text-xl py-1 px-2 text-white font-[Satoshi]"
                        style={{ background: "rgba(11, 11, 11, 0.5)" }}
                      >
                        {room.title}
                      </h3>
                      {room.size && (
                        <p className="text-sm text-white/80">{room.size}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </div>
            </a>
          ))}
      </div>
    </div>
  );
}