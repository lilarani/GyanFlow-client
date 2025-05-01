import { useGetStatsQuery } from '@/redux/ApiCalling/apiClice';
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Impact = () => {
  const { data, isLoading, isError } = useGetStatsQuery();

  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <div
      ref={ref}
      className="flex  flex-col md:flex-row text-center items-center justify-center gap-6 md:gap10 border-t border-b border-gray-300 p-10 bg md:my-16 bg-[#ededed]"
    >
      <div className="border-gray-200 p-10">
        {inView && (
          <CountUp
            className="text-[#1e40af] text-5xl font-bold" // deep violet, contrasts softly on light bg
            start={0}
            end={data?.data?.totalStudents}
            duration={4}
            delay={0}
            suffix="+"
          />
        )}
        <p className="text-2xl text-[#1e293b] mt-2">Students</p>{' '}
        {/* Darker slate */}
      </div>

      <div className="md:h-32 w-4/5 md:w-0 md:border-l-2 border-gray-300"></div>

      <div className="border-gray-200 p-10">
        {inView && (
          <CountUp
            className="text-[#0e7490] text-5xl font-bold" // unchanged
            start={0}
            end={10}
            duration={4}
            delay={0}
            suffix="+"
          />
        )}
        <p className="text-2xl text-[#334155] mt-2">Job Placement</p>
      </div>

      <div className="md:h-32 w-4/5 md:w-0 md:border-l-2 border-gray-300"></div>

      <div className="border-gray-200 p-10">
        {inView && (
          <CountUp
            className="text-[#15803d] text-5xl font-bold" // unchanged
            start={0}
            end={15}
            duration={4}
            delay={0}
            suffix="+"
          />
        )}
        <p className="text-2xl text-[#334155] mt-2">Companies</p>
      </div>

      <div className="md:h-32 w-4/5 md:w-0 md:border-l-2 border-gray-300"></div>

      <div className="border-gray-200 p-10">
        {inView && (
          <CountUp
            className="text-[#0d9488] text-5xl font-bold" // unchanged
            start={0}
            end={data?.data?.totalInstructors}
            duration={4}
            delay={0}
          />
        )}
        <p className="text-2xl text-[#334155] mt-2">Instructors</p>
      </div>

      <div className="md:h-32 w-4/5 md:w-0 md:border-l-2 border-gray-300"></div>

      <div className="p-10">
        {inView && (
          <CountUp
            className="text-[#e11d48] text-5xl font-bold" // deep red, bold but elegant on light bg
            start={0}
            end={data?.data?.totalCourse}
            duration={4}
            delay={0}
          />
        )}
        <p className="text-2xl text-[#1e293b] mt-2">Live Courses</p>{' '}
        {/* Darker slate */}
      </div>
    </div>
  );
};

export default Impact;
