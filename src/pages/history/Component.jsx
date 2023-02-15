import React from "react";
import "../lineComponent/LineStyle.css";
import Slider from "./Slider";
function Component() {
  return (
    <div className="container mx-auto p-5">
      <div className="grid xl:grid-cols-2 grid-cols-1">
        <div className="p-5 xl:my-16 my-4">
          <Slider />
        </div>
        <div className="p-5 grid">
          <div className="xl:my-64 tFont">
            <div className="text-[45px] mx-auto my-auto hFont">
              เกี่ยวกับเรา
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;บริษัท บราเดอร์ ออโต้พาร์ทส์
            แอนด์ เอ็นจิเนียริ่ง จำกัด
            ดำเนินธุรกิจผลิตชิ้นส่วนยานยนต์และด้านอิเล็กทรอนิกส์
            โดยดำเนินการก่อตั้งเมื่อวันที่ 23 กันยายน 2536 ด้วยทุนจดทะเบียน 30
            ล้านบาท นับจากอดีตจนถึงปัจจุบันเป็นเวลา 15 ปี
            ที่เราได้รับความไว้วางใจจากลูกค้าเป็นอย่างดี เช่น{" "}
            Mitsubishi,Honda,Nissan,Hitachi,Emerson,Asia Pacific CIS
            ประกอบกับมีทีมบุคลากรที่แข็งแกร่ง
            ส่งผลให้บริษัทพัฒนาต่อไปในอนาคตอย่างต่อเนื่องไม่หยุดยั้ง
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
