import React from "react";

function Team() {
  return (
    <div className="container mx-auto p-5">
      <div className="p-5 text-center font-bold text-[50px]">
        คณะกรรมการผู้บริหาร
      </div>
      <div className="grid grid-cols-3">
        <div>
          <img
            src="https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/image-brother/mr.parada.png"
            alt=""
            className="w-[300px] h-[300px] mx-auto shadow-black shadow-2xl rounded-sm"
          />
          <div className="p-3 text-center">K.Parada Bunnag</div>
          <div className="p-3 text-center">Chief Executive Officer (CEO)</div>
        </div>
        <div>
          <img
            src="https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/image-brother/miss.patcharee.png"
            alt=""
            className="w-[300px] h-[300px] mx-auto shadow-black shadow-2xl rounded-sm"
          />
          <div className="p-3 text-center">K.Patcharee Bunnag</div>
          <div className="p-3 text-center">Chief Operating Officer (COO)</div>
        </div>
        <div>
          <img
            src="https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/image-brother/P'Bhon.jpg"
            alt=""
            className="w-[300px] h-[300px] mx-auto shadow-black shadow-2xl rounded-sm"
          />

          <div className="p-3 text-center">K.Bhon Bunnag </div>
          <div className="p-3 text-center">Chief Technology Officer (CTO)</div>
        </div>
      </div>
    </div>
  );
}

export default Team;
