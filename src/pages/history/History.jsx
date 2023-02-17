import React from "react";
import GoToTop from "../../component/GoToTop";
import Footer from "../../footer/Footer";
import Component from "./Component";
import Team from "./Team";
import Team2 from "./Team2";
import { useTranslation } from "react-i18next";
function History() {
  const { t, i18n } = useTranslation();
  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };
  return (
    <div className="">
      <div className="xl:w-full xl:h-[200px] w-full h-[120px] bg-indigo-600">
        <div className="container grid mx-auto h-full">
          <div className="mx-auto my-auto Zince xl:text-[50px] text-[22px]">
            {t("h1")}
          </div>
        </div>
        <Component />
        <Team />
        <Team2 />
        <Footer />
        <GoToTop />
      </div>
    </div>
  );
}

export default History;
