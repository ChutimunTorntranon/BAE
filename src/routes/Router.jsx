import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../layoutComponent/Navbar";
import PostPage from "../pages/PostPage";
import ZinceProduct from "../pages/zincePage/ZinceProduct";
import ProductPage from "../pages/productPage/ProductPage";
import EdpPage from "../pages/edpComponent/EdpPage";
// import Navbar2 from "../layoutComponent/Navbar2";
import ChromiumPage from "../pages/chromiumpage/ChromiumPage";
import Stamping from "../pages/stampimg/Stamping";
function Router() {
  return (
    <>
      <Navbar />
      {/* <Navbar2 /> */}
      <Routes>
        <>
          <Route path="/" element={<PostPage />} />
          <Route path="/Service" element={<ProductPage />} />
          <Route path="/Zinc" element={<ZinceProduct />} />
          <Route path="/Edp" element={<EdpPage />} />
          <Route path="/Chromium" element={<ChromiumPage />} />
          <Route path="/Stamping&welding" element={<Stamping />} />
        </>
      </Routes>
      {/* Sawasdee */}
    </>
  );
}

export default Router;
