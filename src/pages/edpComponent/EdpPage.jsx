import React from "react";
import Footer from "../../footer/Footer";
import GoToTop from "../../component/GoToTop";

import Box2 from "./Box2";

function EdpPage() {
  return (
    <div className="mt-[20%] xl:mt-[6%]">
      <div className="w-full h-[200px] bg-indigo-600">
        <div className="container grid mx-auto h-full">
          <div className="mx-auto my-auto Zince">EDP</div>
        </div>
        <Box2 />
        <Footer />
        <GoToTop />
      </div>
    </div>
  );
}

export default EdpPage;
