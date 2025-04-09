import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router';
import {
  useAllModulesQuery,
  useCreateModuleMutation,
  useCreateVideoMutation,
} from '@/redux/ApiCalling/apiClice';
import Quiz from '@/components/QuizeComponents/Quiz';

export default function CreateUploadModule() {
  const [showQuizModal, setShowQuizModal] = useState(false);
  const [quizInfo, setQuizInfo] = useState({})
  const [showModal, setShowModal] = useState(false);
  const [createModule] = useCreateModuleMutation();
  const [createVideo] = useCreateVideoMutation();
  const [formType, setFormType] = useState(null);
  const [formData, setFormData] = useState({});
  let { id: courseId } = useParams();
  let { data: modules = [] } = useAllModulesQuery(courseId);
  console.log(modules);
  const handleCreateModuleClick = () => {
    setFormType('module');
    setShowModal(true);
  };

  const handleUploadVideoClick = () => {
    setFormType('video');
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setFormType(null);
    setFormData({});
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const finalData =
      formType === 'module' ? { ...formData, courseId } : formData;
    if (formType === 'module') {
      let res = await createModule(finalData).unwrap();
      console.log(res);
      setShowModal(false);
    } else {
      let res = await createVideo(finalData).unwrap();
      console.log(res);
      setShowModal(false);
    }
    console.log('Form Data:', finalData);
  };

// quiz related functionality==============================
  const toggleQuizModule= ()=>{
    setShowQuizModal(!showQuizModal)
  }

  const handleQuizInfo= (module)=>{
    setQuizInfo(module)
    setShowQuizModal(true)
    
  }

  // quiz related functionalityend here==============================

  return (
    <div className="min-h-screen flex justify-center bg-gradient-to-br from-[#0F0C29] via-[#302B63] to-[#24243E] p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full  bg-white/10  backdrop-blur-md shadow-xl p-8 border border-white/20"
      >
        <div className="flex flex-row justify-between">
          <motion.h1 className="text-center text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6 animate-pulse">
            Create Module
          </motion.h1>
          <div className="flex  mb-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="text-xs mr-4 uppercase cursor-pointer hover:bg-white hover:text-black text-blue-200  rounded-full border px-6 py-1"
              onClick={handleCreateModuleClick}
            >
              Create Module
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="text-xs uppercase cursor-pointer hover:bg-white hover:text-black text-blue-200  rounded-full border px-6 py-1"
              onClick={handleUploadVideoClick}
            >
              Upload Video
            </motion.button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-2"></div>
          {/* module history */}
          <div className=" px-2 py-1 col-span-1 bg-white/10 backdrop-blur-md shadow-xl p-8 border border-white/20 ">
            {modules?.data?.map((module, index) => (
              <details
                key={index}
                className="mb-2 border border-white/20 rounded-lg"
              >
                <summary className="p-2 cursor-pointer bg-white/20">
                  {module?.title}
                </summary>
                <div className="p-2 ">
                 
                  
                  {module?.videos?.length > 0 ? (
                    module.videos.map((video, idx) => (
                      
                      <p key={idx} className="py-1  cursor-pointer">
                        {video.videoTitle}
                      </p>
                    ))
                  ) : (
                    <p className="text-gray-400">No videos available</p>
                  )}
                  <button className=' rounded  bg-main text-white w-full capitalize py-1 cursor-pointer' onClick={() => handleQuizInfo(module)}>quiz</button>
                </div>
              </details>
            ))}
          </div>
        </div>
      </motion.div>

      {/* quiz=========== */}
      {showQuizModal && <Quiz toggleQuizModule={toggleQuizModule} quizInfo={quizInfo}/>}
      {/* quiz============ */}

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-2xl bg-white/10 backdrop-blur-md shadow-xl p-8 border border-white/20"
          >
            <div className="flex justify-between items-center">
              <motion.h1 className="text-xl font-semibold text-white">
                {formType === 'module' ? 'Create Module' : 'Upload Video'}
              </motion.h1>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="text-white cursor-pointer text-2xl"
                onClick={closeModal}
              >
                ❌
              </motion.button>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-6 mt-6">
              {formType === 'module' ? (
                <>
                  <input
                    name="title"
                    className="input-field"
                    placeholder="Module Title"
                    onChange={handleChange}
                  />
                  <input
                    name="modulNo"
                    className="input-field"
                    placeholder="Module No."
                    onChange={handleChange}
                  />
                  <textarea
                    name="description"
                    className="input-field"
                    placeholder="Description"
                    rows="3"
                    onChange={handleChange}
                  ></textarea>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="btn-primary"
                    type="submit"
                  >
                    Create Module
                  </motion.button>
                </>
              ) : (
                <>
                  <input
                    name="videoTitle"
                    className="input-field"
                    placeholder="Video Title"
                    onChange={handleChange}
                  />
                  <select
                    name="modelId"
                    className="input-field bg-black text-white"
                    onChange={handleChange}
                  >
                    <option value="">Select Module</option>
                    {modules?.data?.map(module => (
                      <option
                        className="bg-black"
                        key={module?._id}
                        value={module?._id}
                      >
                        {module?.modulNo}. {module?.title}
                      </option>
                    ))}
                  </select>
                  <input
                    name="url"
                    className="input-field"
                    placeholder="Video URL"
                    onChange={handleChange}
                  />
                  <input
                    name="duration"
                    className="input-field"
                    placeholder="Duration (in minutes)"
                    onChange={handleChange}
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="btn-success"
                    type="submit"
                  >
                    Upload Video 🎬
                  </motion.button>
                </>
              )}
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
