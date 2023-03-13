import React from "react";
import { Link } from "react-router-dom";
import GoToTop from "../../component/GoToTop";
import Footer from "../../footer/Footer";
import QCComponent from "./QCComponent";
import { useTranslation } from "react-i18next";

function QualityControlPage() {
  const { t, i18n } = useTranslation();
  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };
  return (
    <div>
      <div className="w-full xl:h-[200px] h-[120px] bg-indigo-600">
        <div className="container grid mx-auto h-full">
          <div className="mx-auto my-auto Zince text-center xl:text-[50px] text-[22px]">
            {t("qc1")}
          </div>
        </div>
        <div className="mx-auto container 2xl:flex 2xl:justify-between text-center">
          <Link to="/MyService">
            <button className="Font1 text-[20px] hover:text-blue-600 duration-500 underline">
              {t("btb2")}
            </button>
          </Link>
        </div>

        <QCComponent />
        <Footer />
        <GoToTop />
      </div>
    </div>
  );
}

export default QualityControlPage;
