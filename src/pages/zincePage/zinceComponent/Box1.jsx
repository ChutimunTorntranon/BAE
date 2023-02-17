import React from "react";
import ModalImage from "react-modal-image";
import "../../lineComponent/LineStyle.css";
import { useTranslation } from "react-i18next";
function Box1() {
  const { t, i18n } = useTranslation();
  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };
  return (
    <div className="Box1 xl:mt-[20px] mt-[-1px]">
      <div className="container mx-auto">
        <div className="p-3 Font1 font-bold xl:text-[30px] xl:text-left text-[20px] text-center">
          <strong>{t("zinc1")}</strong>
        </div>
        <ul className="list-disc p-5">
          <li className="p-3 Font2 xl:text-[21px] xl:text-left text-[15px] text-left">
            {t("zinc2")} <strong>{t("zinc3")}</strong> {t("zince")}{" "}
            <strong> {t("zinc4")}</strong>
          </li>
          <li className="p-3 Font2 xl:text-[21px] xl:text-left text-[15px] text-left">
            {t("zinc5")}
          </li>
          <li className="p-3 Font2 xl:text-[21px] xl:text-left text-[15px] text-left">
            {t("zinc6")}
          </li>
        </ul>
      </div>
      <div className="bg-gray-100">
        <div className="grid xl:grid-cols-3 container mx-auto">
          <ModalImage
            small={
              "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Parts01.jpg"
            }
            large={
              "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Parts01.jpg"
            }
            alt=""
            className="w-[400px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3"
          />
          <ModalImage
            small={
              "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Parts02.jpg"
            }
            large={
              "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Parts02.jpg"
            }
            alt=""
            className="w-[400px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3"
          />
          <ModalImage
            small={
              "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Parts13.png"
            }
            large={
              "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Parts13.png"
            }
            alt=""
            className="w-[400px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3"
          />
          <ModalImage
            small={
              "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Parts06.jpg"
            }
            large={
              "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Parts06.jpg"
            }
            alt=""
            className="w-[400px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3"
          />
          <ModalImage
            small={
              "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Parts11.jpg"
            }
            large={
              "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Parts11.jpg"
            }
            alt=""
            className="w-[400px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3"
          />
          <ModalImage
            small={
              "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Parts10.jpg"
            }
            large={
              "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Parts10.jpg"
            }
            alt=""
            className="w-[400px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3"
          />
        </div>
      </div>
    </div>
  );
}

export default Box1;
