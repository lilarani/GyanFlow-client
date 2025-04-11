import "./card.css";
import { Link } from "react-router";
import { TbCoinTaka, TbCurrencyTaka } from "react-icons/tb";
import { SiGoogleclassroom } from "react-icons/si";
import { MdLiveTv } from "react-icons/md";
import { HiCursorClick } from "react-icons/hi";
import { IoMdClock } from "react-icons/io";
const Card = ({ course }) => {
  return (
    <div>
      <div className="relative overflow-hidden flex flex-col h-full hover:scale-105 rounded-lg shadow-md transition-all duration-700 ">
        <figure>
          <img
            className="rounded-t-lg w-full h-52 object-cover"
            src={course?.thumbnail}
            alt="Virtual Classroom"
          />
        </figure>
        {/* premium btn */}
        <button className="absolute w-[150px] top-[30px] left-[-50px] bg-default  text-white capitalize  transform rotate-[-53deg] px-5 py-1">
          premium
        </button>
        <div className="px-4 pt-2 space-y-2 flex-grow">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-gray-300 py-1 px-2 rounded-md">
              <img
                className="w-4"
                src="https://img.icons8.com/?size=96&id=HAdDrhGGO64N&format=png"
                alt=""
              />
              <p className="text-xs font-semibold">Live Class</p>
            </div>
            <p className="text-xs font-semibold bg-gray-300 py-1 px-2 rounded-md">
              Batch {course?.batch}
            </p>
          </div>
          <hr className=" border-t-2 border-gray-300" />
          <div className="flex items-center gap-2">
            <h2 className="font-semibold text-xl">{course?.title}</h2>
          </div>
          <p className="text-gray-600 mt-2">{course?.shortDescription}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <img className="w-5"
                src="https://img.icons8.com/?size=100&id=14831&format=png"
                alt=""
              />
              <p className="text-base font-semibold">
                {course?.totalDuration} Months
              </p>
            </div>
            <div className="flex items-center gap-1">
              <SiGoogleclassroom className="text-xl" />
              <p className="font-semibold">39 Seat Left</p>
            </div>
          </div>
          <hr className=" border-t-2 border-gray-300" />
          <div className="flex items-center justify-between">
            {/* <div className="flex items-center gap-1">
                <TbCoinTaka className="text-xl" />
                <p className="text-base font-semibold">{course?.price}</p>
              </div> */}
            {/* <div className="flex items-center gap-1">
                <SiGoogleclassroom className="text-xl" />
                <p className="text-base font-semibold">40</p>
              </div> */}
          </div>
        </div>
        <div className="flex items-center justify-between px-4 pb-4">
          <div className="flex items-center">
            <p className="text-xl font-semibold">{course?.price}</p>
            <img
              className="w-[18px]"
              src="https://img.icons8.com/?size=160&id=j93mUCq7qi8E&format=png"
              alt=""
            />
          </div>
          <div>
            <Link
              to={`/featuresDetails/${course?._id}`}
              className="flex justify-center"
            >
              <button className="flex items-center gap-1 px-3 py-2 hover:bg-[#0B1739] bg-[#352b61] text-white/80 duration-500 rounded-md">
                See Details{" "}
                <span>
                  <HiCursorClick />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
