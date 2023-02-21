import React from "react";
import "../productPage/Productpage.css";
import { Link } from "react-router-dom";
import Footer from "../../footer/Footer";
import GoToTop from "../../component/GoToTop";
import { useTranslation } from "react-i18next";
function AllProductPage() {
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
            {t("service")}
          </div>
        </div>
        <div className="mx-auto container flex justify-between">
          <Link to="/">
            <button className="Font1 text-[20px] hover:text-blue-600 duration-500 underline">
              {t("btb")}
            </button>
          </Link>
        </div>
        <div className="container grid grid-cols-1 sm:mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto p-1">
          <Link to="/Stamping&welding">
            <div className="m-auto relative xl:w-[450px] xl:h-[690px] w-[350px] cursor-pointer">
              <img
                src="https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/image-brother/stamppppp.jpg"
                alt="Stamp & welding"
                className="image__img"
              ></img>
              <div className="image__overlay image__overlay--blur">
                Stamp & welding
              </div>
            </div>
            <Link to="/">
              <div className="text-center Font1 p-1 text-[20px] hover:text-blue-600 duration-500 underline">
                Stamp & welding
              </div>
            </Link>
          </Link>
          <Link to="/PlatingProduct">
            <div className="m-auto relative xl:w-[450px] xl:h-[690px] w-[350px] cursor-pointer">
              <img
                src="https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Parts04.png"
                alt="zinc"
                className="image__img"
              ></img>
              <div className="image__overlay image__overlay--blur">Plating</div>
            </div>
            <Link to="/PlatingProduct">
              <div className="text-center Font1 p-1 text-[20px] hover:text-blue-600 duration-500 underline">
                Plating
              </div>
            </Link>
          </Link>
          <Link to="/Tooling">
            <div className="m-auto relative xl:w-[450px] xl:h-[690px] w-[350px] cursor-pointer">
              <img
                src="https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/EDP-09.png"
                alt="edp"
                className="image__img"
              ></img>
              <div className="image__overlay image__overlay--blur">Tooling</div>
            </div>
            <Link to="/Tooling">
              <div className="text-center Font1 p-1 text-[20px] hover:text-blue-600 duration-500 underline">
                Tooling
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

export default AllProductPage;
