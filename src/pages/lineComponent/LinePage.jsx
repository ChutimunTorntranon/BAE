import React from "react";
import "./LineStyle.css";

function LinePage() {
  return (
    <div className="container mx-auto p-5">
      <div className="grid xl:grid-cols-3 grid-cols-1">
        <div>
          <iframe
            className="rounded-3xl my-10 mx-auto xl:w-[450px]"
            width="350"
            height="255"
            src="https://www.youtube.com/embed/aKyZu7ayEnc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div>
            <div className="p-3 hFont">Stamping</div>
            <div className="p-3 tFont">
              ในระบบการผลิตในส่วนของงาน Stamping สายการผลิต 200 Ton
              เพื่อผลิตชิ้นส่วน ในกลุ่มของงาน เช่น Engine Parts,Chassis Parts
              ,Exhaust Parts
              เราได้นำหุ่นยนต์เข้ามาช่วยในระบบการผลิตเพื่อเป็นการเพิ่มประสิทธิภาพในการผลิตให้แม่นยำมากยิ่งขึ้น
            </div>
          </div>
        </div>
        <div>
          <iframe
            className="rounded-3xl my-10 mx-auto xl:w-[450px]"
            width="350"
            height="255"
            src="https://www.youtube.com/embed/pcRCEHXrwyw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div>
            <div className="p-3 hFont">Spot welding</div>
            <div className="p-3 tFont">
              การเชื่อม spot welding เป็นการเชื่อม resistance
              ชนิดหนึ่งที่เป็นที่นิยมใช้งานเชื่อมต่อแผ่นโลหะที่วาง
              ซ้อนกันโดยมีความหนาได้ถึง 3 มิลลิเมตร ในการเชื่อมนั้น
              อิเล็กโทรดสองชิ้นจะทำหน้าที่นำกระแสไฟฟ้าเข้าสู่ ชิ้นงานและ
              กดชิ้นงานในเวลาเดียวกัน ข้อดีของกระบวนการนี้คือ ใช้พลังงานน้อย
              และไม่ทำให้ชิ้นงานเสียรูป ทำงานได้เร็ว ทำเป็นระบบอัติโนมัติได้ง่าย
              และไม่จำเป็นต้องใช้ลวดเติม
            </div>
          </div>
        </div>
        <div>
          <iframe
            className="rounded-3xl my-10 mx-auto xl:w-[450px]"
            width="350"
            height="255"
            src="https://www.youtube.com/embed/v6OUbchctV0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div>
            <div className="p-3 hFont">Arc welding</div>
            <div className="p-3 tFont">
              Arc welding
              กระบวนการเชื่อมโดยใช้หุ่นยนต์ในระบบการผลิตในส่วนของงานเชื่อมเราใช้หุ่นยนต์ในระบบการผลิตเพื่อเพิ่มประสิทธิภาพในการผลิตชิ้นส่วนให้มีความถูกต้องตรงตามความต้องการและมาตราฐานที่ลูกค้ากำหนดของลูกค้า
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LinePage;
