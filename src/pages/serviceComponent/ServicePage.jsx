import React from "react";
import "./Servicepage.css";
import { Link } from "react-router-dom";
import "../../layoutComponent/Navbar.css";
import "../lineComponent/LineStyle.css";
function ServicePage() {
  return (
    <div className="container mx-auto">
      <div className="hFont container mx-auto xl:text-center text-left p-3">
        OUR SERVICE
      </div>

      <div className="grid grid-cols-1 sm:mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container mx-auto p-3">
        <Link to="/Stamping&welding">
          <div className="image cursor-pointer">
            <img
              src="https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Parts04.png"
              alt="Zinc"
              className="image__img"
            ></img>
            <div className="image__overlay image__overlay--blur">
              Stamp & welding
            </div>
          </div>
        </Link>
        <Link to="/Zinc">
          <div className="image cursor-pointer">
            <img
              src="https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Parts04.png"
              alt="Zinc"
              className="image__img"
            ></img>
            <div className="image__overlay image__overlay--blur">ZINC</div>
          </div>
        </Link>
        <Link to="/EDP">
          <div className="image cursor-pointer">
            <img
              src="https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/EDP-09.png"
              alt="EDP"
              className="image__img"
            ></img>
            <div className="image__overlay image__overlay--blur">EDP</div>
          </div>
        </Link>
        <Link to="/Chromium">
          <div className="image cursor-pointer">
            <img
              src="https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Chromium1.jpg"
              alt="Chromium"
              className="image__img"
            ></img>
            <div className="image__overlay image__overlay--blur">CHROMIUM</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ServicePage;
