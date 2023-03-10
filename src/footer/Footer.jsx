import React from "react";
import { FaMapMarkerAlt, FaLine } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { AiOutlineClockCircle } from "react-icons/ai";
import "../layoutComponent/Navbar.css";
import { useTranslation } from "react-i18next";
function Footer() {
  const { t, i18n } = useTranslation();
  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };

  return (
    <div className="bg-gray-200">
      <div className="my-auto grid mx-auto container gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="container my-auto">
          <img
            src="https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/logo-bae/MicrosoftTeams-image.png"
            alt=""
            className="mx-auto w-[120px] h-[120px] xl:w-[160px] xl:h-[160px] my-auto"
          />
        </div>
        <div className="mx-auto container p-3">
          <h1 className="p-2 Font1">{t("f1")}</h1>
          <div className="p-2 flex Font1">
            <FaMapMarkerAlt className="w-[50px] mt-1" /> : {t("f2")}
          </div>
          <div className="p-2 flex Font1">
            <AiOutlineClockCircle className="w-[50px] mt-1" />: Mon - Sat : 8.00
            - 17.00
          </div>
        </div>
        <div className="mx-auto container p-3">
          <h1 className="p-2 Font1">Contact Us {t("f4")}</h1>
          <div className="p-2 flex Font1">
            <BsFillTelephoneFill className="w-[50px] mt-1 " /> : 086-306-3746
            &nbsp;
            {t("f3")}
          </div>
          <div className="p-2 flex Font1">
            <FiMail className="w-[50px] mt-1 " /> : salesmarketing@baethai.com
          </div>
          <div className="p-2 flex Font1">
            <FaLine className="w-[50px] mt-1 " /> : @263pijuz
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
