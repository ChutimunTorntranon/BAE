import React from "react";
import ModalImage from "react-modal-image";
function Box2() {
  return (
    <div className="Box1 xl:mt-[20px] mt-[-1px]">
      <div className="container mx-auto">
        <div className="heading p-5">
          <strong>Chromium การชุบโครเมี่ยม คืออะไร?</strong>
        </div>
        <ul className="list-disc p-5">
          <li className="p-5">
            <strong>chrome plating</strong> คือ เทคโนโลยีการชุบโลหะ
            ที่อาศัยกลไกทางไฟฟ้า วิธีนี้จะได้ผิวเคลือบที่เรียบ
            สามารถทนต่อการกัดกร่อนได้สูง
            ได้ความหนาของผิวเคลือบและเฉดสีที่สม่ำเสมอกัน
            เพิ่มแรงยึดเกาะให้ดีขึ้น นิยมใช้สำหรับการเคลือบวัสดุที่มีความซับซ้อน
            เช่น ชิ้นส่วนรถยนต์ ชิ้นส่วนอิเล็กทรอนิกส์ ฯลฯ
            ชุบโลหะด้วยไฟฟ้าสามารถชุบวัสดุได้หลากหลาย ทั้งเหล็ก อลูมิเนียม ซิงค์
            ฯลฯ
          </li>
          <li className="p-5">
            <strong>ข้อดีของการชุบ Chromium ?</strong>
            ช่วยให้วัสดุที่ได้รับการชุบมีความเงาสวยงาม
            ป้องกันการถลอกจากการกัดกร่อนและการกระแทก
          </li>
        </ul>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 p-5">
            <ModalImage
              small={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Chromium9.jpg"
              }
              large={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Chromium9.jpg"
              }
              alt=""
              className="w-[400px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3"
            />
            <ModalImage
              small={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Chromium8.jpg"
              }
              large={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Chromium8.jpg"
              }
              alt=""
              className="w-[400px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3"
            />
            <ModalImage
              small={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Chromium7.jpg"
              }
              large={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Chromium7.jpg"
              }
              alt=""
              className="w-[400px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3"
            />
            <ModalImage
              small={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Chromium6.jpg"
              }
              large={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Chromium6.jpg"
              }
              alt=""
              className="w-[400px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3"
            />
            <ModalImage
              small={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Chromium5.jpg"
              }
              large={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Chromium5.jpg"
              }
              alt=""
              className="w-[400px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3"
            />
            <ModalImage
              small={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Chromium4.jpg"
              }
              large={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Chromium4.jpg"
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
