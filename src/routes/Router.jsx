import React from "react";
import { Route, Routes } from "react-router-dom";
// import Navbar from "../layoutComponent/Navbar";
import PostPage from "../pages/PostPage";
import ZinceProduct from "../pages/zincePage/ZinceProduct";
import ProductPage from "../pages/productPage/ProductPage";
import EdpPage from "../pages/edpComponent/EdpPage";
import Navbar2 from "../layoutComponent/Navbar2";
import ChromiumPage from "../pages/chromiumpage/ChromiumPage";
import Stamping from "../pages/stampimg/Stamping";
import History from "../pages/history/History";
import Contact from "../contact/Contact";
import AllProductPage from "../pages/allProduct/AllProductPage";
import Tooling from "../pages/tooling/Tooling";
function Router() {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar2 />
      <Routes>
        <>
          <Route path="/" element={<PostPage />} />
          <Route path="/MyService" element={<AllProductPage />} />
          <Route path="/PlatingProduct" element={<ProductPage />} />
          <Route path="/Zinc" element={<ZinceProduct />} />
          <Route path="/Edp" element={<EdpPage />} />
          <Route path="/Chromium" element={<ChromiumPage />} />
          <Route path="/Stamping&welding" element={<Stamping />} />
          <Route path="/AboutUs" element={<History />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Tooling" element={<Tooling />} />
        </>
      </Routes>
      {/* Sawasdee */}
    </>
  );
}

export default Router;
