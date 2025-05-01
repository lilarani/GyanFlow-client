import { FaHeart } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { TbCurrencyDollar } from "react-icons/tb";
import { PiDotsThree } from "react-icons/pi";
import { PiHandbagSimpleFill } from "react-icons/pi";
import { BsFillBagFill } from "react-icons/bs";
import { useGetStatsQuery } from "@/redux/ApiCalling/apiClice";
import { TbCurrencyTaka } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";
import { TbCoinTaka } from "react-icons/tb";
import { SiGoogleclassroom } from "react-icons/si";
import { FaPeopleGroup } from "react-icons/fa6";
export default function AdminCards() {
  const { data, isLoading, isError } = useGetStatsQuery();


  console.log(data);
  return (
    <div>
      <div className="grid  grid-cols-1 lg:grid-cols-4  md:grid-cols-2 p-5 gap-3">
        <div className="bg-black bg-opacity-80 text-white rounded-lg  p-6 shadow-lg ">
          <div className="flex  justify-between my-2 ">
            <div className="flex gap-2 items-center">
            <TbCoinTaka className="text-[#AA60C8] text-2xl" />
              <p className=" text-slate-100 font-semibold">Total Sale</p>
            </div>

          </div>
          <div className="flex  items-center lg:flex-wrap xl:flex-nowrap  gap-2 my-2">
            <div className="text-3xl font-bold">{data?.data?.totalSale}K</div>
          </div>
        </div>
        <div className="bg-black bg-opacity-80 text-white rounded-lg  p-6 shadow-lg ">
          <div className="flex  justify-between my-2">
            <div className="flex gap-2 items-center">
              <FaUsers className="text-[#AA60C8] text-2xl" />

              <p className=" text-slate-100 font-semibold">Total Students</p>
            </div>
          </div>
          <div className="flex  items-center  lg:flex-wrap xl:flex-nowrap  gap-2 my-2">
            <div className="text-3xl font-bold">{data?.data?.totalStudents}</div>
        
          </div>
        </div>
        <div className="bg-black bg-opacity-80 text-white rounded-lg  p-6 shadow-lg ">
          <div className="flex  justify-between my-2 ">
            <div className="flex gap-2 items-center">
              <SiGoogleclassroom className="text-[#AA60C8] text-2xl" />{" "}
              <p className=" text-slate-100 font-semibold">Total Courses</p>
            </div>
          </div>
          <div className="flex  items-center  lg:flex-wrap xl:flex-nowrap  gap-2 my-2">
            <div className="text-3xl font-bold">{data?.data?.totalCourse}</div>
          </div>
        </div>
        <div className="bg-black bg-opacity-80 text-white rounded-lg  p-6 shadow-lg ">
          <div className="flex  justify-between my-2 ">
            <div className="flex flex-1 gap-2 items-center">
              <FaPeopleGroup className="text-[#AA60C8] text-2xl" />{" "}
              <p className=" text-slate-100 font-semibold">Total Instructors</p>
            </div>
          </div>
          <div className="flex  items-center  lg:flex-wrap xl:flex-nowrap  gap-2 my-2">
            <div className="text-3xl font-bold">{data?.data?.totalInstructors}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
