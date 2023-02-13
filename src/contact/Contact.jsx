import React from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";

import { CiAlarmOn } from "react-icons/ci";
import { GoDeviceMobile } from "react-icons/go";
import { SiGmail } from "react-icons/si";
import { FaLine } from "react-icons/fa";
import { BiMap } from "react-icons/bi";
import "./text.css";
import FooterContact from "./FooterContact";

function Contact() {
  return (
    <div className="">
      <div className="w-full h-[200px] bg-indigo-600">
        <div className="container grid mx-auto h-full">
          <div className="mx-auto my-auto Zince">Contact Us</div>
        </div>
        <div className="mx-auto grid xl:grid-cols-3 grid-cols-1 p-5 ">
          <div className="my-auto bg-indigo-500 p-5 text-white shadow-2xl xl:w-[650px] xl:h-[630px] w-[400px] h-[300px] text-center ml-[80px] mt-14">
            <div className="headFont">
              BROTHER AUTO PARTS & ENGINEERING CO,.LTD <br /> บริษัท บราเดอร์
              ออโต้พาร์ทส์ แอนด์ เอ็นจิเนียริ่ง จำกัด
            </div>
            <br />
            <div className="p-2 flex textScript ">
              <BiMap className="w-[30px] h-[30px]" />
              &nbsp;: 10 รามอินทรา 117 แยก 2 ถนนรามอินทรา
              <br /> แขวงมีนบุรี เขตมีนบุรี กรุงเทพมหานคร 10510
            </div>
            <div className="p-2 flex textScript">
              <CiAlarmOn className="w-[30px] h-[30px] " /> &nbsp;: Mon - Sat :
              8.00 - 17.00
            </div>
            <div className="p-2 flex textScript">
              <GoDeviceMobile className="w-[30px] h-[30px] " /> &nbsp;:
              086-306-3746 คุณสมชาติ (โอ๋)
            </div>
            <div className="p-2 flex textScript">
              <SiGmail className="w-[30px] h-[30px] " />
              &nbsp; : salesmarketing@baethai.com
            </div>
            <div className="p-2 flex textScript">
              <FaLine className="w-[30px] h-[30px] " /> &nbsp;: @263pijuz
            </div>
          </div>
          <div className="mx-auto">
            <Component1 />
          </div>
          <div className="mx-auto">
            <Component2 />
          </div>
        </div>
        <FooterContact />
      </div>
    </div>
  );
}

export default Contact;
