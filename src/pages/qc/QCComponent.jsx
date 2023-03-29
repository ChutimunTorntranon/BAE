import React from "react";
import ModalImage from "react-modal-image";
import { useTranslation } from "react-i18next";
function QCComponent() {
  const { t, i18n } = useTranslation();
  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };

  return (
    <div className="Box1 xl:mt-[20px] mt-[-1px]">
      <div className="container mx-auto">
        <div className="p-3 Font1 font-bold xl:text-[30px] xl:text-left text-[22px] text-center xl:ml-4">
          <strong>{t("qc2")}</strong>
        </div>
        <ul className="list-disc p-5">
          <li className="p-3 Font2 xl:text-[21px] xl:text-left text-[15px] text-left xl:ml-8">
            {t("qc3")}
          </li>
          <li className="p-3 Font2 xl:text-[21px] xl:text-left text-[15px] text-left xl:ml-8">
            <strong>{t("qc4")}</strong>&nbsp;
            {t("qc5")}
          </li>
        </ul>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto">
          <div className="grid xl:grid-cols-3 grid-cols-1 p-5">
            <ModalImage
              small={
                "https://bae-image-video.s3.ap-southeast-1.amazonaws.com/quality-control-img/18063.jpg"
              }
              large={
                "https://bae-image-video.s3.ap-southeast-1.amazonaws.com/quality-control-img/18063.jpg"
              }
              alt=""
              className="w-[400px] h-[400px] mx-auto hover:scale-125 ease-in duration-500 p-3"
            />
            <ModalImage
              small={
                "https://bae-image-video.s3.ap-southeast-1.amazonaws.com/quality-control-img/120005.jpg"
              }
              large={
                "https://bae-image-video.s3.ap-southeast-1.amazonaws.com/quality-control-img/120005.jpg"
              }
              alt=""
              className="w-[400px] h-[400px] mx-auto hover:scale-125 ease-in duration-500 p-3"
            />
            <ModalImage
              small={
                "https://bae-image-video.s3.ap-southeast-1.amazonaws.com/quality-control-img/QA(%E0%B9%80%E0%B8%9E%E0%B8%B4%E0%B9%88%E0%B8%A1%E0%B8%84%E0%B8%B3%E0%B8%A7%E0%B9%88%E0%B8%B2+scanner+test+%E0%B8%9A%E0%B8%99%E0%B8%AB%E0%B8%B1%E0%B8%A7).jpg"
              }
              large={
                "https://bae-image-video.s3.ap-southeast-1.amazonaws.com/quality-control-img/QA(%E0%B9%80%E0%B8%9E%E0%B8%B4%E0%B9%88%E0%B8%A1%E0%B8%84%E0%B8%B3%E0%B8%A7%E0%B9%88%E0%B8%B2+scanner+test+%E0%B8%9A%E0%B8%99%E0%B8%AB%E0%B8%B1%E0%B8%A7).jpg"
              }
              alt=""
              className="w-[400px] h-[400px] mx-auto hover:scale-125 ease-in duration-500 p-3"
            />
            <ModalImage
              small={
                "https://bae-image-video.s3.ap-southeast-1.amazonaws.com/quality-control-img/qc(tensile+test).jpg"
              }
              large={
                "https://bae-image-video.s3.ap-southeast-1.amazonaws.com/quality-control-img/qc(tensile+test).jpg"
              }
              alt=""
              className="w-[400px] h-[400px] mx-auto hover:scale-125 ease-in duration-500 p-3"
            />

            <ModalImage
              small={
                "https://bae-image-video.s3.ap-southeast-1.amazonaws.com/quality-control-img/QA(%E0%B9%80%E0%B8%9E%E0%B8%B4%E0%B9%88%E0%B8%A1qcfinal).jpg"
              }
              large={
                "https://bae-image-video.s3.ap-southeast-1.amazonaws.com/quality-control-img/QA(%E0%B9%80%E0%B8%9E%E0%B8%B4%E0%B9%88%E0%B8%A1qcfinal).jpg"
              }
              alt=""
              className="w-[400px] h-[400px] mx-auto hover:scale-125 ease-in duration-500 p-3"
            />
            <ModalImage
              small={
                "https://bae-image-video.s3.ap-southeast-1.amazonaws.com/quality-control-img/18068.jpg"
              }
              large={
                "https://bae-image-video.s3.ap-southeast-1.amazonaws.com/quality-control-img/18068.jpg"
              }
              alt=""
              className="w-[400px] h-[400px] mx-auto hover:scale-125 ease-in duration-500 p-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QCComponent;
