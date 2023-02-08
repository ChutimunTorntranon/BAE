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
            src="https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/logo-bae/MicrosoftTeams-image.png"
            alt=""
            className="mx-auto w-[120px] h-[120px] xl:w-[160px] xl:h-[160px] my-auto"
          />
        </div>
        <div className="mx-auto container p-3">
          <h1 className="p-2 fhFont">
            บริษัท บราเดอร์ ออโต้พาร์ทส์ แอนด์ เอ็นจิเนียริ่ง จำกัด
          </h1>
          <div className="p-2 flex ftFont">
            <FaMapMarkerAlt className="w-[50px] mt-1" /> : 10 รามอินทรา 117 แยก
            2 ถนนรามอินทรา แขวงมีนบุรี เขตมีนบุรี กรุงเทพมหานคร 10510
          </div>
          <div className="p-2 flex ftFont">
            <AiOutlineClockCircle className="w-[50px] mt-1" />: Mon - Sat : 8.00
            - 17.00
          </div>
        </div>
        <div className="mx-auto container p-3">
          <h1 className="p-2 fhFont">Contact Us (ติดต่อเรา)</h1>
          <div className="p-2 flex ftFont">
            <BsFillTelephoneFill className="w-[50px] mt-1 " /> : 086-306-3746
            คุณสมชาติ (โอ๋)
          </div>
          <div className="p-2 flex ftFont">
            <FiMail className="w-[50px] mt-1 " /> : salesmarketing@baethai.com
          </div>
          <div className="p-2 flex ftFont">
            <FaLine className="w-[50px] mt-1 " /> : @263pijuz
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
