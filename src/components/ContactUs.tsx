import { Card, CardContent } from "./ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ContactUs() {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [isRobot, setIsRobot] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const botToken = "7583278821:AAHXt-z1Krs7H6TUUzpU_LOWRFiL_-OmKdk";
    const chatId = "6492944610";

    const messageText = `
Yangi xabar:
👤 Ism: ${formData.firstName}
👥 Familya: ${formData.lastName}
📱 Telefon: ${formData.phone}
💬 Xabar: ${formData.message}
    `;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: messageText,
            parse_mode: "HTML",
          }),
        }
      );

      if (response.ok) {
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          message: "",
        });
        setIsRobot(false);
        toast({
          variant: "success",
          title: "Muvaffaqiyatli yuborildi!",
          description: "Sizning xabaringiz qabul qilindi.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Xatolik!",
        description: "Xabar yuborishda xatolik yuz berdi.",
      });
    }
  };

  return (
    <div className="p-4 mx-4 my-10 sm:mx-4 md:mx-4 lg:mx-24" id="contactus">
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

        <CardContent className="h-[423px] sm:h-[380px] md:h-[400px] lg:h-[423px] mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
              <div>
                <Input
                  className="w-full h-[56px] sm:h-[60px] md:h-[65px] lg:h-[70px] placeholder:text-gray-400 placeholder:text-xl"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  id="firstName"
                  name="firstName"
                  placeholder={t("name")}
                  required
                />
              </div>
              <div>
                <Input
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full h-[56px] sm:h-[60px] md:h-[65px] lg:h-[70px] placeholder:text-gray-400 placeholder:text-xl"
                  id="lastName"
                  name="lastName"
                  placeholder={t("familyName")}
                />
              </div>
            </div>

            <div className="relative">
              <span className="absolute text-gray-500 transform -translate-y-1/2 left-4 top-1/2">
                +998
              </span>
              <Input
                type="tel"
                name="phone"
                pattern="[0-9]{2}[0-9]{3}[0-9]{2}[0-9]{2}"
                placeholder="99 123 45 67"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full h-[56px] sm:h-[60px] md:h-[65px] lg:h-[70px] pl-16 text-gray-900 placeholder:text-gray-400 placeholder:text-base"
              />
            </div>

            <div className="flex">
              <Textarea
                value={formData.message}
                onChange={handleInputChange}
                id="message"
                name="message"
                rows={4}
                required
                placeholder={t("message")}
                className="h-[105px] placeholder:text-gray-400 placeholder:text-xl lg:h-[225px] md:h-[150px] "
              />
            </div>

            <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-0 lg:justify-between">
              <div className="flex items-center w-full p-3 border rounded-md gap-9 lg:w-auto">
                <input
                  type="checkbox"
                  required
                  checked={isRobot}
                  onChange={(e) => setIsRobot(e.target.checked)}
                  className="w-6 h-6 text-blue-600 border-gray-900 rounded focus:ring-blue-500"
                />
                <span className="text-gray-700">{t("captcha")}</span>
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

              <Button
                type="submit"
                className="bg-white text-black transition-all duration-300 ease-out hover:border-white hover:bg-blue-500 border-black border rounded-full font-[Satoshi] flex items-center justify-center group relative w-32 h-12 overflow-hidden px-10"
              >
                <span className="absolute transition-opacity duration-500 ease-out opacity-100 group-hover:opacity-0">
                  {t("send")}
                </span>
                <ChevronRight className="absolute text-white transition-all duration-500 ease-out transform translate-x-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
              </Button>
            </div>
          </form>
        </CardContent>
      </div>
    </div>
  );
}
