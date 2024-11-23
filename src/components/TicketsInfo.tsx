import { useState } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

export default function TicketsInfo() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const images = [
    "/images/navrozaviakassa.jpg",
    "/images/navrozaviakassa.jpg",
    "/images/navrozair.jpg",
  ];

  return (
    <div className="mx-4 sm:mx-8 md:mx-[120px] pt-10">
      <div className="flex flex-col items-center gap-8">
        <div className="flex items-center justify-center">
          <h1 className="text-[32px] sm:text-4xl md:text-7xl lg:text-[48px] font-[Zodiak] text-blue-500">
            Avia kassa
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <p className="font-[Satoshi] text-[16px] leading-[24px] text-center sm:w-[340px] lg:w-[540px]">
            "Navro'z mehmonxonasi basseyni sizni dam olishga chorlaydi!" Toza va
            shinam muhitda suzishdan bahramand bo'ling, Qulay sharoit va sifatli
            xizmat sizni kutmoqda.
          </p>
        </div>

        <div className="grid w-full h-full gap-4 columns-2">
          <div className="grid grid-cols-2 gap-4">
            {images.slice(0, 2).map((image, index) => (
              <div
                key={index}
                className="relative h-[349px] overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  loading="lazy"
                  src={image}
                  alt={`Ticket office view ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>

          <div
            className="flex items-center justify-center h-[349px] cursor-pointer"
            onClick={() => setSelectedImage(images[2])}
          >
            <img
              src={images[2]}
              loading="lazy"
              alt="Airplane model"
              className="object-cover w-[630px] h-full"
            />
          </div>
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
                  alt="Selected view"
                  className="object-contain w-full h-full"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
