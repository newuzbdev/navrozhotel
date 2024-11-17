import AboutUs from "@/components/About";
import AboutUsHoverEffects from "@/components/AboutUsHoverEffects";
import ContactUs from "@/components/ContactUs";
import Gallery from "@/components/Gallery";
import HeroSlider from "@/components/HeroSlider";
import HotelLocation from "@/components/HotelLocation";
import Faq from "@/components/Question";
import Roomstypes from "@/components/RoomTypes";
import SecondGallery from "@/components/SecondGallery";


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
