import HeroSlider from "@/components/HeroSlider";
import React from "react";
const AboutUs = React.lazy(() => import("@/components/About"));
const Gallery = React.lazy(() => import("@/components/Gallery"));
const AboutUsHoverEffects = React.lazy(
  () => import("@/components/AboutUsHoverEffects")
);
const SecondGallery = React.lazy(() => import("@/components/SecondGallery"));
const Roomstypes = React.lazy(() => import("@/components/RoomTypes"));
const Faq = React.lazy(() => import("@/components/Question"));
const HotelLocation = React.lazy(() => import("@/components/HotelLocation"));
const ContactUs = React.lazy(() => import("@/components/ContactUs"));

export default function Home() {
  return (
    <>
      <HeroSlider />
      <div className="my-10">
        <AboutUs />
        <AboutUsHoverEffects />
      </div>
      <Gallery />
      <SecondGallery />
      <div className=" my-10">
        <Roomstypes />
        <Faq />
        <HotelLocation />
        <ContactUs />
      </div>
    </>
  );
}
