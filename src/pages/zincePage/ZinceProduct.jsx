import Box1 from "./zinceComponent/Box1";
import Footer from "../../footer/Footer";
import GoToTop from "../../component/GoToTop";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function ZinceProduct() {
  const { t, i18n } = useTranslation();
  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };

  return (
    <div className="">
      <div className="xl:w-full xl:h-[200px] w-full h-[120px] bg-indigo-600">
        <div className="container grid mx-auto h-full">
          <div className="mx-auto my-auto Zince xl:text-[50px] text-[22px]">
            {t("z1")}
          </div>
        </div>
        <div className="mx-auto container flex justify-between">
          <Link to="/PlatingProduct">
            <button className="Font1 text-[20px] hover:text-blue-600 duration-500 underline">
              {t("btb3")}
            </button>
          </Link>
          <div>
            <Link to="/Edp">
              <button className="Font1 text-[20px] hover:text-blue-600 duration-500 underline">
                {t("e1")}
              </button>
            </Link>
          </div>
        </div>
        <Box1 />
        <Footer />
        <GoToTop />
      </div>
    </div>
  );
}

export default ZinceProduct;
