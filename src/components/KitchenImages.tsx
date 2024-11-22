import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "./ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function KitchenImages() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const images = [
    "/images/kitchen.jpg",
    "/images/kitchen2.jpg",
    "/images/kitchen3.jpg",
    "/images/kitchennavruz.jpg",
    "/images/kitchen.jpg",
  ];

  return (
    <div className="mx-4 sm:mx-8 md:mx-[120px] pt-10">
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-center">
          <h1 className="text-[32px] sm:text-4xl md:text-7xl lg:text-[48px] font-[Zodiak] text-blue-500">
            Oshxona
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <p className="font-[Satoshi] text-[16px] leading-[24px] text-center text-black sm:w-[340px] lg:w-[540px]">
            Navro'z mehmonxonasi oshxonasi sizni dam olishga chorlaydi! Toza va
            shinam muhitda taom zavqidan bahramand bo'ling. Qulay sharoit va
            sifatli xizmat sizni kutmoqda.
          </p>
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

        <div className="flex flex-col items-center justify-center mt-4 sm:flex-row">
          <NavLink to={"/booking"}>
            <Button className="bg-white text-black transition-all duration-300 ease-out border-blue-500 hover:bg-blue-500  border rounded-full font-[Satoshi] flex items-center justify-center group relative w-full sm:w-32 h-12 overflow-hidden px-16">
              <span className="absolute text-blue-500 transition-opacity duration-500 ease-out opacity-100 group-hover:opacity-0">
                Band qilish
              </span>
              <ChevronRight className="absolute text-white transition-all duration-500 ease-out transform translate-x-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
            </Button>
          </NavLink>
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
      </div>
    </div>
  );
}
