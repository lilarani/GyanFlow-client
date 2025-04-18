import {
  useCreateAnnouncementMutation,
  useCreateCourseMutation,
} from "@/redux/ApiCalling/apiClice";
import React, { useState } from "react";
import { toast } from "react-toastify";

let ImageHostKey = "47b25851b9d300db92da4ca62f89a4bb";
let ImageHosting = `https://api.imgbb.com/1/upload?key=${ImageHostKey}`;

const AddAnnouncement = () => {
  const [type, setType] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [createAnnouncement, { data: addInfo, isLoading }] =
    useCreateAnnouncementMutation();

  //   console.log(data);
  const handleFileChange = (e) => {
    setThumbnail(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const announcementData = {
      title: form.title.value,
      description: form.description.value,
      type: type,
      date: Date.now(),
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

    announcementData.thumbnail = thumbnailUrl;
    // console.log("Final Data:", courseData);

    try {
      console.log("Annouce", announcementData);
      const result = await createAnnouncement(announcementData).unwrap();

      form.reset();
      setThumbnail(null);
      setType("");

      toast("Announcement added successfully!");
    } catch (error) {
      console.error("Error adding announcement:", error);
      toast.error("Failed to add announcement.");
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
              onChange={(e) => setType(e.target.value)}
              className="w-full p-2 rounded  bg-[#f5f5f518] outline-none border border-gray-600"
            >
              <option className="bg-blue-950" value="">
                Announcement Type
              </option>
              <option className="bg-blue-950" value="course">
                Course
              </option>
              <option className="bg-blue-950" value="webminer">
                Webminer
              </option>
              <option className="bg-blue-950" value="free_session">
                Free-session
              </option>
              <option className="bg-blue-950" value="bootcamp">
                Bootcamp
              </option>
            </select>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full p-2 rounded  bg-[#f5f5f518] outline-none border border-gray-600"
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
