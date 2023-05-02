import React from "react";
import "./../../layoutComponent/Navbar.css";
import ModalImage from "react-modal-image";
import "../lineComponent/LineStyle.css";
import { useTranslation } from "react-i18next";
function CerPage() {
  const { t, i18n } = useTranslation();
  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };
  return (
    <div className="container mx-auto">
      <div className="container mx-auto">
        <div className="p-3 Font1 font-bold xl:text-[30px] xl:text-center text-[25px] text-center">
          {t("certificates")}
        </div>
        <div className="grid 2xl:grid-cols-2 sm:grid-cols-2">
          <div className="">
            <ModalImage
              small={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Cer2.jpg"
              }
              large={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Cer2.jpg"
              }
              alt=""
              className="2xl:w-[400px] 2xl:h-[600px] w-[200px] h-[300px] p-5 hover:shadow-2xl duration-500 ease-in 2xl:ml-80 mx-auto"
            />
          </div>
          <div className="">
            <ModalImage
              small={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Cer4.jpg"
              }
              large={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Cer4.jpg"
              }
              alt=""
              className="2xl:w-[400px] 2xl:h-[600px] w-[200px] h-[300px] p-5 hover:shadow-2xl duration-500 ease-in 2xl:mr-80 mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CerPage;
