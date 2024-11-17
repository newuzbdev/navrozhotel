import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StandardRoom2 from "@/components/StandartRoomTwo";

const slides = [
  {
    image: "/images/rooms/navrozstandart2.jpg",
  },
  {
    image: "/images/rooms/navrozstandart2bath.jpg",
  },
  {
    image: "/images/rooms/navrozstandart2all.jpg",
  },
];

export default function StandartRoom2() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute w-full h-full"
          >
            <img
              loading="lazy"
              src={slides[currentSlide].image}
              alt="Navroz Hotel"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 max-w-[100%] px-6 sm:px-12">
          <h2 className="font-['Zodiak'] text-4xl sm:text-6xl md:text-7xl lg:text-[90px] lg:leading-[80px] font-normal tracking-widest">
            Ikki kishilik standart
            <p className="pt-6 text-4xl sm:text-4xl md:text-4xl lg:text-[90px] font-[Zodiak]">
              Xona
            </p>
          </h2>
          <p className="font-['Zodiak'] text-lg sm:text-xl md:text-2xl lg:text-[20px] leading-8 sm:leading-10 font-medium py-5">
            Sizning sevimli joyingiz. Bizning oilaviy hikoyamiz.
          </p>
        </div>
      </div>
      <div>
        <StandardRoom2 />
      </div>
    </>
  );
}
