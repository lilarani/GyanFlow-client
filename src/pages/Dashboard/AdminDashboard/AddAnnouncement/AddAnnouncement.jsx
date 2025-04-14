import { useCreateCourseMutation } from "@/redux/ApiCalling/apiClice";
import React, { useState } from "react";
import { ImCross } from "react-icons/im";

const AddAnnouncement = () => {
  const [status, setStatus] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [selectedInstructors, setSelectedInstructors] = useState([]);
  const [open, setModal] = useState(false);
  const [category, setCategory] = useState();
  const [createCourse, { data: addInfo, isLoading }] =
    useCreateCourseMutation();

  //   console.log(data);
  const handleFileChange = (e) => {
    setThumbnail(e.target.files[0]);
  };

  const handleInstructorChange = (e) => {
    const { value, checked } = e.target;
    setSelectedInstructors((prev) =>
      checked ? [...prev, value] : prev.filter((name) => name !== value)
    );
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

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

    let thumbnailUrl = "";
    if (thumbnail) {
      const imageData = new FormData();
      imageData.append("image", thumbnail);

      try {
        const res = await fetch(ImageHosting, {
          method: "POST",
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
      console.log("API Response:", result);

      form.reset();
      setThumbnail(null);
      setSelectedInstructors([]);
      setStatus("");

      toast("Course added successfully!");
    } catch (error) {
      console.error("Error adding course:", error);
      toast.error("Failed to add course.");
    }
  };
  return (
    <div className=" bg-gray-900 relative h-full text-white p-6">
      <div className=" p-6  shadow-lg">
        <div className="flex items-center flex-row justify-between ">
          <h2 className="text-xl font-bold mb-4">Add Announcement</h2>
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <input
              name="title"
              placeholder="Title..."
              className="w-full p-2 rounded bg-[#f5f5f518] outline-none border border-gray-600"
            />
            <textarea
              name="description"
              rows={3}
              placeholder="Description"
              className="w-full p-2 rounded  bg-[#f5f5f518] outline-none border border-gray-600"
            ></textarea>
          </div>

          <div className="flex flex-col gap-2">
          <select
              onChange={e => setStatus(e.target.value)}
              className="w-full p-2 rounded  bg-[#f5f5f518] outline-none border border-gray-600"
            >
              <option className="bg-blue-950" value="">Announcement Type</option>
              <option className="bg-blue-950" value="course">Course</option>
              <option className="bg-blue-950" value="webminer">Webminer</option>
              <option className="bg-blue-950" value="free_session">Free-session</option>
              <option className="bg-blue-950" value="bootcamp">Bootcamp</option>
            </select>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full p-2 rounded  bg-[#f5f5f518] outline-none border border-gray-600"
            />
            <input
              type="date"
              name="date"
              placeholder="Date"
              className="w-full p-2 rounded bg-[#f5f5f518] outline-none border border-gray-600"
            />
          </div>

          <button
            type="submit"
            className="col-span-2 w-full bg-[#f5f5f518] outline-none cursor-pointer hover:bg-[#f5f5f54c]  text-white py-2 rounded mt-4"
          >
            {isLoading ? "adding announcement..." : "Add Announcement"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAnnouncement;
