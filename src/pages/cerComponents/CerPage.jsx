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
        <div className="grid grid-cols-5">
          <div className="hover:shadow-2xl duration-500 ease-in">
            <ModalImage
              small={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Cer1.jpg"
              }
              large={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Cer1.jpg"
              }
              alt=""
              className="2xl:w-[400px] 2xl:h-[400px] w-[100px] h-[100px] mx-auto p-5"
            />
            <div className="text-center 2xl:tFont text-[10px]">
              ISO 9001:2015
            </div>
          </div>
          <div className="hover:shadow-2xl duration-500 ease-in">
            <ModalImage
              small={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Cer2.jpg"
              }
              large={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Cer2.jpg"
              }
              alt=""
              className="2xl:w-[400px] 2xl:h-[400px] w-[100px] h-[100px] mx-auto p-5"
            />
            <div className="text-center 2xl:tFont text-[10px]">
              ISO 9001:2015
            </div>
          </div>
          <div className="hover:shadow-2xl duration-500 ease-in">
            <ModalImage
              small={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Cer4.jpg"
              }
              large={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Cer4.jpg"
              }
              alt=""
              className="2xl:w-[400px] 2xl:h-[400px] w-[100px] h-[100px] mx-auto p-5"
            />
            <div className="text-center 2xl:tFont text-[10px]">
              IATF 16949:2016
            </div>
          </div>
          <div className="hover:shadow-2xl duration-500 ease-in">
            <ModalImage
              small={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Cer5.jpg"
              }
              large={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Cer5.jpg"
              }
              alt=""
              className="2xl:w-[400px] 2xl:h-[400px] w-[100px] h-[100px] mx-auto p-5"
            />
            <div className="text-center 2xl:tFont text-[10px]">
              ISO 14001:2015
            </div>
          </div>
          <div className="hover:shadow-2xl duration-500 ease-in">
            <ModalImage
              small={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Cer6.jpg"
              }
              large={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Cer6.jpg"
              }
              alt=""
              className="2xl:w-[400px] 2xl:h-[400px] w-[100px] h-[100px] mx-auto p-5"
            />
            <div className="text-center 2xl:tFont text-[10px]">
              IATF 16949:2016
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CerPage;
