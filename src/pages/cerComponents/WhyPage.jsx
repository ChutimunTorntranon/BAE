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
            src="https://img.freepik.com/free-photo/businessmen-businesswomen-meeting-brainstorming-ideas_7861-3065.jpg?w=1800&t=st=1673947901~exp=1673948501~hmac=b9ba11acefffc18205419024bc873a2a83850eefd24c4590939f47fe9760c3c4"
            alt=""
          />
          <h1 className="p-3 Font1 font-bold xl:text-[30px] xl:text-left text-[25px] text-center">
            Dojo Training
          </h1>
          <p className="p-3 Font2 xl:text-[21px] xl:text-left text-[15px] text-center">
            {" "}
            {t("Why1")}
          </p>
        </div>
        <div className="hover:shadow-2xl duration-500 ease-in">
          <img
            src="https://img.freepik.com/free-photo/teenager-dressed-white-t-shirt-using-virtual-reality-glasses-with-graph-charts-numbers-lines-technology-concept_613910-5097.jpg?w=2000&t=st=1674004347~exp=1674004947~hmac=7bdd9247630e88f741b264d4a25959b5ab08b80566a2c242532554b43875d305"
            alt=""
            className="h-[285px] w-[700px]"
          />
          <h1 className="p-3 Font1 font-bold xl:text-[30px] xl:text-left text-[25px] text-center">
            Creative Thinking
          </h1>
          <p className="p-3 Font2 xl:text-[21px] xl:text-left text-[15px] text-center">
            {" "}
            {t("Why2")}
          </p>
        </div>
        <div className="hover:shadow-2xl duration-500 ease-in">
          <img
            src="https://img.freepik.com/free-photo/group-happy-young-asia-business-coworkers-using-laptop-team-casual-meeting-startup-project-discussion-cafe-restaurant_7861-3035.jpg?w=1800&t=st=1674005065~exp=1674005665~hmac=ee0296d11118db14e6f998d13018ce9dd1eaeb5930bdc0d4df6d6caf98a4d7a0"
            alt=""
          />
          <h1 className="p-3 Font1 font-bold xl:text-[30px] xl:text-left text-[25px] text-center">
            Weekly update
          </h1>
          <p className="p-3 Font2 xl:text-[21px] xl:text-left text-[15px] text-center">
            {" "}
            {t("Why3")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyPage;
