import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

const slides = [
  {
    image: "/images/location/navrozmainlocation.jpg",
  },
  {
    image: "/images/navrozslider3.jpg",
  },
  {
    image: "/images/navrozslider.jpg",
  },
];

export default function Booking() {
  const { t } = useTranslation();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [roomType, setRoomType] = useState("standartbirkishilik");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const { toast } = useToast();

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!phoneNumber || !checkIn) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all required fields",
      });
      return;
    }

    const botToken = "7583278821:AAHXt-z1Krs7H6TUUzpU_LOWRFiL_-OmKdk";
    const chatId = "6492944610";
    const text = `Yangi xabar
    
Telefon raqami: +998${phoneNumber}
Kelish: ${checkIn}
Xona turlari: ${roomType}
Odamlar soni: ${adults}
Bolalar: ${children}`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: text,
          }),
        }
      );
      if (response.ok) {
        toast({
          variant: "success",
          title: "Muvaffaqiyatli",
          description: "So'rov muvaffaqiyatli yuborildi!",
        });
        setPhoneNumber("");
        setCheckIn("");
        setRoomType("standartbirkishilik");
        setAdults(1);
        setChildren(0);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Soʻrovini yuborib boʻlmadi",
      });
    }
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
    <div className="relative w-full h-screen overflow-hidden" id="home">
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
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 max-w-[100%] px-6 sm:px-12">
        <h2 className="font-['Zodiak'] text-4xl sm:text-6xl md:text-7xl lg:text-[80px] lg:leading-[90px] font-normal tracking-widest mb-8">
          {t("roomBooking")}
        </h2>

        <div className="w-full max-w-2xl p-5 space-y-8 rounded-lg bg-white/90">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="flex flex-col ">
              <label className="text-xl font-medium text-gray-700">
                {t("enterYourPhoneNumber")}
              </label>

              <div className="relative">
                <span className="absolute text-gray-500 transform -translate-y-1/2 left-4 top-1/2">
                  +998
                </span>
                <input
                  type="number"
                  placeholder="99 123 45 67"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  className="w-full px-4 py-4 pl-16 text-gray-900 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="flex flex-col ">
                <label className="text-xl font-medium text-gray-700">
                  {t("comingDate")}
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  required
                  className="w-full px-4 py-4 text-gray-900 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col ">
                <label className="text-xl font-medium text-gray-700">
                  {t("roomTypes")}
                </label>
                <select
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  required
                  className="w-full px-4 py-4 text-gray-900 bg-white border border-gray-300 rounded appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="standart bir kishilik">
                    {t("standartOne")}
                  </option>
                  <option value="Standart ikki kishilik">
                    {t("standartTwo")}
                  </option>
                  <option value="Standart uch kishilik">
                    {t("standartThree")}
                  </option>
                  <option value="Standart tor't kishilik">
                    {t("standartFour")}
                  </option>
                  <option value="deluxe">Deluxe</option>
                  <option value="vip">Vip</option>
                  <option value="vip bir kishilik">{t("vipOne")}</option>
                  <option value="vip ikki kishilik">{t("vipTwo")}</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="flex flex-col space-y-2">
                <label className="text-xl font-medium text-gray-700">
                  {t("adults")}
                </label>

                <select
                  value={adults}
                  onChange={(e) => setAdults(Number(e.target.value))}
                  required
                  className="w-full px-4 py-4 text-gray-900 bg-white border border-gray-300 rounded appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {[1, 2, 3, 4].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-xl font-medium text-gray-700">
                  {t("children")}
                </label>
                <select
                  value={children}
                  onChange={(e) => setChildren(Number(e.target.value))}
                  required
                  className="w-full px-4 py-4 text-gray-900 bg-white border border-gray-300 rounded appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {[0, 1, 2, 3].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <Button
                type="submit"
                className="bg-white text-black transition-all duration-300 ease-out border-black hover:border-white border rounded-full font-[Satoshi] flex items-center justify-center group relative w-32  h-12 overflow-hidden px-10 hover:bg-blue-400"
              >
                <span className="absolute transition-opacity duration-500 ease-out opacity-100 group-hover:opacity-0">
                  {t("booknow")}
                </span>
                <ChevronRight className="absolute text-white transition-all duration-500 ease-out transform translate-x-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
