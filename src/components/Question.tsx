import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

export default function Faq() {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex justify-center mt-20 ">
        <div className="flex flex-col items-center justify-end">
          <div className="flex items-center my-3">
            <h1
              className="text-[28px] leading-[56px] font-normal sm:2xl md:2xl: lg:text-[50px]"
              style={{
                fontFamily: "Zodiak",
                textAlign: "left",
                color: "rgba(19, 99, 222, 1)",
              }}
            >
              {t("questions")}
            </h1>
          </div>
        </div>
      </div>
      <>
        <Accordion
          type="single"
          collapsible
          className="pt-5 mx-4 space-y-4 sm:mx-4 md:mx-4 lg:mx-24"
        >
          <AccordionItem
            value="item-1"
            className="px-6 py-2 border rounded-lg shadow-sm"
          >
            <AccordionTrigger className="flex justify-between hover:no-underline">
              <span className="text-xl font-medium">{t("question1")}</span>
            </AccordionTrigger>
            <AccordionContent className="pt-4">{t("answer1")}</AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="px-6 py-2 border rounded-lg shadow-sm"
          >
            <AccordionTrigger className="flex justify-between hover:no-underline">
              <span className="text-xl font-medium">{t("question2")}</span>
            </AccordionTrigger>
            <AccordionContent className="pt-4 ">
              {t("answer2")}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="px-6 py-2 border rounded-lg shadow-sm"
          >
            <AccordionTrigger className="flex justify-between hover:no-underline">
              <span className="text-xl font-medium">{t("question3")}</span>
            </AccordionTrigger>
            <AccordionContent className="pt-4">{t("answer3")}</AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="px-6 py-2 border rounded-lg shadow-sm"
          >
            <AccordionTrigger className="flex justify-between hover:no-underline">
              <span className="text-xl font-normal">{t("question4")}</span>
            </AccordionTrigger>
            <AccordionContent className="pt-4">{t("answer4")}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </>
    </>
  );
}
