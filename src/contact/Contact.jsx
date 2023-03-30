import React from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";
import { useTranslation } from "react-i18next";
import { CiAlarmOn } from "react-icons/ci";
import { GoDeviceMobile } from "react-icons/go";
import { SiGmail } from "react-icons/si";
import { FaLine } from "react-icons/fa";
import { BiMap } from "react-icons/bi";
import "./text.css";
import FooterContact from "./FooterContact";

function Contact() {
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
            {t("heading1")}
          </div>
        </div>
        <div className="mx-auto grid xl:grid-cols-3 grid-cols-1">
          <div className="mx-auto">
            <div className="mx-auto my-auto bg-indigo-500 p-5 text-white shadow-2xl 2xl:w-[450px] 2xl:h-[500px] w-[350px] h-[350px] text-center 2xl:mt-16 mt-10">
              <div className="headFont xl:mt-20">
                <p className="2xl:text-[18px] text-[13px]">
                  BROTHER AUTO PARTS & ENGINEERING CO,.LTD
                  <br />
                  บริษัท บราเดอร์ ออโต้พาร์ทส์ แอนด์ เอ็นจิเนียริ่ง จำกัด
                </p>
              </div>
              <br />
              <div className="p-2 flex headFont ">
                <BiMap className="2xl:w-[30px] 2xl:h-[30px] w-[20px] h-[20px]" />
                <p className="2xl:text-[16px] text-[13px]">
                  &nbsp;: &nbsp;{t("ct")}
                  <br /> {t("ct1")}
                </p>
              </div>
              <div className="p-2 flex headFont">
                <CiAlarmOn className="2xl:w-[30px] 2xl:h-[30px] w-[20px] h-[20px]" />
                <p className="2xl:text-[16px] text-[13px]">
                  &nbsp;: Mon - Sat : 8.00 - 17.00
                </p>
              </div>
              <div className="p-2 flex headFont">
                <GoDeviceMobile className="2xl:w-[30px] 2xl:h-[30px] w-[20px] h-[20px]" />
                <p className="2xl:text-[16px] text-[13px]">
                  &nbsp;: 086-306-3746 {t("ct2")}
                </p>
              </div>
              <div className="p-2 flex headFont">
                <SiGmail className="2xl:w-[30px] 2xl:h-[30px] w-[20px] h-[20px]" />
                <p className="2xl:text-[16px] text-[13px]">
                  &nbsp; : salesmarketing@baethai.com
                </p>
              </div>
              <div className="p-2 flex headFont">
                <FaLine className="2xl:w-[30px] 2xl:h-[30px] w-[20px] h-[20px]" />
                <p className="2xl:text-[16px] text-[13px]">&nbsp;: @263pijuz</p>
              </div>
            </div>
          </div>
          <div className="mx-auto">
            <Component1 />
          </div>
          <div className="mx-auto">
            <Component2 />
          </div>
        </div>
        <FooterContact />
      </div>
    </div>
  );
}

export default Contact;
