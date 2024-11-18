import { Link } from "react-router-dom";
import { MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-200">
      <div className="w-full max-w-screen-xl p-4 mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-8 pt-3">
          <div>
            <h2
              className="mb-6 text-sm font-semibold text-blue-600 uppercase"
              id="#"
            >
              Asosiy
            </h2>
          </div>
          <div>
            <Link to="/rooms">
              <h2 className="mb-6 text-sm font-semibold text-blue-600 uppercase">
                Xonalar
              </h2>
            </Link>
          </div>
          <div>
            <h2
              className="mb-6 text-sm font-semibold text-blue-600 uppercase"
              id="contactus"
            >
              Boglanish
            </h2>
          </div>
          <div>
            <h2
              className="mb-6 text-sm font-semibold text-blue-600 uppercase"
              id="aboutus"
            >
              Biz haqimizda
            </h2>
          </div>
        </div>
        <div className="py-6">
          <div className="flex flex-col items-center justify-center space-y-2 md:flex-row md:space-x-10 md:space-y-0">
            <div className="flex gap-2 text-blue-600">
              <Phone className="text-blue-500" size={20} /> +998(50) 005-07-68
            </div>
            <div className="flex space-x-2 text-blue-600">
              <MapPin className="text-blue-500" size={20} />
              Urganch sh. Nuri hayot 69
            </div>
            <div className="text-blue-600">Jamoladdin0831@gmail.com</div>
          </div>
          <div className="flex justify-center mt-4 space-x-5">
            <a href="#" className="text-red-700 hover:text-red-700">
              <img src={"/images/instagram.svg"} alt="instagram" />
            </a>
            <a href="#" className="text-blue-900 hover:text-gray-700">
              <img src={"/images/telegram.svg"} alt="telegram" />
            </a>
          </div>
        </div>
        <div className="px-4 py-2 md:flex md:items-center md:justify-center">
          <div className="flex flex-col items-center md:flex-row">
            <span className="mb-2 text-sm text-center md:mb-0 md:mr-2">
              © Copyright 2024 - Mbos
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/images/Mboslogo.png"
            alt="Logo"
            className="h-12"
            width={100}
            height={100}
          />
        </div>
      </div>
    </footer>
  );
}
