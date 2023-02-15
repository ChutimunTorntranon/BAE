import React from "react";
import "../lineComponent/LineStyle.css";
import Slider from "./Slider";
function Component() {
  return (
    <div className="container mx-auto">
      <div className="grid xl:grid-cols-2 grid-cols-1">
        <div className="p-5 xl:my-20 my-4">
          <Slider />
        </div>
        <div className="p-2 grid">
          <div className="xl:my-20 p-3 Font2 xl:text-[21px] xl:text-left text-[15px] text-center">
            <p className="p-3 Font1 font-bold xl:text-[30px] xl:text-left text-[25px] text-center">
              เกี่ยวกับเรา
            </p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            เริ่มต้นย้อนประวัติกลับไปเมื่อประมาณ 70 ปีที่ผ่านมา
            บริษัทฯเริ่มต้นการดำเนินธุรกิจการชุบโครเมี่ยม
            โดยมีสำนักงานตั้งอยู่บริเวณเขตราชเทวี กรุงเทพมหานคร
            ลูกค้ารายหลักเป็นงานชุบกันชนรถยนต์ บังโคลนรถมอเตอร์ไซด์ HONDA
            โดยได้รับความไว้วางใจจากลูกค้าทั้งรายเล็กและรายใหญ่เรื่อยมาจนถึงปัจจุบัน
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;พ.ศ. 2534
            บริษัทฯจดทะเบียนและเริ่มดำเนินธุรกิจการชุบโลหะ ในนามของบริษัท ด.
            บุนนาค ชุบโครเมี่ยม จำกัด และในปี พ.ศ. 2536
            บริษัทฯจดทะเบียนและเริ่มดำเนินธุรกิจการผลิตชิ้นส่วนยานยนต์ ทั้งงาน
            Tool & Dies, Stamping Dies, Stamping Part, Assembly Part, Assembly
            Jig, Checking Fixture, Electro Plating & EDP ในนามของบริษัท บราเดอร์
            ออโต้พาร์ทส์ แอนด์ เอ็นจิเนียริ่ง จำกัด สำนักงานตั้งอยู่เลขที่ 10
            ซอยรามอินทรา 117 (ซอยเจริญพัฒนา แยก 2) ถนนรามอินทรา กม. 14
            แขวงมีนบุรี เขตมีนบุรี กรุงเทพฯ 10510
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            ปัจจุบันบริษัทฯได้รับความไว้วางใจจากลูกค้าเป็นอย่างดี
            ในการผลิตชิ้นส่วนยานยนต์ ไฟฟ้าและอื่นๆ ด้วยคุณภาพระดับสากล
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; จากวันนั้นถึงวันนี้
            เรามีการพัฒนาเทคโนโลยีและนวัตกรรมใหม่ๆ การพัฒนาบุคลากร
            และกระบวนการผลิตให้เทียบเท่ามาตรฐานต่างประเทศ เช่น ประเทศญี่ปุ่น
            รวมทั้งเราได้รับความไว้วางใจจากลูกค้าให้ผลิตชิ้นส่วนส่งออกไปอีกหลายประเทศ
            เช่น ประเทศสหรัฐอเมริกา
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
