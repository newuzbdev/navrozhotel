import StandardRoom3 from "@/components/StandartRoomThree";
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
    image: "/images/standartroom3.jpg",
  },
  {
    image: "/images/rooms/standartthreeroom.jpg",
  },
  {
    image: "/images/rooms/standart3image.jpg",
  },
];

export default function StandartRoom3() {
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
            {t("standartThree")}
            <p className="pt-6 text-4xl sm:text-4xl md:text-4xl lg:text-[90px] font-[Zodiak]">
              {t("room")}
            </p>
          </h2>
          <p className="font-['Zodiak'] text-lg sm:text-xl md:text-2xl lg:text-[20px] leading-8 sm:leading-10 font-medium py-5">
            {t("description")}
          </p>
        </div>
      </div>
      <div>
        <StandardRoom3 />
      </div>
    </>
  );
}
