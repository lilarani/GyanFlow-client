import { FaHeart } from 'react-icons/fa';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { TbCurrencyDollar } from 'react-icons/tb';
import { PiDotsThree } from 'react-icons/pi';
import { PiHandbagSimpleFill } from 'react-icons/pi';
import { BsFillBagFill } from 'react-icons/bs';

export default function AdminCards() {
  return (
    <div>
      <div className="grid  grid-cols-1 lg:grid-cols-4  md:grid-cols-2 w-10/12 mx-auto p-2 gap-3">
        <div className="bg-black bg-opacity-80 text-white rounded-lg  p-6 shadow-lg ">
          <div className="flex  justify-between my-2 ">
            <div className="flex gap-2 items-center">
              <FaHeart className="text-[#AA60C8] text-2xl" />{' '}
              <p className=" text-slate-100 font-semibold">Save Products</p>
            </div>

            <div className="flex place-items-end text-3xl">
              <PiDotsThree />
            </div>
          </div>
          <div className="flex  items-center  gap-2 my-2">
            <div className="text-3xl font-bold">75.0K</div>
            <div className="  border-2  border-green-800      rounded px-1   bg-green-300 text-green-800 ">
              <div className=" flex items-center  text-">
                <div>13.67%</div>
                <div>
                  <IoIosArrowRoundForward className="-rotate-45 text-xl" />
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black bg-opacity-80 text-white rounded-lg  p-6 shadow-lg ">
          <div className="flex  justify-between my-2">
            <div className="flex gap-2 items-center">
              <PiHandbagSimpleFill className="text-[#AA60C8] text-2xl" />{' '}
              <p className=" text-slate-100 font-semibold">Stock Products</p>
            </div>

            <div className="flex place-items-end text-3xl">
              <PiDotsThree />
            </div>
          </div>
          <div className="flex  items-center gap-2 my-2">
            <div className="text-3xl font-bold">10.0K</div>
            <div className="  border-2  border-red-800      rounded px-1   bg-red-300 text-red-800 ">
              <div className=" flex items-center  text-">
                <div>3.67%</div>
                <div>
                  <IoIosArrowRoundForward className="rotate-45 text-xl" />
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black bg-opacity-80 text-white rounded-lg  p-6 shadow-lg ">
          <div className="flex  justify-between my-2 ">
            <div className="flex gap-2 items-center">
              <BsFillBagFill className="text-[#AA60C8] text-2xl" />{' '}
              <p className=" text-slate-100 font-semibold">Sale Products</p>
            </div>

            <div className="flex place-items-end text-3xl">
              <PiDotsThree />
            </div>
          </div>
          <div className="flex  items-center gap-2 my-2">
            <div className="text-3xl font-bold">3.5K</div>
            <div className="  border-2  border-green-800      rounded px-1   bg-green-300 text-green-800 ">
              <div className=" flex items-center  text-">
                <div>13.67%</div>
                <div>
                  <IoIosArrowRoundForward className="-rotate-45 text-xl" />
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black bg-opacity-80 text-white rounded-lg  p-6 shadow-lg ">
          <div className="flex  justify-between my-2 ">
            <div className="flex flex-1 gap-2 items-center">
              <TbCurrencyDollar className="text-[#AA60C8] text-2xl" />{' '}
              <p className=" text-slate-100 font-semibold">Average Revenue</p>
            </div>

            <div className="flex place-items-end text-3xl">
              <PiDotsThree />
            </div>
          </div>
          <div className="flex  items-center gap-2 my-2">
            <div className="text-3xl font-bold">60.0K</div>
            <div className="  border-2  border-green-800      rounded px-1   bg-green-300 text-green-800 ">
              <div className=" flex items-center  text-">
                <div>13.67%</div>
                <div>
                  <IoIosArrowRoundForward className="-rotate-45 text-xl" />
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
