import React from "react";
import ModalImage from "react-modal-image";
function Box2() {
  return (
    <div className="Box1 xl:mt-[20px] mt-[-1px]">
      <div className="container mx-auto">
        <div className="heading p-5 hFont">
          <strong>Stamping การปั๊มขึ้นรูปโลหะคืออะไร?</strong>
        </div>
        <ul className="list-disc p-5">
          <li className="p-5 tFont">
            <strong>การปั๊มขึ้นรูปโลหะ</strong>
            เป็นหนึ่งในกระบวนการผลิตชิ้นส่วนโครงสร้างและส่วนประกอบของเครื่องใช้ไฟฟ้า
            รถยนต์ เครื่องบิน ไปจนถึงชิ้นส่วนของเครื่องจักรอุตสาหกรรมหลายชนิด
            เป็นขั้นตอนที่เกิดขึ้นหลังจากกระบวนการสกัด การหล่อและบดอัดผงโลหะ
            ซึ่งเมื่อผ่านการขึ้นรูปโลหะ จากโรงงานปั๊มขึ้นรูปโลหะแล้ว
            ก็จะเข้าสู่กระบวนการเจียร ขัด ทาสี จนได้ชิ้นงานโลหะ
            จากนั้นจึงนำไปทำการประกอบกับชิ้นส่วนต่างๆ เป็นต้น โดยทั่วไปแล้ว
            การปั๊มขึ้นรูปโลหะสามารถจำแนก
          </li>
          <li className="p-5 tFont">
            <strong>ข้อดีจากการกระบวนการปั๊ม Stamping ?</strong>
            ในทุกกระบวนการที่กล่าวมาข้างต้น
            การปั๊มจะเป็นกระบวนการที่ดีที่สุดจากทั้งหมด
            มีข้อได้เปรียบที่เหนือกว่า ไม่ว่าจะเป็นการหล่อ (casting)
            การทุบขึ้นรูป (forging) และการกัดแต่ง (machining)
            ซึ่งแบ่งข้อได้เปรียบออกเป็นดังนี้
            <li>ช่วยให้การขึ้นรูปชิ้นงานที่ซับซ้อนได้ง่ายขึ้นกว่าวิธีอื่นๆ</li>
            <li>หลังปั๊มแล้วไม่จำเป็นต้องทำการตกแต่งชิ้นงานแต่อย่างใด</li>
            <li>
              ชิ้นงานที่ผ่านการปั๊มจะเท่ากันทุกชิ้น
              สังเกตได้จากการนำเอาชิ้นงานมาประกอบ
            </li>
            <li>มีความแข็งแรงเพิ่มมากขึ้น รวมถึงคุณสมบัติทางกลอื่นๆ</li>
            <li>ตัวชิ้นงานมีน้ำหนักเบามาก</li>
            <li>อัตราการสามารถทำได้ในปริมาณสูง</li>
          </li>
        </ul>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 p-5">
            <ModalImage
              small={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/image-brother/P01.jpg"
              }
              large={
                "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/image-brother/P01.jpg"
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
