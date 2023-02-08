import React from "react";
import "./../../layoutComponent/Navbar.css";
import ModalImage from "react-modal-image";
import "../lineComponent/LineStyle.css";
function CerPage() {
  return (
    <div className="container mx-auto">
      <div className="container mx-auto">
        <div className="p-3 text-center hFont">
          ใบรับรองมาตรฐาน / ​Certificates
        </div>
        <div className="grid grid-cols-5">
          <div className="hover:shadow-2xl duration-500 ease-in">
            <ModalImage
              small={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Cer1.jpg"
              }
              large={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Cer1.jpg"
              }
              alt=""
              className="w-[400px] h-[400px] mx-auto p-5"
            />
            <div className="text-center tFont">ISO 9001:2015</div>
          </div>
          <div className="hover:shadow-2xl duration-500 ease-in">
            <ModalImage
              small={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Cer2.jpg"
              }
              large={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Cer2.jpg"
              }
              alt=""
              className="w-[400px] h-[400px] mx-auto p-5"
            />
            <div className="text-center tFont">ISO 9001:2015</div>
          </div>
          <div className="hover:shadow-2xl duration-500 ease-in">
            <ModalImage
              small={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Cer4.jpg"
              }
              large={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Cer4.jpg"
              }
              alt=""
              className="w-[400px] h-[400px] mx-auto p-5"
            />
            <div className="text-center tFont">IATF 16949:2016</div>
          </div>
          <div className="hover:shadow-2xl duration-500 ease-in">
            <ModalImage
              small={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Cer5.jpg"
              }
              large={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Cer5.jpg"
              }
              alt=""
              className="w-[400px] h-[400px] mx-auto p-5"
            />
            <div className="text-center tFont">ISO 14001:2015</div>
          </div>
          <div className="hover:shadow-2xl duration-500 ease-in">
            <ModalImage
              small={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Cer6.jpg"
              }
              large={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Cer6.jpg"
              }
              alt=""
              className="w-[400px] h-[400px] mx-auto p-5"
            />
            <div className="text-center tFont">IATF 16949:2016</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CerPage;
