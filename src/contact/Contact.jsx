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
    <div className="mt-[20%] xl:mt-[7%]">
      <div className="w-full h-[200px] bg-indigo-600">
        <div className="container grid mx-auto h-full">
          <div className="mx-auto my-auto Zince">Contact Us</div>
        </div>
        <div className="mx-auto container grid grid-cols-3 p-5">
          <div className="my-auto bg-indigo-500 shadow-xl p-5 text-white">
            <div className="headFont">
              BROTHER AUTO PARTS & ENGINEERING CO,.LTD <br /> บริษัท บราเดอร์
              ออโต้พาร์ทส์ แอนด์ เอ็นจิเนียริ่ง จำกัด
            </div>
            <br />
            <div className="p-2 flex textScript">
              <BiMap className="w-[25px] h-[25px] " />: 10 รามอินทรา 117 แยก 2
              ถนนรามอินทรา <br />
              แขวงมีนบุรี เขตมีนบุรี กรุงเทพมหานคร 10510
            </div>
            <div className="p-2 flex textScript">
              <CiAlarmOn className="w-[25px] h-[25px] " />: Mon - Sat : 8.00 -
              17.00
            </div>
            <div className="p-2 flex textScript">
              <GoDeviceMobile className="w-[25px] h-[25px] " />: 086-306-3746
              คุณสมชาติ (โอ๋)
            </div>
            <div className="p-2 flex textScript">
              <SiGmail className="w-[25px] h-[25px] " />:
              salesmarketing@baethai.com
            </div>
            <div className="p-2 flex textScript">
              <FaLine className="w-[25px] h-[25px] " />: @263pijuz
            </div>
          </div>
          <div>
            <Component1 />
          </div>
          <div>
            <Component2 />
          </div>
        </div>
        <FooterContact />
      </div>
    </div>
  );
}

export default Contact;
