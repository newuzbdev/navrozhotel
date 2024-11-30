import SaunaImages from "@/components/SaunaImages";
import { useTranslation } from "react-i18next";

const slides = [
  {
    image: "/images/navrozsauna.jpg",
  },
];

export default function Sauna() {
  const { t } = useTranslation();
  return (
    <>
      <div className="w-full h-screen overflow-hidden ">
        <img
          src={slides[0].image}
          alt="Navroz Hotel"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 max-w-[100%] px-6 sm:px-12">
          <h2 className="font-['Zodiak'] text-4xl sm:text-6xl md:text-7xl lg:text-[90px] lg:leading-[80px] font-normal tracking-widest">
            {t("sauna")}
          </h2>
        </div>
      </div>
      <div>
        <SaunaImages />
      </div>
    </>
  );
}
