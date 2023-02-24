import React from "react";
import GoToTop from "../../component/GoToTop";
import Footer from "../../footer/Footer";
import Box2 from "./Box2";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function ChromiumPage() {
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
            {t("Chro1")}
          </div>
        </div>
        <div className="mx-auto container flex justify-between">
          <Link to="/PlatingProduct">
            <button className="Font1 text-[20px] hover:text-blue-600 duration-500 underline">
              {t("btb3")}
            </button>
          </Link>
          <Link to="/EDP">
            <button className="Font1 text-[20px] hover:text-blue-600 duration-500 underline">
              {t("e4")}
            </button>
          </Link>
        </div>
        <Box2 />
        <Footer />
        <GoToTop />
      </div>
    </div>
  );
}

export default ChromiumPage;
