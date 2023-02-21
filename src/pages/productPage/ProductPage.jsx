import React from "react";
import "./Productpage.css";
import { Link } from "react-router-dom";
import Footer from "../../footer/Footer";
import GoToTop from "../../component/GoToTop";
import { useTranslation } from "react-i18next";
function ProductPage() {
  const { t, i18n } = useTranslation();
  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };
  return (
    <div className="">
      <div className="w-full xl:h-[200px] h-[120px] bg-indigo-600">
        <div className="container grid mx-auto h-full">
          <div className="mx-auto my-auto Zince xl:text-[50px] text-[22px]">
            {t("hplat")}
          </div>
        </div>
        <div className="mx-auto container flex justify-between">
          <Link to="/MyService">
            <button className="Font1 text-[20px] hover:text-blue-600 duration-500 underline">
              {t("btb2")}
            </button>
          </Link>
        </div>
        <div className="container grid grid-cols-1 sm:mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto p-1">
          <Link to="/Zinc">
            <div className="m-auto relative xl:w-[450px] xl:h-[690px] w-[350px] cursor-pointer">
              <img
                src="https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Parts04.png"
                alt="zinc"
                className="image__img"
              ></img>
              <div className="image__overlay image__overlay--blur">ZINC</div>
            </div>
            <Link to="/Zinc">
              <div className="text-center Font1 p-1 text-[20px] hover:text-blue-600 duration-500 underline">
                ZINC
              </div>
            </Link>
          </Link>
          <Link to="/Edp">
            <div className="m-auto relative xl:w-[450px] xl:h-[690px] w-[350px] cursor-pointer">
              <img
                src="https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/EDP-09.png"
                alt="edp"
                className="image__img"
              ></img>
              <div className="image__overlay image__overlay--blur">EDP</div>
            </div>
            <Link to="/Edp">
              <div className="text-center Font1 p-1 text-[20px] hover:text-blue-600 duration-500 underline">
                EDP
              </div>
            </Link>
          </Link>
          <Link to="/Chromium">
            <div className="m-auto relative xl:w-[450px] xl:h-[690px] w-[350px] cursor-pointer">
              <img
                src="https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/image-brother/Chroooo.jpg"
                alt="Chromium"
                className="image__img"
              ></img>
              <div className="image__overlay image__overlay--blur">
                Chromium
              </div>
            </div>
            <Link to="/Chromium">
              <div className="text-center Font1 p-1 text-[20px] hover:text-blue-600 duration-500 underline">
                Chromium
              </div>
            </Link>
          </Link>
        </div>
        <Footer />
        <GoToTop />
      </div>
    </div>
  );
}

export default ProductPage;
