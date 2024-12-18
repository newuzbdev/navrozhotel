import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const slides = [
  {
    image: "/images/aboutimage.jpg",
  },
  {
    image: "/images/poolnavroz.jpg",
  },
  {
    image: "/images/pollslider.jpg",
  },
];

export default function AboutUs() {
  const { t } = useTranslation();
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
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    exit: (direction: number) => ({
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
    <div className="relative w-full overflow-hidden" id="aboutus">
      <div className="flex flex-col items-center p-8 space-y-4 text-center">
        <img
          src={"/images/aboutus1.svg"}
          alt="aboutus"
          loading="lazy"
          width={68}
          height={85}
          className="mb-4 transition-transform duration-300 hover:scale-105"
        />
        <h1 className="text-blue-500 font-[Zodiak] text-[48px]">
          {t("aboutus")}
        </h1>
        <p className="text-black sm:w-[540px] lg:w-[840px] leading-6 ">
          {t("aboutusdesc")}
        </p>
        <a href="/booking">
          <Button className="bg-white text-black transition-all duration-300 ease-out hover:border-white hover:bg-blue-500 border-black border rounded-full font-[Satoshi] flex items-center justify-center group relative w-32  h-12 overflow-hidden px-10">
            <span className="absolute transition-opacity duration-500 ease-out opacity-100 group-hover:opacity-0">
              {t("booknow")}
            </span>
            <ChevronRight className="absolute text-white transition-all duration-500 ease-out transform translate-x-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
          </Button>
        </a>
      </div>

      <div className="relative w-full h-[690px]">
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
              className="object-cover w-full h-full"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
