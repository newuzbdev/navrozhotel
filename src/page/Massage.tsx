import MassageImages from "@/components/MassageImages";
import { useTranslation } from "react-i18next";
import {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const slides = [
  {
    image: "/images/location/navrozmainlocation.jpg",
  },
  {
    image: "/images/navrozreseption.jpg",
  },
  {
    image: "/images/navrozreception2.jpg",
  },
];

export default function Massage() {
  const { t } = useTranslation();
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <Swiper
          cssMode={true}
          mousewheel={true}
          keyboard={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
          className="w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <img
                src={slide.image}
                alt="Navroz Hotel"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black/20" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 max-w-[100%] px-6 sm:px-12">
          <h2 className="font-['Zodiak'] text-4xl sm:text-6xl md:text-7xl lg:text-[90px] lg:leading-[80px] font-normal tracking-widest">
            {t("massage")}
          </h2>
        </div>
      </div>
      <div>
        <MassageImages />
      </div>
    </>
  );
}
