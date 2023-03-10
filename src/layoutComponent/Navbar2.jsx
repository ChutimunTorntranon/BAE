import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
function Navbar2() {
  const [navbar, setNavbar] = useState(false);
  const localStorageLanguage = localStorage.getItem("lng");

  const [lang, setLang] = useState(
    localStorageLanguage ? localStorageLanguage : "th"
  );
  const { t, i18n } = useTranslation();

  const handleChangeTH = (lng) => {
    setLang("th");
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };
  const handleChangEng = (lng) => {
    setLang("en");
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };

  // const localStorageLanguage = localStorage.getItem("lng");
  console.log(localStorageLanguage);

  const location = useLocation();
  console.log(location);
  return (
    <nav className="w-full bg-white shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="/">
              <div className="flex">
                <img
                  src="https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/image-brother/LogoBaepng.png"
                  alt=""
                  className="w-[100px] h-[100px]"
                />
                <h2 className="text-[15px] xl:text-xl font-bold xl:mt-5 mt-[30px] ml-5">
                  Brother Auto&nbsp;parts <br />& Engineering Co.,Ltd
                </h2>
              </div>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="navFont hover:text-blue-600 duration-500">
                <a
                  href="/"
                  className={`p-3 Font1 font-bold xl:text-[25px] xl:text-center text-[20px] text-center ${
                    location.pathname === "/" ? "text-blue-600 underline" : ""
                  }`}
                >
                  {t("home")}
                </a>
              </li>
              <li className="navFont hover:text-blue-600 duration-500">
                <a
                  href="/MyService"
                  className={`p-3 Font1 font-bold xl:text-[25px] xl:text-center text-[20px] text-center ${
                    location.pathname === "/MyService"
                      ? "text-blue-600 underline"
                      : ""
                  }`}
                >
                  {t("service")}
                </a>
              </li>
              <li className="navFont hover:text-blue-600 duration-500">
                <a
                  href="/AboutUs"
                  className={`p-3 Font1 font-bold xl:text-[25px] xl:text-center text-[20px] text-center ${
                    location.pathname === "/AboutUs"
                      ? "text-blue-600 underline"
                      : ""
                  }`}
                >
                  {t("aboutus")}
                </a>
              </li>
              <li className="navFont hover:text-blue-600 duration-500">
                <a
                  href="/Contact"
                  className={`p-3 Font1 font-bold xl:text-[25px] xl:text-center text-[20px] text-center ${
                    location.pathname === "/Contact"
                      ? "text-blue-600 underline"
                      : ""
                  }`}
                >
                  {t("nav4")}
                </a>
              </li>
              <li className="navFont hover:text-blue-600 duration-500">
                <button
                  className={`Font1 ${
                    lang === "th" ? "text-blue-600 underline" : ""
                  }`}
                  onClick={() => handleChangeTH("th")}
                >
                  TH
                </button>
              </li>

              <li className="navFont hover:text-blue-600 duration-500">
                <button
                  className={`Font1 ${
                    lang === "en" ? "text-blue-600 underline" : ""
                  }`}
                  onClick={() => handleChangEng("en")}
                >
                  EN
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar2;
