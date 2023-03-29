import React from "react";
import "./../../layoutComponent/Navbar.css";
import { useTranslation } from "react-i18next";
function WhyPage() {
  const { t, i18n } = useTranslation();
  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };
  return (
    <div className="container mx-auto">
      <div className="p-3 Font1 font-bold xl:text-[30px] xl:text-center text-[23px] text-center">
        {t("Why")}
      </div>
      <div className="grid xl:grid-cols-3 grid-cols-1 gap-3">
        <div className="hover:shadow-2xl duration-500 ease-in">
          <img
            src="https://bae-image-video.s3.ap-southeast-1.amazonaws.com/Dojo+Training/dojo.png"
            alt=""
            className="h-[285px] w-[700px]"
          />
          <h1 className="p-3 Font1 font-bold xl:text-[30px] xl:text-left text-[25px] text-center">
            Dojo Training
          </h1>
          <p className="p-3 Font2 xl:text-[21px] xl:text-left text-[15px] text-center">
            {" "}
            &nbsp;&nbsp;&nbsp;{t("Why1")}
          </p>
        </div>
        <div className="hover:shadow-2xl duration-500 ease-in">
          <img
            src="https://bae-image-video.s3.ap-southeast-1.amazonaws.com/quality-control-img/QA(%E0%B9%80%E0%B8%9E%E0%B8%B4%E0%B9%88%E0%B8%A1%E0%B8%84%E0%B8%B3%E0%B8%A7%E0%B9%88%E0%B8%B2+scanner+test+%E0%B8%9A%E0%B8%99%E0%B8%AB%E0%B8%B1%E0%B8%A7)+Crop.jpg"
            alt=""
            className="h-[285px] w-[700px]"
          />
          <h1 className="p-3 Font1 font-bold xl:text-[30px] xl:text-left text-[25px] text-center">
            Continuously improve quality
          </h1>
          <p className="p-3 Font2 xl:text-[21px] xl:text-left text-[15px] text-center">
            {" "}
            &nbsp;&nbsp;&nbsp; {t("Why2")}
          </p>
        </div>
        <div className="hover:shadow-2xl duration-500 ease-in">
          <img
            src="https://bae-image-video.s3.ap-southeast-1.amazonaws.com/Dojo+Training/150330.jpg"
            alt=""
            className="h-[285px] w-[700px]"
          />
          <h1 className="p-3 Font1 font-bold xl:text-[30px] xl:text-left text-[25px] text-center">
            Weekly update
          </h1>
          <p className="p-3 Font2 xl:text-[21px] xl:text-left text-[15px] text-center">
            {" "}
            &nbsp;&nbsp;&nbsp; {t("Why3")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyPage;
