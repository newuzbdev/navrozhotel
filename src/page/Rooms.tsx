import  { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AllRoomTypes from "@/components/AllRoomTypes";

const slides = [
  {
    image: "/images/rooms/navrozviproom.jpg",
  },
  {
    image: "/images/rooms/navrozvip2rooms.jpg",
  },
  {
    image: "/images/rooms/navrozdeluxe.jpg",
  },
];

export default function Rooms() {
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
    enter: (direction:number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    exit: (direction:number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden ">
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
              src={slides[currentSlide].image}
              alt="Navroz Hotel"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 max-w-[100%] px-6 sm:px-12">
          <h2 className="font-['Zodiak'] text-6xl sm:text-6xl md:text-7xl lg:text-[110px] lg:leading-[90px] font-normal tracking-widest">
            Xonalar
          </h2>
          <p className="font-['Zodiak'] text-lg sm:text-xl md:text-2xl lg:text-[20px] leading-8 sm:leading-10 font-medium py-5">
            Sizning sevimli joyingiz. Bizning oilaviy hikoyamiz.
          </p>
        </div>
      </div>
      <div className="mt-10">
        <AllRoomTypes />
      </div>
    </>
  );
}