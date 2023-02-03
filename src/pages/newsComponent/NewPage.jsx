import React from "react";
import "./NewStyle.css";
import "../lineComponent/LineStyle.css";
function NewPage() {
  return (
    <div className="container mx-auto p-3">
      <div className="">
        <h1 className="p-3 headFont">ข่าวสารเกี่ยวกับเรา</h1>
      </div>

      <div class="p-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img
          className="rounded-t-lg"
          src="https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/edit-logo.png"
          alt=""
        />

        <div className="p-5 fontNav">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            SUISEI Production Control System
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 fontNav">
            ใช้ในสายการผลิตอุตสาหกรรมที่ก้าวสู่ ยุคอุตสาหกรรม 4.0
            เข้ามาสนับสนุนการพัฒนาโรงงานให้เป็น Smart Factory
            โดยมุ่งเน้นการเชื่อมต่อข้อมูลแบบ Realtime และสามารถ Monitor and
            Control สายการผลิตได้ถูกต้องและรวดเร็ว
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 fontNav">
            10/1/2022
          </p>
          <button
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 fontNav"
          >
            Read more
            <svg
              aria-hidden="true"
              class="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewPage;
