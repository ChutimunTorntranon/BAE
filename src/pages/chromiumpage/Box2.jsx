import React from "react";
import ModalImage from "react-modal-image";
import { useTranslation } from "react-i18next";
function Box2() {
  const { t, i18n } = useTranslation();
  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };

  return (
    <div className="Box1 xl:mt-[20px] mt-[-1px]">
      <div className="container mx-auto">
        <div className="p-3 Font1 font-bold xl:text-[30px] xl:text-left text-[22px] text-center xl:ml-8">
          <strong>{t("ch1")}</strong>
        </div>
        <ul className="list-disc p-5">
          <li className="p-3 Font2 xl:text-[21px] xl:text-left text-[15px] text-left xl:ml-8">
            <strong>{t("ch2")}</strong>&nbsp;
            {t("ch3")}
          </li>
          <li className="p-3 Font2 xl:text-[21px] xl:text-left text-[15px] text-left xl:ml-8">
            <strong>{t("ch4")}</strong>
            {t("ch5")}
          </li>
        </ul>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto">
          <div className="grid xl:grid-cols-3 grid-cols-1 p-5">
            <ModalImage
              small={
                "https://bae-image-video.s3.ap-southeast-1.amazonaws.com/part-Chromium/C001.jpg"
              }
              large={
                "https://bae-image-video.s3.ap-southeast-1.amazonaws.com/part-Chromium/C001.jpg"
              }
              alt=""
              className="w-[400px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3"
            />
            <ModalImage
              small={
                "https://bae-image-video.s3.ap-southeast-1.amazonaws.com/part-Chromium/C002.jpg"
              }
              large={
                "https://bae-image-video.s3.ap-southeast-1.amazonaws.com/part-Chromium/C002.jpg"
              }
              alt=""
              className="w-[400px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3"
            />
            <ModalImage
              small={
                "https://bae-image-video.s3.ap-southeast-1.amazonaws.com/part-Chromium/C003.jpg"
              }
              large={
                "https://bae-image-video.s3.ap-southeast-1.amazonaws.com/part-Chromium/C003.jpg"
              }
              alt=""
              className="w-[400px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3"
            />
            <ModalImage
              small={
                "https://bae-image-video.s3.ap-southeast-1.amazonaws.com/part-Chromium/C004.jpg"
              }
              large={
                "https://bae-image-video.s3.ap-southeast-1.amazonaws.com/part-Chromium/C004.jpg"
              }
              alt=""
              className="w-[400px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3"
            />
            <ModalImage
              small={
                "https://bae-image-video.s3.ap-southeast-1.amazonaws.com/part-Chromium/C005.jpg"
              }
              large={
                "https://bae-image-video.s3.ap-southeast-1.amazonaws.com/part-Chromium/C005.jpg"
              }
              alt=""
              className="w-[400px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3"
            />
            <ModalImage
              small={
                "https://bae-image-video.s3.ap-southeast-1.amazonaws.com/part-Chromium/C006.jpg"
              }
              large={
                "https://bae-image-video.s3.ap-southeast-1.amazonaws.com/part-Chromium/C006.jpg"
              }
              alt=""
              className="w-[400px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3"
            />
            <ModalImage
              small={
                "https://bae-image-video.s3.ap-southeast-1.amazonaws.com/part-Chromium/C007.jpg"
              }
              large={
                "https://bae-image-video.s3.ap-southeast-1.amazonaws.com/part-Chromium/C007.jpg"
              }
              alt=""
              className="w-[400px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3"
            />
            <ModalImage
              small={
                "https://bae-image-video.s3.ap-southeast-1.amazonaws.com/part-Chromium/C008.jpg"
              }
              large={
                "https://bae-image-video.s3.ap-southeast-1.amazonaws.com/part-Chromium/C008.jpg"
              }
              alt=""
              className="w-[400px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3"
            />
            <ModalImage
              small={
                "https://bae-image-video.s3.ap-southeast-1.amazonaws.com/part-Chromium/C009.jpg"
              }
              large={
                "https://bae-image-video.s3.ap-southeast-1.amazonaws.com/part-Chromium/C009.jpg"
              }
              alt=""
              className="w-[400px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3"
            />
            <ModalImage
              small={
                "https://bae-image-video.s3.ap-southeast-1.amazonaws.com/part-Chromium/C010.jpg"
              }
              large={
                "https://bae-image-video.s3.ap-southeast-1.amazonaws.com/part-Chromium/C010.jpg"
              }
              alt=""
              className="w-[400px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box2;
