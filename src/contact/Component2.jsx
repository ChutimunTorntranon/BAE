import React from "react";
import { useTranslation } from "react-i18next";
function Component1() {
  const { t, i18n } = useTranslation();
  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };
  return (
    <div className="">
      <div className="text-[20px] text-center Font1">{t("map2")}</div>
      <iframe
        title="Chachoengsao Plant"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.4472305111017!2d100.94359651483117!3d13.812162490308468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6d034758410d%3A0x1ddff19ad1a62596!2sBrother%20Auto%20Parts%20%26%20Engineering%20Co%2C%20Ltd.!5e0!3m2!1sth!2sth!4v1675826284068!5m2!1sth!2sth"
        className="shadow-2xl xl:w-[650px] xl:h-[630px] w-[300px] h-[300px]"
        style={{ border: 0, margin: 20 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Component1;
