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
      <div className="w-full xl:h-[200px] h-[120px] bg-indigo-600">
        <div className="container grid mx-auto h-full">
          <div className="mx-auto my-auto Zince xl:text-[50px] text-[22px]">
            Contact Us
          </div>
        </div>
        <div className="mx-auto grid xl:grid-cols-3 grid-cols-1 p-5">
          <div className="my-auto bg-indigo-500 p-5 text-white shadow-2xl xl:w-[650px] xl:h-[630px] w-[350px] h-[350px] text-center xl:ml-[80px] 2xl:mt-12 mt-10">
            <div className="headFont xl:mt-20">
              <p className="2xl:text-[20px] text-[13px]">
                BROTHER AUTO PARTS & ENGINEERING CO,.LTD
                <br />
                บริษัท บราเดอร์ ออโต้พาร์ทส์ แอนด์ เอ็นจิเนียริ่ง จำกัด
              </p>
            </div>
            <br />
            <div className="p-2 flex headFont xl:ml-20">
              <BiMap className="2xl:w-[30px] 2xl:h-[30px] w-[20px] h-[20px]" />
              <p className="2xl:text-[20px] text-[13px]">
                &nbsp;: 10 รามอินทรา 117 แยก 2 ถนนรามอินทรา
                <br /> แขวงมีนบุรี เขตมีนบุรี กรุงเทพมหานคร 10510
              </p>
            </div>
            <div className="p-2 flex headFont xl:ml-20">
              <CiAlarmOn className="2xl:w-[30px] 2xl:h-[30px] w-[20px] h-[20px]" />
              <p className="2xl:text-[20px] text-[13px]">
                &nbsp;: Mon - Sat : 8.00 - 17.00
              </p>
            </div>
            <div className="p-2 flex headFont xl:ml-20">
              <GoDeviceMobile className="2xl:w-[30px] 2xl:h-[30px] w-[20px] h-[20px]" />
              <p className="2xl:text-[20px] text-[13px]">
                &nbsp;: 086-306-3746 คุณสมชาติ (โอ๋)
              </p>
            </div>
            <div className="p-2 flex headFont xl:ml-20">
              <SiGmail className="2xl:w-[30px] 2xl:h-[30px] w-[20px] h-[20px]" />
              <p className="2xl:text-[20px] text-[13px]">
                &nbsp; : salesmarketing@baethai.com
              </p>
            </div>
            <div className="p-2 flex headFont xl:ml-20">
              <FaLine className="2xl:w-[30px] 2xl:h-[30px] w-[20px] h-[20px]" />
              <p className="2xl:text-[20px] text-[13px]">&nbsp;: @263pijuz</p>
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
