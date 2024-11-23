import { NavLink } from "react-router-dom";

export default function SecondGallery() {
  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {[
        {
          src: "/images/navrozaviakassa.jpg",
          alt: "Aviakassa",
          text: "Aviakassa",
          link: "/ticket",
        },
        {
          src: "/images/navrozmassaj.jpg",
          alt: "Sauna",
          text: "Massaj",
          link: "/massage",
        },
        {
          src: "/images/navrozsauna.jpg",
          alt: "Sauna",
          text: "Sauna",
          link: "/sauna",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="group relative h-[300px] sm:h-[500px] lg:h-[1000px] overflow-hidden hover:z-10 hover:shadow-xl"
        >
          <NavLink key={index} to={item.link}>
            <img
              src={item.src}
              loading="lazy"
              alt={item.alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              className="transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="font-[Zodiac] text-[24px] sm:text-[48px] font-normal leading-[56px] text-white mb-4">
                {item.text}
              </h1>
            </div>

            {index === 1 && (
              <img
                src="/images/part3.svg"
                alt="Decoration"
                style={{
                  width: "68px",
                  height: "85px",
                }}
                className="absolute top-4 right-[250px] z-10 hidden sm:hidden md:hidden lg:flex"
              />
            )}
          </NavLink>
        </div>
      ))}
    </div>
  );
}
