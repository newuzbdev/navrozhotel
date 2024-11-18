import { Card, CardContent } from "./ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
export default function ContactUs() {
  return (
    <div className="p-4 mx-4 my-10 sm:mx-4 md:mx-4 lg:mx-24" id="contactus">
      <div className="flex items-center justify-center gap-10 my-3 ">
        <h1
          className="text-[28px] leading-[56px] font-normal font-[Zodiak] sm:2xl md:2xl lg:text-6xl"
          style={{ color: "rgba(19, 99, 222, 1)" }}
        >
          Biz Bilan Bog'lanish
        </h1>
      </div>

      <p className="mb-8 text-base text-center text-gray-700 ">
        Savollaringiz bormi yoki yordam kerakmi? Biz bilan bog'laning - biz
        yordam berishga tayyormiz!
      </p>
      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
        <Card className="w-full h-[420px]">
          <CardContent className="w-full h-full p-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2946.8876416333584!2d60.62755899999999!3d41.554849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDMzJzE3LjUiTiA2MMKwMzcnMzkuMiJF!5e0!3m2!1sen!2s!4v1625136234567!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </CardContent>
        </Card>

        <>
          <CardContent className="h-[423px] sm:h-[380px] md:h-[400px] lg:h-[423px]">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                <div>
                  <Input
                    className="w-full h-[56px] sm:h-[60px] md:h-[65px] lg:h-[70px] placeholder:text-gray-400 placeholder:text-xl"
                    id="firstName"
                    name="firstName"
                    placeholder="Isim"
                    required
                  />
                </div>
                <div>
                  <Input
                    className="w-full h-[56px] sm:h-[60px] md:h-[65px] lg:h-[76px] placeholder:text-gray-400 placeholder:text-xl"
                    id="lastName"
                    name="lastName"
                    placeholder="Familya"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="flex">
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full h-[56px] rounded sm:h-20 md:h-20 lg:h-24 placeholder:text-gray-400 placeholder:text-xl"
                    placeholder="+998"
                    required
                  />
                </div>
              </div>

              <div className="flex">
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Xabar"
                  className="h-[105px] placeholder:text-gray-400 placeholder:text-xl lg:h-[205px] md:h-[150px] "
                />
              </div>
            </form>
          </CardContent>
        </>
      </div>
      <div className="flex flex-col-reverse items-center justify-end gap-4 px-6 py-4 space-x-48 md:flex-row sm:mt-10 md:pt-10 lg:pt-0">
        <div className="flex items-center order-2 gap-6 p-3 border rounded-md md:max-w-md md:order-1">
          <input
            type="checkbox"
            className="w-6 h-6 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <span className="text-gray-700">Men robot emasman</span>
          <div className="flex items-center ">
            <img
              src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
              alt="captcha"
              width={20}
              height={20}
              className="w-10 h-10"
            />
            <span className="text-xs text-gray-400 ">reCAPTCHA</span>
          </div>
        </div>
        <Button className="bg-white text-black transition-all duration-300 ease-out hover:border-white hover:bg-blue-500 border-black border rounded-full font-[Satoshi] flex items-center justify-center group relative w-32 h-12 overflow-hidden px-10 order-1 md:order-2">
          <span className="absolute transition-opacity duration-500 ease-out opacity-100 group-hover:opacity-0">
            Yuborish
          </span>
          <ChevronRight className="absolute text-white transition-all duration-500 ease-out transform translate-x-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
        </Button>
      </div>
    </div>
  );
}