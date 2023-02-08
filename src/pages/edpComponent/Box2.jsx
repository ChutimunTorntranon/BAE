import React from "react";
import ModalImage from "react-modal-image";
import "../lineComponent/LineStyle.css";
function Box2() {
  return (
    <div className="Box1 xl:mt-[20px] mt-[-1px]">
      <div className="container mx-auto">
        <div className="heading p-5 headFont">
          <strong>EDP คืออะไร? ดีกว่าสีพื้นทั่วไปอย่างไร?</strong>
        </div>
        <ul className="list-disc p-5">
          <li className="p-5 textScript">
            <strong>EDP ย่อมาจาก Electro Deposition Painting</strong> คือ
            เทคโนโลยีการชุบโลหะ ที่อาศัยกลไกทางไฟฟ้า
            วิธีนี้จะได้ผิวเคลือบที่เรียบ สามารถทนต่อการกัดกร่อนได้สูง
            ได้ความหนาของผิวเคลือบและเฉดสีที่สม่ำเสมอกัน
            เพิ่มแรงยึดเกาะให้ดีขึ้น นิยมใช้สำหรับการเคลือบวัสดุที่มีความซับซ้อน
            เช่น ชิ้นส่วนรถยนต์ ชิ้นส่วนอิเล็กทรอนิกส์ ฯลฯ
            ชุบโลหะด้วยไฟฟ้าสามารถชุบวัสดุได้หลากหลาย ทั้งเหล็ก อลูมิเนียม ซิงค์
            ฯลฯ
          </li>
          <li className="p-5 textScript">
            <strong>ข้อดีของการชุบ EDP ?</strong>
            <br></br>1. สามารถชุบผิวโลหะเรียบความหนาสม่ำเสมอได้ เคลือบได้ทุกส่วน
            ทั้งร่อง หรือซอกลึกที่ปกติ สเปรย์ฉีดได้ไม่ทั่วถึง<br></br>2. สามารถ
            ป้องกันสนิมได้อย่างมีประสิทธิภาพ
            <br></br>3. ไม่มีผลกระทบต่อสิ่งแวดล้อม
          </li>
        </ul>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto">
          <div className="grid xl:grid-cols-3 grid-cols-1 p-5">
            <ModalImage
              small={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/EDP-01.jpg"
              }
              large={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/EDP-01.jpg"
              }
              alt=""
              className="w-[400px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3"
            />
            <ModalImage
              small={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/EDP-02.jpg"
              }
              large={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/EDP-02.jpg"
              }
              alt=""
              className="w-[400px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3"
            />
            <ModalImage
              small={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/EDP-03.jpg"
              }
              large={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/EDP-03.jpg"
              }
              alt=""
              className="w-[400px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3"
            />
            <ModalImage
              small={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/EDP-04.jpg"
              }
              large={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/EDP-04.jpg"
              }
              alt=""
              className="w-[400px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3"
            />
            <ModalImage
              small={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/EDP-05.jpg"
              }
              large={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/EDP-05.jpg"
              }
              alt=""
              className="w-[400px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3"
            />
            <ModalImage
              small={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/EDP-06.jpg"
              }
              large={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/EDP-06.jpg"
              }
              alt=""
              className="w-[400px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box2;
