'use client';
import {
  useCreateCourseMutation,
  useGetInstructorsQuery,
} from '@/redux/ApiCalling/apiClice';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { ImCross } from 'react-icons/im';
import Swal from 'sweetalert2';

let ImageHostKey = '47b25851b9d300db92da4ca62f89a4bb';
let ImageHosting = `https://api.imgbb.com/1/upload?key=${ImageHostKey}`;

const instructorsList = [
  'John Doe',
  'Jane Smith',
  'Alice Brown',
  'Bob Johnson',
];

const AddCourses = () => {
  const [status, setStatus] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [selectedInstructors, setSelectedInstructors] = useState([]);
  const [open, setModal] = useState(false);
  const [category, setCategory] = useState();
  const { data } = useGetInstructorsQuery();
  const [createCourse, { data: addInfo, isLoading }] =
    useCreateCourseMutation();

  console.log(data);
  const handleFileChange = e => {
    setThumbnail(e.target.files[0]);
  };

  const handleInstructorChange = e => {
    const { value, checked } = e.target;
    setSelectedInstructors(prev =>
      checked ? [...prev, value] : prev.filter(name => name !== value)
    );
  };
  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;

    if (selectedInstructors.length === 0) {
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Please select instructor',
        showConfirmButton: false,
        timer: 1500,
      });

      return;
    }

    const courseData = {
      title: form.title.value,
      shortDescription: form.shortDescription.value,
      description: form.description.value,
      batch: form.batch.value,
      price: form.price.value,
      studyPlan: form.studyPlan.value,
      totalDuration: form.totalDuration.value,
      category: category,
      status: status,
      instructors: selectedInstructors,
    };

    let thumbnailUrl = '';
    if (thumbnail) {
      const imageData = new FormData();
      imageData.append('image', thumbnail);

      try {
        const res = await fetch(ImageHosting, {
          method: 'POST',
          body: imageData,
        });
        const imgData = await res.json();
        if (imgData.success) {
          thumbnailUrl = imgData.data.url;
        }
      } catch (error) {
        console.log(error);
        return;
      }
    }

    courseData.thumbnail = thumbnailUrl;
    // console.log("Final Data:", courseData);

    try {
      const result = await createCourse(courseData).unwrap();
      console.log('API Response:', result);

      form.reset();
      setThumbnail(null);
      setSelectedInstructors([]);
      setStatus('');

      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Failed!',
        text: 'Failed to add course.',
      });
    }
  };

  return (
    <div className=" bg-gray-900 relative h-full text-white p-6">
      <div className=" p-6  shadow-lg">
        <div className="flex items-center flex-row justify-between ">
          <h2 className="text-xl font-bold mb-4">Add Course</h2>
          <label
            onClick={() => setModal(!open)}
            className="font-semibold relative px-3 py-1 cursor-pointer border-white bg-[#ffffff3a] rounded-full hover:bg-[#ffffffa3]"
          >
            Select Instructors{' '}
          </label>
          {open && (
            <div className="flex absolute top-20 w-[300px] border border-white rounded-md right-16 bg-[#0e0a30] p-5 flex-col gap-1">
              <div
                onClick={() => setModal(!open)}
                className="p-2 cursor-pointer text-xs w-fit absolute top-2 right-2 rounded-full bg-[#ffffff36]"
              >
                <ImCross />
              </div>
              <div className="h-60 overflow-scroll scrollbar-hidden">
                {data?.map((instructor, index) => (
                  <label
                    key={index}
                    className="flex items-center flex-row px-3 w-full text-sm py-2 cursor-pointer gap-2 transition-all "
                  >
                    <input
                      type="checkbox"
                      value={instructor._id}
                      onChange={handleInstructorChange}
                      className="peer hidden"
                    />

                    <div className="  rounded-md border border-gray-700 hover:bg-blue-100 flex felx-row gap-2 w-full p-2 hover:text-black  peer-checked:bg-[#9593f457]">
                      <img
                        className="h-10 w-10 rounded-full border"
                        src={instructor.picture}
                        alt={instructor.name}
                      />
                      <div className="">
                        <h1 className="font-semibold">{instructor.name}</h1>
                        <p className="text-xs">{instructor.email}</p>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <input
              name="title"
              placeholder="Title..."
              className="w-full p-2 rounded bg-[#f5f5f518] outline-none border border-gray-600"
            />
            <input
              type="number"
              name="totalDuration"
              placeholder="Total Duration (month)"
              className="w-full p-2 rounded  bg-[#f5f5f518] outline-none border border-gray-600"
            />

            <input
              type="file"
              onChange={handleFileChange}
              className="w-full p-2 rounded  bg-[#f5f5f518] outline-none border border-gray-600"
            />
            <select
              onChange={e => setStatus(e.target.value)}
              className="w-full p-2 rounded  bg-[#f5f5f518] outline-none border border-gray-600"
            >
              <option className="text-black" value="">
                Select Status
              </option>
              <option className="text-black" value="Active">
                Active
              </option>
              <option className="text-black" value="Inactive">
                Inactive
              </option>
              <option className="text-black" value="Upcoming">
                Upcoming
              </option>
            </select>
            <textarea
              name="description"
              rows={3}
              placeholder="Description"
              className="w-full p-2 rounded  bg-[#f5f5f518] outline-none border border-gray-600"
            ></textarea>
          </div>

          <div className="flex flex-col gap-2">
            <input
              name="batch"
              type="number"
              placeholder="Batch..."
              className="w-full p-2 rounded  bg-[#f5f5f518] outline-none border border-gray-600"
            />
            <input
              name="price"
              type="number"
              placeholder="Price (BDT)"
              className="w-full p-2 rounded  bg-[#f5f5f518] outline-none border border-gray-600"
            />
            <select
              onChange={e => setCategory(e.target.value)}
              className="w-full p-2 rounded  bg-[#f5f5f518] outline-none border border-gray-600"
            >
              <option className="text-black" value="">
                Select Category
              </option>
              <option className="text-black" value="Web development">
                Web development
              </option>
              <option className="text-black" value="App Development">
                App Development
              </option>
              <option className="text-black" value="Ai Learning">
                Ai Learning
              </option>
            </select>
            <textarea
              name="studyPlan"
              rows={2}
              placeholder="Study Plan"
              className="w-full p-2 rounded  bg-[#f5f5f518] outline-none border border-gray-600"
            ></textarea>
            <textarea
              name="shortDescription"
              rows={2}
              placeholder="Short Description"
              className="w-full p-2 rounded  bg-[#f5f5f518] outline-none border border-gray-600"
            ></textarea>
          </div>

          <button
            type="submit"
            className="col-span-2 w-full bg-[#f5f5f518] outline-none cursor-pointer hover:bg-[#f5f5f54c]  text-white py-2 rounded mt-4"
          >
            {isLoading ? 'adding informations...' : 'Add Course'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCourses;
