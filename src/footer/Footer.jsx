import React from "react";
import { FaMapMarkerAlt, FaLine } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { AiOutlineClockCircle } from "react-icons/ai";
import "../layoutComponent/Navbar.css";
function Footer() {
  return (
    <div className="bg-gray-200">
      <div className="my-auto grid mx-auto container gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="container my-auto">
          <img
            src="https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Logobae.png"
            alt=""
            className="mx-auto w-[120px] h-[120px] xl:w-[160px] xl:h-[160px] my-auto"
          />
        </div>
        <div className="mx-auto container">
          <h1 className="p-3 fontNav">
            บริษัท บุนนาค อินดัสเตรียล เทคโนโลยี แอนด์ ซอฟต์แวร์
          </h1>
          <div className="p-3 flex fontNav">
            <FaMapMarkerAlt className="w-[50px] mt-1" /> : 10 รามอินทรา 117 แยก
            2 ถนนรามอินทรา แขวงมีนบุรี เขตมีนบุรี กรุงเทพมหานคร 10510
          </div>
          <div className="p-3 flex fontNav">
            <AiOutlineClockCircle className="w-[50px] mt-1" />
            เวลาทำการ : Mon - Sat : 8.00 - 17.00
          </div>
        </div>
        <div className="mx-auto container">
          <h1 className="p-3 fontNav">Contact Us (ติดต่อเรา)</h1>
          <div className="p-3 flex">
            <BsFillTelephoneFill className="w-[50px] mt-1 fontNav" /> :
            083-101-8704 คุณ ณัฐดนัย (ฟิวส์)
          </div>
          <div className="p-3 flex">
            <FiMail className="w-[50px] mt-1 fontNav" /> :
            sale.software@baethai.com
          </div>
          <div className="p-3 flex">
            <FaLine className="w-[50px] mt-1 fontNav" /> : sale.bitsoft
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
