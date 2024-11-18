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
        <Card className="w-full">
          <CardContent className="w-full h-[42px] sm:h-[32px] md:h-[36px] lg:h-[42px]"></CardContent>
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
      <div className="flex flex-col-reverse items-center justify-end gap-4 px-6 py-4 md:flex-row sm:mt-10 md:pt-10 lg:pt-10">
        <div className="flex items-center order-2 w-full gap-2 p-3 border rounded-md shadow-md md:max-w-md md:mt-10 md:order-1">
          <input
            type="checkbox"
            className="w-6 h-6 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <span className="text-gray-700">Men robot emasman</span>
          <div className="flex items-center ml-auto">
            <img
              src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
              alt="captcha"
              width={20}
              height={20}
              className="w-10 h-10"
            />
            <span className="ml-1 text-xs text-gray-400">reCAPTCHA</span>
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