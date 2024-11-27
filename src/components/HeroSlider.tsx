import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
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

export default function HeroSlider() {
  const { t } = useTranslation();
  return (
    <div className="relative w-full h-screen overflow-hidden" id="home">
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
        <h2 className="font-['Zodiak'] text-4xl sm:text-6xl md:text-7xl lg:text-[100px] lg:leading-[90px] font-normal tracking-widest">
          NAVRO'Z
          <p className="pt-3 text-4xl sm:text-6xl md:text-7xl lg:text-[100px]">
            Hotel
          </p>
        </h2>
        <p className="font-['Zodiak'] text-lg sm:text-xl md:text-2xl lg:text-[20px] leading-8 sm:leading-10 font-medium py-5">
          {t("description")}
        </p>
      </div>
    </div>
  );
}
