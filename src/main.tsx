import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "@/routes/Route";
import { Toaster } from "./components/ui/toaster";
import global_en from "@/lang/english.json";
import global_ru from "@/lang/russian.json";
import global_uz from "@/lang/uzbek.json";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
i18next.init({
  interpolation: { escapeValue: false },
  lng: "uz",
  resources: {
    en: {
      translation: global_en,
    },
    ru: {
      translation: global_ru,
    },
    uz: {
      translation: global_uz,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <RouterProvider router={router} />
    </I18nextProvider>
    <Toaster />
  </StrictMode>
);
