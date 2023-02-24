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
    <div className="w-full h-[100px] bg-slate-300 my-auto">
      <div>
        <div className="w-full bg-slate-300 mx-auto ">
          <div className="w-full h-[30px] text-center textScriptFooter">
            <p className="xl:text-[20px] text-[13px] xl:mt-0 mt-10 2xl:pt-10 pt-6">
              Copyright © 2021 {t("fc")} All rights reserved. Powered By BitSoft
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterContact;
