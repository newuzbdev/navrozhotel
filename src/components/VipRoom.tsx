import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "./ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import {
  Droplets,
  Refrigerator,
  Coffee,
  Tv,
  Bath,
  Footprints,
  Scissors,
  Car,
  Wifi,
  Milk,
  ChevronRight,
  ShowerHead,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function VipRoom() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const images = [
    "/images/rooms/navrozviproom.jpg",
    "/images/rooms/navrozvipall1.jpg",
    "/images/rooms/navrozvipbaths.jpg",
    "/images/rooms/navrozviproom.jpg",
    "/images/rooms/navrozvipall1.jpg",
  ];

  const amenities = {
    roomFeatures: [
      [
        { icon: <Bath size={20} />, text: "Dush" },
        {
          icon: (
            <img src="/images/fen.svg" width={20} height={20} alt="joy namoz" />
          ),
          text: "Fen",
        },
        { icon: <Droplets size={20} />, text: "Issiq suv" },
      ],
      [
        { icon: <Refrigerator size={20} />, text: "Muzlatgich" },
        { icon: <Coffee size={20} />, text: "Nonushta" },
        {
          icon: (
            <img
              src="/images/joynamoz.svg"
              width={20}
              height={20}
              alt="joy namoz"
            />
          ),
          text: "Joy namoz",
        },
      ],
      [
        { icon: <Tv size={20} />, text: "Televizor" },
        {
          icon: (
            <img
              src="/images/rooms/HOTEL/towel1.jpg"
              width={20}
              height={20}
              alt="Sochiqlar"
            />
          ),
          text: "Sochiqlar",
        },
        { icon: <Footprints size={20} />, text: "Shippaklar" },
      ],
      [
        { icon: <Scissors size={20} />, text: "Saqol oladigan nabor" },
        { icon: <Car size={20} />, text: "Taqsi chaqirib berish" },
        { icon: <Wifi size={20} />, text: "Wi-fi" },
      ],
      [
        {
          icon: (
            <img
              src="/images/HOTEL/shkaf.jpg"
              width={20}
              height={20}
              alt="shkaf"
            />
          ),
          text: "Shkaf",
        },
        { icon: <Milk size={20} />, text: "Ichimlik suvi" },
        {
          icon: (
            <img
              src="/images/HOTEL/halat.jpg"
              width={20}
              height={20}
              alt="xalat"
            />
          ),
          text: "Xalat",
        },
      ],
      [
        { icon: <ShowerHead size={20} />, text: "Tahorat olish" },
        { icon: <Coffee size={20} />, text: "Coffee tea" },
      ],
    ],
  };

  return (
    <div className="mx-4 sm:mx-8 md:mx-[120px] pt-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-[32px]">Vip</h1>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {images.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="relative h-[300px] overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    loading="lazy"
                    src={image}
                    alt={`Room view ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-6 relative h-[420px] sm:h-[500px] lg:h-[600px] xl:h-[618px]">
            <img
              src={images[0]}
              loading="lazy"
              alt="Main room view"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                cursor: "pointer",
              }}
              onClick={() => setSelectedImage(images[0])}
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-between mt-4 sm:flex-row">
          <p
            className="text-3xl font-medium sm:text-3xl"
            style={{ color: "rgba(19, 99, 222, 1)" }}
          >
            660 000 000 so'm{" "}
            <span className="text-black text-base font-[Satoshi]">
              bir kecha
            </span>
          </p>
          <Link to="/booking">
            <Button className="bg-white text-black transition-all duration-300 ease-out hover:border-white hover:bg-blue-500 border-black border rounded-full font-[Satoshi] flex items-center justify-center group relative w-full sm:w-32 h-12 overflow-hidden px-16">
              <span className="absolute transition-opacity duration-500 ease-out opacity-100 group-hover:opacity-0">
                Band qilish
              </span>
              <ChevronRight className="absolute text-white transition-all duration-500 ease-out transform translate-x-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
            </Button>
          </Link>
        </div>

        <Dialog
          open={!!selectedImage}
          onOpenChange={() => setSelectedImage(null)}
        >
          <DialogTitle></DialogTitle>
          <DialogContent className="max-w-[90vw] sm:max-w-[69vw]">
            {selectedImage && (
              <div className="relative w-full h-[80vh]">
                <img
                  src={selectedImage}
                  loading="lazy"
                  alt="Selected room view"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
        <div className="space-y-3">
          <h3 className="text-3xl font-medium">
            Sizni qanda kulayliklar kutyabdi
          </h3>
          <div className="flex flex-col items-start justify-start gap-20 py-4 pr-20 sm:items-center md:flex-row">
            {amenities.roomFeatures.map((group, groupIndex) => (
              <ul key={groupIndex} className="space-y-4 ">
                {group.map((item, index) => (
                  <li key={index} className="flex items-center gap-1">
                    {item.icon}
                    <span className="font-[Satoshi]">{item.text}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
