import React from "react";
import ModalImage from "react-modal-image";
function Team2() {
  return (
    <div className="p-5">
      <div className="container mx-auto grid grid-cols-4">
        <ModalImage
          small={
            "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/image-brother/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%AA%E0%B8%B3%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%87%E0%B8%B2%E0%B8%99.jpg"
          }
          large={
            "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/image-brother/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%AA%E0%B8%B3%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%87%E0%B8%B2%E0%B8%99.jpg"
          }
          alt=""
          className="w-[400px] h-[250px] mx-auto hover:scale-125 ease-in duration-500 p-3 "
        />
        <ModalImage
          small={
            "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/image-brother/p-nut-video-03.jpg"
          }
          large={
            "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/image-brother/p-nut-video-03.jpg"
          }
          alt=""
          className="w-[400px] h-[250px] mx-auto hover:scale-125 ease-in duration-500 p-3 "
        />
        <ModalImage
          small={
            "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/image-brother/p-nut-video-05.jpg"
          }
          large={
            "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/image-brother/p-nut-video-05.jpg"
          }
          alt=""
          className="w-[400px] h-[250px] mx-auto hover:scale-125 ease-in duration-500 p-3"
        />
        <ModalImage
          small={
            "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/image-brother/p-nut-video-06.jpg"
          }
          large={
            "https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/image-brother/p-nut-video-06.jpg"
          }
          alt=""
          className="w-[400px] h-[250px] mx-auto hover:scale-125 ease-in duration-500 p-3"
        />
      </div>
    </div>
  );
}

export default Team2;
