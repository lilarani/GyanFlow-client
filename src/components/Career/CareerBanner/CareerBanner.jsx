import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const CareerBanner = () => {
  return (
    <div className="relative bg-[url('https://i.ibb.co.com/B5KK8mdt/confident-applicant-being-judged-by-interviewing-hr-managers.jpg')] object-cover bg-cover bg-no-repeat w-full min-h-[500px]">
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 to-transparent"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="flex items-center justify-center border rounded-full bg-white gap-1 h-8 w-24 my-6">
          <img
            className="w-6"
            src="https://img.icons8.com/?size=160&id=VfcK55OADyK5&format=png"
            alt=""
          />
          <p className="text-base font-semibold">Jobs</p>
        </span>
        <div className="text-white  space-y-3">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl">
            Empower <span className="text-blue-600">Your Career</span>
          </h1>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl">
            Journey with Us
          </h1>
          <p className="text-xl">For Any Queries Email:</p>
          <p className="text-xl font-bold">hr@gyanflow.com</p>
          <button className="flex items-center mx-auto gap-2 my-2 mt-6 p-2 hover:border hover:border-white">
            <span className="border border-white rounded-full p-1 hover:border-none">
              <FaArrowRightLong className="text-xl"/>
            </span>

            <p>Open Positions</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerBanner;
