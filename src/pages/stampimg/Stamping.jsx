import React from "react";
import GoToTop from "../../component/GoToTop";
import Footer from "../../footer/Footer";
import Box2 from "./Box2";
function Stamping() {
  return (
    <div className="">
      <div className="w-full h-[200px] bg-indigo-600">
        <div className="container grid mx-auto h-full">
          <div className="mx-auto my-auto Zince">Stamping & welding</div>
        </div>
        <Box2 />
        <Footer />
        <GoToTop />
      </div>
    </div>
  );
}

export default Stamping;
