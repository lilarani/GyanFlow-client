import React from "react";
import CountUp from "react-countup";
const Impact = () => {
  return (
    <div className="flex  flex-col md:flex-row text-center items-center justify-center gap-6 md:gap10 border-t border-b border-gray-300 p-10 bg my-16 bg-[#0f172a]">
      <div className=" border-gray-200 p-10">
        <CountUp
          className="text-[#facc15] text-5xl font-bold"
          start={0}
          end={889}
          duration={3}
          delay={0}
          suffix="+"
        />
        <p className="text-2xl text-[#e2e8f0] mt-2">Students</p>
      </div>
      <div className="md:h-32 w-4/5 md:w-0 md:border-l-2 border-gray-300"></div>
      <div className=" border-gray-200 p-10 ">
        <CountUp
          className="text-[#06b6d4] text-5xl font-bold"
          start={0}
          end={400}
          duration={3}
          delay={0}
          suffix="+"
        />
        <p className="text-2xl text-[#e2e8f0] mt-2">Job Placement</p>
      </div>
      <div className="md:h-32 w-4/5 md:w-0 md:border-l-2 border-gray-300"></div>
      <div className=" border-gray-200 p-10 ">
        <CountUp
          className="text-[#22c55e] text-5xl font-bold"
          start={0}
          end={400}
          duration={3}
          delay={0}
          suffix="+"
        />
        <p className="text-2xl text-[#94a3b8] mt-2">Job Placement</p>
      </div>
      <div className="md:h-32 w-4/5 md:w-0 md:border-l-2 border-gray-300"></div>

      <div className=" border-gray-200 p-10">
        <CountUp
          className="text-[#a78bfa] text-5xl font-bold"
          start={0}
          end={50}
          duration={3}
          delay={0}
        />

        <p className="text-2xl text-[#f1f5f9] mt-2">Instructors</p>
      </div>
      <div className="md:h-32 w-4/5 md:w-0 md:border-l-2 border-gray-300"></div>
      <div className="p-10">
        <CountUp
          className="text-[#f59e0b] text-5xl font-bold"
          start={0}
          end={89}
          duration={3}
          delay={0}
        />

        <p className="text-2xl text-[#cbd5e1] mt-2">Live Courses</p>
      </div>
    </div>
  );
};

export default Impact;
