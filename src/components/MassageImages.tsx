import { useState } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

export default function MassageImages() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const images = ["/images/navrozmassaj.jpg"];

  return (
    <div className="mx-4 sm:mx-8 md:mx-[120px] pt-10 my-[86px]">
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-center">
          <h1 className="text-[32px] sm:text-4xl md:text-7xl lg:text-[48px] font-[Zodiak] text-blue-500">
            Massaj
          </h1>
        </div>
        <div className="flex items-center justify-center">
          {" "}
          <p className="font-[Satoshi] text-[16px] leading-[24px] text-center sm:w-[340px] lg:w-[540px]">
            "Navro'z mehmonxonasi massaj xizmati sizni dam olish va
            tetiklanishga chorlaydi! Tinch va shinam muhitda professional
            massajdan bahramand bo'ling. Qulay sharoit va sifatli xizmat sizni
            kutmoqda."
          </p>
        </div>

        <div className="grid grid-cols-1 ">
          <div className="md:col-span-6 w-full relative h-[420px] sm:h-[500px] lg:h-[600px] xl:h-[618px]">
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
