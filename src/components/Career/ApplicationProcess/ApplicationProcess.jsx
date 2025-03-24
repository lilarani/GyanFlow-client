import React from "react";

const ApplicationProcess = () => {
  return (
    <div className="my-28">
      <h1 className="font-bold  my-4 text-3xl md:text-4xl lg:text-5xl text-center">
        Application Process
      </h1>
      <p className="text-lg text-gray-800 text-center mb-10">
        Our application process is designed to find talent for our dynamic IT
        environment. Begin with an online application to showcase your
        qualifications
      </p>
      <div className="flex">
        <div>
          <h2 className="text-3xl font-bold w-14 h-14 bg-linear-to-r from-blue-300 to-blue-800 rounded-full flex flex-col justify-center items-center">
            1
          </h2>

          <h3>Application review</h3>
          <p>
            We evaluate applications using multiple criteria to find the best
            candidates.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold w-14 h-14 bg-linear-to-r from-blue-300 to-blue-800 rounded-full flex flex-col justify-center items-center">
            2
          </h2>
          <h3>Quick test</h3>
          <p>We conduct online interviews to get to know you better.</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold w-14 h-14 bg-linear-to-r from-blue-300 to-blue-800 rounded-full flex flex-col justify-center items-center">
            3
          </h2>
          <h3>Exam</h3>
          <p>
            Finalists participate in a one-day onsite challenge for the final
            judge.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold w-14 h-14 bg-linear-to-r from-blue-300 to-blue-800 rounded-full flex flex-col justify-center items-center">
            4
          </h2>
          <h3>Interviews</h3>
          <p>Team leads are conducting this interview to recruit new hires.</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold w-14 h-14 bg-linear-to-r from-blue-300 to-blue-800 rounded-full flex flex-col justify-center items-center">
            5
          </h2>
          <h3>Offer</h3>
          <p>
            After a successful interview, you'll get a job offer at Mediusware.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApplicationProcess;
