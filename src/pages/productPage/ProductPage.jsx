import React from "react";
import "./Productpage.css";
import { Link } from "react-router-dom";
import Footer from "../../footer/Footer";
import GoToTop from "../../component/GoToTop";

function ProductPage() {
  return (
    <div className="">
      <div className="w-full h-[200px] bg-indigo-600">
        <div className="container grid mx-auto h-full">
          <div className="mx-auto my-auto Zince">SERVICE</div>
        </div>
        <div className="grid grid-cols-1 sm:mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto p-1">
          <Link to="/Stamping&welding">
            <div className="m-auto relative xl:w-[450px] xl:h-[690px] w-[350px] cursor-pointer">
              <img
                src="https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Parts04.png"
                alt="zinc"
                className="image__img"
              ></img>
              <div className="image__overlay image__overlay--blur">
                Stamp & welding
              </div>
            </div>
          </Link>
          <Link to="/Zinc">
            <div className="m-auto relative xl:w-[450px] xl:h-[690px] w-[350px] cursor-pointer">
              <img
                src="https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Parts04.png"
                alt="zinc"
                className="image__img"
              ></img>
              <div className="image__overlay image__overlay--blur">ZINC</div>
            </div>
          </Link>
          <Link to="/Edp">
            <div className="m-auto relative xl:w-[450px] xl:h-[690px] w-[350px] cursor-pointer">
              <img
                src="https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/EDP-09.png"
                alt="edp"
                className="image__img"
              ></img>
              <div className="image__overlay image__overlay--blur">EDP</div>
            </div>
          </Link>
          <Link to="/Chromium">
            <div className="m-auto relative xl:w-[450px] xl:h-[690px] w-[350px] cursor-pointer">
              <img
                src="https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Chromium1.jpg"
                alt="Chromium"
                className="image__img"
              ></img>
              <div className="image__overlay image__overlay--blur">
                Chromium
              </div>
            </div>
          </Link>
          {/* <Link>
						<div className='image cursor-pointer'>
							<img
								src='https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Chromium.png'
								alt='zince'
								className='image__img'
							></img>
							<div className='image__overlay image__overlay--blur'>
								CHROMIUM
							</div>
						</div>
					</Link> */}
        </div>
        <Footer />
        <GoToTop />
      </div>
    </div>
  );
}

export default ProductPage;
