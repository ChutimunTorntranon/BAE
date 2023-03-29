import React from "react";
import GoToTop from "../../component/GoToTop";
import Footer from "../../footer/Footer";
import Box2 from "./Box2";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Stamping() {
  const { t, i18n } = useTranslation();
  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };

  return (
    <div className="">
      <div className="w-full xl:h-[200px] h-[120px] bg-indigo-600">
        <div className="container grid mx-auto h-full">
          <div className="mx-auto my-auto Zince text-center xl:text-[50px] text-[22px]">
            {t("st")}
          </div>
        </div>
        <div className="container mx-auto xl:text-left text-center">
          <Link to="/MyService">
            <button className="Font1 text-[20px] hover:text-blue-600 duration-500 underline xl:ml-6">
              {t("btb2")}
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

export default Stamping;
