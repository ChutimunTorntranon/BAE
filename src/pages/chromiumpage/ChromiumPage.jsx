import React from "react";
import GoToTop from "../../component/GoToTop";
import Footer from "../../footer/Footer";
import Box2 from "./Box2";

function ChromiumPage() {
  return (
    <div className="">
      <div className="xl:w-full xl:h-[200px] w-full h-[120px] bg-indigo-600">
        <div className="container grid mx-auto h-full">
          <div className="mx-auto my-auto Zince xl:text-[50px] text-[22px]">
            Chromiums
          </div>
        </div>
        <Box2 />
        <Footer />
        <GoToTop />
      </div>
    </div>
  );
}

export default ChromiumPage;
