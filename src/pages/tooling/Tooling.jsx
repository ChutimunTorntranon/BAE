import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import GoToTop from "../../component/GoToTop";
import Footer from "../../footer/Footer";
import ToolingComponent from "./ToolingComponent";
function Tooling() {
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
            {t("tooling")}
          </div>
        </div>
        <div className="mx-auto container flex justify-between">
          <Link to="/MyService">
            <button className="Font1 text-[20px] hover:text-blue-600 duration-500">
              {t("btb2")}
            </button>
          </Link>
        </div>
        <ToolingComponent />
        <Footer />
        <GoToTop />
      </div>
    </div>
  );
}

export default Tooling;
