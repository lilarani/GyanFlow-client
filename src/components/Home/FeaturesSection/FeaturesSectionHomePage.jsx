import { TbCoinTaka } from "react-icons/tb";
import CustomButtons from "../../../shared/CustomButtons/CustomButtons";
import { SiGoogleclassroom } from "react-icons/si";

export default function FeaturesSectionHomePage() {
  return (
    <div className="w-10/12 mx-auto my-28">
      <div>
        <div className="flex justify-center items-center text-center my-10">
          <div className="md:w-2/3">
            <h2 className="font-bold  my-4 text-5xl">Featured Courses</h2>
            <p className="my-4">
              Explore professional courses crafted to enhance your expertise.
              Achieve your career goals with comprehensive, industry-relevant
              learning.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className=" flex flex-col h-full hover:scale-105 rounded-lg shadow-md transition-all duration-700">
          <figure>
            <img
              className="rounded-t-lg w-full h-56 object-cover"
              src="https://instructor-academy.onlinecoursehost.com/content/images/2023/05/How-to-Create-an-Online-Course-For-Free--Complete-Guide--6.jpg"
              alt="Virtual Classroom"
            />
          </figure>
          <div className="px-4 py-3 space-y-2 flex-grow">
            <div className="flex items-center gap-2">
              <h2 className="font-semibold text-2xl">
                Python for Data Science
              </h2>
            </div>
            <p className="text-gray-600 mt-2">
              Enhance online learning with interactive tools, live sessions, and
              real-time collaboration.
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">Batch 10</p>
              </div>
              <div>
                <p className="font-semibold">39 seat left</p>
              </div>
            </div>
            <hr className=" border-t-2 border-gray-300" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <TbCoinTaka className="text-xl" />
                <p className="text-base font-semibold">3900</p>
              </div>
              <div className="flex items-center gap-1">
                <SiGoogleclassroom className="text-xl" />
                <p className="text-base font-semibold">40</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-4">
            <CustomButtons primaryText={"See Details"}></CustomButtons>
          </div>
        </div>
        <div className=" flex flex-col h-full hover:scale-105 rounded-lg shadow-md transition-all duration-700">
          <figure>
            <img
              className="rounded-t-lg w-full h-56 object-cover"
              src="https://www.creativeitinstitute.com/images/course/course_1663052056.jpg"
              alt="Virtual Classroom"
            />
          </figure>
          <div className="px-4 py-3 space-y-2 flex-grow">
            <div className="flex items-center gap-2">
              <h2 className="font-semibold text-2xl">
                Full-Stack Web Development
              </h2>
            </div>
            <p className="text-gray-600 mt-2">
              Enhance online learning with interactive tools, live sessions, and
              real-time collaboration.
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">Batch 3</p>
              </div>
              <div>
                <p className="font-semibold">112 seat left</p>
              </div>
            </div>
            <hr className=" border-t-2 border-gray-300" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <TbCoinTaka className="text-xl" />
                <p className="text-base font-semibold">4500</p>
              </div>
              <div className="flex items-center gap-1">
                <SiGoogleclassroom className="text-xl" />
                <p className="text-base font-semibold">50</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-4">
            <CustomButtons primaryText={"See Details"}></CustomButtons>
          </div>
        </div>
        <div className=" flex flex-col h-full hover:scale-105 rounded-lg shadow-md transition-all duration-700">
          <figure>
            <img
              className="rounded-t-lg w-full h-56 object-cover"
              src="https://cdn.prod.website-files.com/5f6bd5d85587b65348960e08/6784fd33f51dfa8ec7ff1b3e_617c6ced59cb821a2cbee7d5_UI%25202.png"
              alt="Virtual Classroom"
            />
          </figure>
          <div className="px-4 py-3 space-y-2 flex-grow">
            <div className="flex items-center gap-2">
              <h2 className="font-semibold text-2xl">
                UI/UX Design Essentials
              </h2>
            </div>
            <p className="text-gray-600 mt-2">
              Enhance online learning with interactive tools, live sessions, and
              real-time collaboration.
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">Batch 10</p>
              </div>
              <div>
                <p className="font-semibold">39 seat left</p>
              </div>
            </div>
            <hr className=" border-t-2 border-gray-300" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <TbCoinTaka className="text-xl" />
                <p className="text-base font-semibold">3900</p>
              </div>
              <div className="flex items-center gap-1">
                <SiGoogleclassroom className="text-xl" />
                <p className="text-base font-semibold">40</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-4">
            <CustomButtons primaryText={"See Details"}></CustomButtons>
          </div>
        </div>
        <div className=" flex flex-col h-full hover:scale-105 rounded-lg shadow-md transition-all duration-700">
          <figure>
            <img
              className="rounded-t-lg w-full h-56 object-cover"
              src="https://instructor-academy.onlinecoursehost.com/content/images/2023/05/How-to-Create-an-Online-Course-For-Free--Complete-Guide--6.jpg"
              alt="Virtual Classroom"
            />
          </figure>
          <div className="px-4 py-3 space-y-2 flex-grow">
            <div className="flex items-center gap-2">
              <h2 className="font-semibold text-2xl">
                Python for Data Science
              </h2>
            </div>
            <p className="text-gray-600 mt-2">
              Enhance online learning with interactive tools, live sessions, and
              real-time collaboration.
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">Batch 10</p>
              </div>
              <div>
                <p className="font-semibold">39 seat left</p>
              </div>
            </div>
            <hr className=" border-t-2 border-gray-300" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <TbCoinTaka className="text-xl" />
                <p className="text-base font-semibold">3900</p>
              </div>
              <div className="flex items-center gap-1">
                <SiGoogleclassroom className="text-xl" />
                <p className="text-base font-semibold">40</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-4">
            <CustomButtons primaryText={"See Details"}></CustomButtons>
          </div>
        </div>
        <div className=" flex flex-col h-full hover:scale-105 rounded-lg shadow-md transition-all duration-700">
          <figure>
            <img
              className="rounded-t-lg w-full h-56 object-cover"
              src="https://instructor-academy.onlinecoursehost.com/content/images/2023/05/How-to-Create-an-Online-Course-For-Free--Complete-Guide--6.jpg"
              alt="Virtual Classroom"
            />
          </figure>
          <div className="px-4 py-3 space-y-2 flex-grow">
            <div className="flex items-center gap-2">
              <h2 className="font-semibold text-2xl">
                Python for Data Science
              </h2>
            </div>
            <p className="text-gray-600 mt-2">
              Enhance online learning with interactive tools, live sessions, and
              real-time collaboration.
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">Batch 10</p>
              </div>
              <div>
                <p className="font-semibold">39 seat left</p>
              </div>
            </div>
            <hr className=" border-t-2 border-gray-300" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <TbCoinTaka className="text-xl" />
                <p className="text-base font-semibold">3900</p>
              </div>
              <div className="flex items-center gap-1">
                <SiGoogleclassroom className="text-xl" />
                <p className="text-base font-semibold">40</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-4">
            <CustomButtons primaryText={"See Details"}></CustomButtons>
          </div>
        </div>
        <div className=" flex flex-col h-full hover:scale-105 rounded-lg shadow-md transition-all duration-700">
          <figure>
            <img
              className="rounded-t-lg w-full h-56 object-cover"
              src="https://instructor-academy.onlinecoursehost.com/content/images/2023/05/How-to-Create-an-Online-Course-For-Free--Complete-Guide--6.jpg"
              alt="Virtual Classroom"
            />
          </figure>
          <div className="px-4 py-3 space-y-2 flex-grow">
            <div className="flex items-center gap-2">
              <h2 className="font-semibold text-2xl">
                Python for Data Science
              </h2>
            </div>
            <p className="text-gray-600 mt-2">
              Enhance online learning with interactive tools, live sessions, and
              real-time collaboration.
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">Batch 10</p>
              </div>
              <div>
                <p className="font-semibold">39 seat left</p>
              </div>
            </div>
            <hr className=" border-t-2 border-gray-300" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <TbCoinTaka className="text-xl" />
                <p className="text-base font-semibold">3900</p>
              </div>
              <div className="flex items-center gap-1">
                <SiGoogleclassroom className="text-xl" />
                <p className="text-base font-semibold">40</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-4">
            <CustomButtons primaryText={"See Details"}></CustomButtons>
          </div>
        </div>
      </div>
    </div>
  );
}
