import React from "react";

function Component() {
  return (
    <div className="container mx-auto p-5">
      <div className="grid grid-cols-2">
        <div className="p-5 my-16">
          <img
            src="https://img.freepik.com/free-photo/industrial-park-factory-building-warehouse_1417-1940.jpg?w=996&t=st=1675646078~exp=1675646678~hmac=45853428c15b05fa2ebba77ece81ab1a0cba9e08bb236fffcb088ed628b8e2c9"
            alt=""
            className="shadow-black shadow-2xl rounded-sm"
          />
        </div>
        <div className="p-5 grid ">
          <p className="text-[24px] my-36">
            <div className="text-[45px] mx-auto my-auto">เกี่ยวกับเรา</div>
            &nbsp;&nbsp;&nbsp;&nbsp;บริษัท บราเดอร์ ออโต้พาร์ทส์ แอนด์
            เอ็นจิเนียริ่ง จำกัด
            ดำเนินธุรกิจผลิตชิ้นส่วนยานยนต์(โลหะ)และด้านอิเล็กทรอนิกส์(โลหะ)
            โดยดำเนินการก่อตั้งเมื่อวันที่ 23 กันยายน 2536 ด้วยทุนจดทะเบียน 30
            ล้านบาท นับจากอดีตจนถึงปัจจุบันเป็นเวลา 15 ปี
            ที่เราได้รับความไว้วางใจจากลูกค้าเป็นอย่างดี เช่น
            Mitsubishi,Honda,Nissan,Hitachi,Emerson
            <br />
            ,Asia Pacific CIS ประกอบกับมีทีมบุคลากรที่แข็งแกร่ง
            ส่งผลให้บริษัทพัฒนาต่อไปในอนาคตอย่างต่อเนื่องไม่หยุดยั้ง
          </p>
        </div>
      </div>
    </div>
  );
}

export default Component;
