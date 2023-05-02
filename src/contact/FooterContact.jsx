import React from "react";
import "./text.css";
import { useTranslation } from "react-i18next";
function FooterContact() {
  const { t, i18n } = useTranslation();
  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };

  return (
    <div className="2xl:w-full w-88 mx-auto 2xl:h-[120px] bg-slate-300 my-auto ">
      <div>
        <div className="2xl:w-full w-80 h-[70px] bg-slate-300 mx-auto ">
          <div className="2xl:w-full h-[30px] text-center textScriptFooter bg-slate-300">
            <p className="xl:text-[20px] text-[13px] xl:mt-[49px] 2xl:pt-10 pt-5">
              {t("fc")} <br />
              All rights reserved. Powered By BitSoft
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterContact;
