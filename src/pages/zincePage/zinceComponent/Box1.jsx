import React from "react";
import ModalImage from "react-modal-image";
import "../../lineComponent/LineStyle.css";
function Box1() {
  return (
    <div className="Box1 xl:mt-[20px] mt-[-1px]">
      <div className="container mx-auto">
        <div className="p-3 Font1 font-bold xl:text-[30px] xl:text-left text-[20px] text-center">
          <strong>ข้อดีของการชุบสังกะสีด้วยสังกะสีอัลคาไลน์</strong>
        </div>
        <ul className="list-disc p-5">
          <li className="p-3 Font2 xl:text-[21px] xl:text-left text-[15px] text-left">
            การชุบสังกะสีเป็นเครื่องมือที่เหมาะสมอย่างยิ่งสำหรับการปกป้องเหล็กและผลิตภัณฑ์เหล็กกล้าจากการกัดกร่อน
            พันธะทางโลหะวิทยาระหว่างสังกะสีและเหล็กกล้าช่วยให้สังกะสีสามารถกัดกร่อนได้ดีกว่า
            และด้วยเหตุนี้จึงปกป้องเหล็กหรือเหล็กกล้าจากการเกิดสนิม
            หลักการพื้นฐานเบื้องหลังการชุบโลหะด้วยไฟฟ้าคือกระบวนการเคลือบชั้นโลหะบนฐานโลหะโดยใช้ไฟฟ้ากระแสตรงผ่านสารละลายอิเล็กโทรไลต์
            สังกะสีเป็นหนึ่งในโลหะที่เคลือบผิวได้ง่ายที่สุด
            ช่วยป้องกันการกัดกร่อนได้ดีโดยไม่ต้องใช้สารเคมีแปลกใหม่
            พื้นผิวสามารถขัดเงาเพื่อให้มีความ <strong>แวววาว</strong> เกือบ{" "}
            <strong>เท่าโครเมียม</strong>
          </li>
          <li className="p-3 Font2 xl:text-[21px] xl:text-left text-[15px] text-left">
            นอกจากนี้
            การชุบผิวด้วยสังกะสียังให้พื้นผิวที่เรียบและสว่างกว่าในเวลาอันสั้นกว่าการชุบสังกะสีแบบจุ่มร้อนซึ่งชิ้นส่วนเหล็กจะถูกแปรรูปในอ่างสังกะสีหลอมเหลว
            ตัวเลือกสังกะสีอัลคาไลน์ให้ความคุ้มครองที่สม่ำเสมอและเชื่อถือได้เมื่อเทียบกับกรดสังกะสีพร้อมความสว่างที่ดี
          </li>
          <li className="p-3 Font2 xl:text-[21px] xl:text-left text-[15px] text-left">
            การชุบสังกะสีถูกใช้อย่างแพร่หลายในอุตสาหกรรมยานยนต์และการใช้งานทางทหาร
            โดยส่วนใหญ่จะใช้กับเหล็กกล้า แต่ใช้ได้กับอะลูมิเนียม ทองแดง
            หรือทองเหลืองที่มีการเคลือบผิวล่วงหน้าเป็นพิเศษ
            สีมักจะนำเสนอเป็นสีใส (สีขาว) สีรุ้ง สีเขียว หรือสีดำ
            ตามประเภทของการเคลือบภายหลังการชุบ
          </li>
        </ul>
      </div>
      <div className="bg-gray-100">
        <div className="grid xl:grid-cols-3 container mx-auto">
          <ModalImage
            small={
              "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Parts01.jpg"
            }
            large={
              "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Parts01.jpg"
            }
            alt=""
            className="w-[400px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3"
          />
          <ModalImage
            small={
              "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Parts02.jpg"
            }
            large={
              "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Parts02.jpg"
            }
            alt=""
            className="w-[400px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3"
          />
          <ModalImage
            small={
              "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Parts13.png"
            }
            large={
              "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Parts13.png"
            }
            alt=""
            className="w-[400px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3"
          />
          <ModalImage
            small={
              "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Parts06.jpg"
            }
            large={
              "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Parts06.jpg"
            }
            alt=""
            className="w-[400px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3"
          />
          <ModalImage
            small={
              "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Parts11.jpg"
            }
            large={
              "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Parts11.jpg"
            }
            alt=""
            className="w-[400px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3"
          />
          <ModalImage
            small={
              "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Parts10.jpg"
            }
            large={
              "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Parts10.jpg"
            }
            alt=""
            className="w-[400px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3"
          />
        </div>
      </div>
    </div>
  );
}

export default Box1;
