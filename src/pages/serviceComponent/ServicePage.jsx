import React from "react";
import "./Servicepage.css";
import { Link } from "react-router-dom";
import "../../layoutComponent/Navbar.css";
import "../lineComponent/LineStyle.css";
import { useTranslation } from "react-i18next";
function ServicePage() {
  const { t, i18n } = useTranslation();
  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };

  return (
    <div className="container mx-auto">
      <div className="p-3 Font1 font-bold xl:text-[30px] xl:text-center text-[25px] text-center">
        {t("ourservice")}
      </div>

      <div className="grid grid-cols-1 sm:mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container mx-auto p-3">
        <Link to="/Stamping&welding">
          <div className="xl:w-[380px] xl:h-[470px] relative cursor-pointer">
            <img
              src="https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/image-brother/stamppppp.jpg"
              alt="Zinc"
              className="image__img"
            ></img>
            <div className="image__overlay image__overlay--blur">
              Stamp & welding
            </div>
          </div>
        </Link>
        <Link to="/Zinc">
          <div className="image cursor-pointer">
            <img
              src="https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Parts04.png"
              alt="Zinc"
              className="image__img"
            ></img>
            <div className="image__overlay image__overlay--blur">ZINC</div>
          </div>
        </Link>
        <Link to="/EDP">
          <div className="image cursor-pointer">
            <img
              src="https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/EDP-09.png"
              alt="EDP"
              className="image__img"
            ></img>
            <div className="image__overlay image__overlay--blur">EDP</div>
          </div>
        </Link>
        <Link to="/Chromium">
          <div className="image cursor-pointer">
            <img
              src="https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/image-brother/Chroooo.jpg"
              alt="Chromium"
              className="image__img"
            ></img>
            <div className="image__overlay image__overlay--blur">CHROMIUM</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ServicePage;
