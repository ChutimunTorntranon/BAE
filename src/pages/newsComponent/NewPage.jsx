import React from "react";
import "./NewStyle.css";

function NewPage() {
  return (
    <div className="container mx-auto p-3">
      <div className="">
        <h1 className="p-3 hFont">ข่าวสารเกี่ยวกับเรา</h1>
      </div>

      <div class="p-3 max-w-sm bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl duration-300 ease-in">
        <img
          className="rounded-t-lg mx-auto"
          src="https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/edit-logo.png"
          alt=""
        />

        <div className="p-5 fontNav">
          <h5 className="mb-2 text-xl tracking-tight nhFont">
            SUISEI Production Control System
          </h5>

          <p className="mb-3 font-normal nfFont">
            ใช้ในสายการผลิตอุตสาหกรรมที่ก้าวสู่ ยุคอุตสาหกรรม 4.0
            เข้ามาสนับสนุนการพัฒนาโรงงานให้เป็น Smart Factory
            โดยมุ่งเน้นการเชื่อมต่อข้อมูลแบบ Realtime และสามารถ Monitor and
            Control สายการผลิตได้ถูกต้องและรวดเร็ว
          </p>
          <p className="mb-3 font-normal nfFont">10/1/2022</p>
          <a href="https://bitsoft.app/">https://bitsoft.app/</a>
        </div>
      </div>
    </div>
  );
}

export default NewPage;
