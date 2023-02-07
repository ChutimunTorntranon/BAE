import React from "react";
import "../lineComponent/LineStyle.css";
function Team() {
  return (
    <div className="container mx-auto p-5">
      <div className="p-5 text-center font-bold text-[50px] headFont">
        คณะกรรมการผู้บริหาร
      </div>
      <div className="grid xl:grid-cols-3 grid-cols-1 p-5">
        <div>
          <img
            src="https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/image-brother/mr.parada.png"
            alt=""
            className="w-[300px] h-[300px] mx-auto  hover:scale-125 ease-in duration-500 rounded-lg"
          />
          <div className="p-3 text-center textCEO">K.Parada Bunnag</div>
          <div className="p-3 text-center textScript1">
            Chief Executive Officer (CEO)
          </div>
        </div>
        <div>
          <img
            src="https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/image-brother/miss.patcharee.png"
            alt=""
            className="w-[300px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 rounded-lg"
          />
          <div className="p-3 text-center textCEO">K.Patcharee Bunnag</div>
          <div className="p-3 text-center textScript1">
            Chief Operating Officer (COO)
          </div>
        </div>
        <div>
          <img
            src="https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/image-brother/P'Bhon.jpg"
            alt=""
            className="w-[300px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 rounded-lg"
          />

          <div className="p-3 text-center textCEO">K.Bhon Bunnag </div>
          <div className="p-3 text-center textScript1">
            Chief Technology Officer (CTO)
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
