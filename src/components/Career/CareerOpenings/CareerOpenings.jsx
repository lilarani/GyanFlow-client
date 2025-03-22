import React from "react";
import { GrUserExpert } from "react-icons/gr";
import { GiMoneyStack } from "react-icons/gi";
import { AiOutlineSchedule } from "react-icons/ai";
import carrerData from "../../../../public/carrerOpening.json";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { FaArrowRightLong } from "react-icons/fa6";

const CareerOpenings = () => {
  return (
    <div id="career-openings" className="my-28 w-10/12 mx-auto">
      <h1 className="font-bold  my-4 text-3xl md:text-4xl lg:text-5xl text-center">
        Unlock Your Career Potential
      </h1>
      <p className="text-lg text-gray-800 text-center mb-10">
        Discover dynamic opportunities and build a rewarding career in an
        innovative and growth-driven environment!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {carrerData.map((data) => (
          <Card key={data.id}>
            <CardHeader>
              <CardTitle className="text-2xl">{data.job_title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div className="flex items-center gap-2 bg-[#E6F6F4] p-4 rounded-md">
                <GrUserExpert />
                <p className="font-bold">{data.experience} years experience</p>
              </div>
              {/* salary  */}
              <div className="flex items-center gap-2 bg-[#E6F6F4] p-4 rounded-md">
                <GiMoneyStack />
                <div>
                  <p className="font-bold">Tk. {data.salary}</p>
                  <p className="font-bold"></p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between text-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <AiOutlineSchedule />
                  <p className="font-bold">{data.date}</p>
                </div>
              </div>
              <button className="flex items-center gap-1">
                <p className="text-[#100239] font-bold">Details</p>
                <FaArrowRightLong />
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CareerOpenings;
