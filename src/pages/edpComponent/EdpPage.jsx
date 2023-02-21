import React from "react";
import Footer from "../../footer/Footer";
import { useTranslation } from "react-i18next";
import GoToTop from "../../component/GoToTop";

import Box2 from "./Box2";
import { Link } from "react-router-dom";

function EdpPage() {
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
            {t("edp01")}
          </div>
        </div>
        <div className="mx-auto container flex justify-between">
          <Link to="/PlatingProduct">
            <button className="Font1 text-[20px] hover:text-blue-600 duration-500">
              {t("btb3")}
            </button>
          </Link>
          <div>
            <Link to="/Zinc">
              <button className="Font1 text-[20px] hover:text-blue-600 duration-500">
                {t("e2")}
              </button>
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link to="/Chromium">
              <button className="Font1 text-[20px] hover:text-blue-600 duration-500">
                {t("e3")}
              </button>
            </Link>
          </div>
        </div>
        <Box2 />
        <Footer />
        <GoToTop />
      </div>
    </div>
  );
}

export default EdpPage;
