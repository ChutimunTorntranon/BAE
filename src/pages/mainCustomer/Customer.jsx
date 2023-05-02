import React from "react";
import { useTranslation } from "react-i18next";
function Customer() {
  const { t, i18n } = useTranslation();
  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };
  return (
    <div className="container mx-auto p-5">
      <div className="p-3 Font1 font-bold xl:text-[30px] xl:text-center text-[25px] text-center">
        {t("customer")}
      </div>
      <div className="grid xl:grid-cols-3 container mx-auto">
        <div>
          <img
            src="https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Mitsubishi+Motor.jpg"
            alt=""
            className="w-[300px] mx-auto my-8 hover:scale-110 ease-in duration-500"
          />
        </div>
        <div>
          <img
            src="https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/H-One.jpg"
            alt=""
            className="w-[300px] mx-auto my-8 hover:scale-110 ease-in duration-500"
          />
        </div>
        <div>
          <img
            src="https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Magna.jpg"
            alt=""
            className="w-[300px] mx-auto my-8 hover:scale-110 ease-in duration-500"
          />
        </div>
        <div>
          <img
            src="https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Mahle.jpg"
            alt=""
            className="w-[300px] mx-auto my-8 hover:scale-110 ease-in duration-500"
          />
        </div>
        <div>
          <img
            src="https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Emerson+TM.jpg"
            alt=""
            className="w-[300px] mx-auto my-8 hover:scale-110 ease-in duration-500"
          />
        </div>
        <div>
          <img
            src="https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Prospira.jpg"
            alt=""
            className="w-[300px] mx-auto my-8 hover:scale-110 ease-in duration-500"
          />
        </div>
        <div>
          <img
            src="https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Arcelik+Hitashi.png"
            alt=""
            className="w-[300px] mx-auto hover:scale-110 ease-in duration-500"
          />
        </div>
        <div>
          <img
            src="https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/IRCLogo.jpg"
            alt=""
            className="w-[300px] mx-auto my-8 hover:scale-110 ease-in duration-500"
          />
        </div>
        <div>
          <img
            src="https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/walkerExlogo.jfif"
            alt=""
            className="w-[300px] mx-auto my-8 hover:scale-110 ease-in duration-500"
          />
        </div>
      </div>
    </div>
  );
}

export default Customer;
