import React from "react";
import "../lineComponent/LineStyle.css";
import { useTranslation } from "react-i18next";
function Team() {
  const { t, i18n } = useTranslation();
  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };
  return (
    <div className="container mx-auto p-1">
      <div className="p-3 Font1 font-bold xl:text-[30px] xl:text-center text-[25px] text-center">
        {t("ceo")}
      </div>
      <div className="grid xl:grid-cols-4 grid-cols-1 p-2">
        <div className="hover:shadow-2xl ease-in duration-500">
          <img
            src="https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/image-brother/mr.parada.png"
            alt=""
            className="2xl:w-[300px] 2xl:h-[300px] w-[200px] h-[200px] mx-auto"
          />
          <div className="p-3 Font1 font-bold xl:text-[25px] xl:text-center text-[22px] text-center">
            K.Parada Bunnag
          </div>
          <div className="p-3 Font1 font-bold xl:text-[25px] xl:text-center text-[22px] text-center">
            Managing Director
          </div>
        </div>
        <div className="hover:shadow-2xl ease-in duration-500">
          <img
            src="https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/image-brother/miss.patcharee.png"
            alt=""
            className="2xl:w-[300px] 2xl:h-[300px] w-[200px] h-[200px] mx-auto"
          />
          <div className="p-3 Font1 font-bold xl:text-[25px] xl:text-center text-[22px] text-center">
            K.Patcharee Bunnag
          </div>
          <div className="p-3 Font1 font-bold xl:text-[25px] xl:text-center text-[22px] text-center">
            Vice Managing Director
          </div>
        </div>
        <div className="hover:shadow-2xl ease-in duration-500">
          <img
            src="https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/image-brother/K.phob.png"
            alt=""
            className="2xl:w-[300px] 2xl:h-[300px] w-[200px] h-[200px] mx-auto"
          />

          <div className="p-3 Font1 font-bold xl:text-[25px] xl:text-center text-[22px] text-center">
            K.Bhop Bunnag{" "}
          </div>
          <div className="p-3 Font1 font-bold xl:text-[20px] xl:text-center text-[22px] text-center">
            Asst.Deputy Managing Director
          </div>
        </div>
        <div className="hover:shadow-2xl ease-in duration-500">
          <img
            src="https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/image-brother/P'Bhon.jpg"
            alt=""
            className="2xl:w-[300px] 2xl:h-[300px] w-[200px] h-[200px] mx-auto"
          />

          <div className="p-3 Font1 font-bold xl:text-[25px] xl:text-center text-[22px] text-center">
            K.Bhon Bunnag{" "}
          </div>
          <div className="p-3 Font1 font-bold xl:text-[20px] xl:text-center text-[22px] text-center">
            Asst.Deputy Managing Director
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
