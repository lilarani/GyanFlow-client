import React, { useState } from "react";
import { motion } from "framer-motion";

export default function CreateUploadModule() {
  const [showModal, setShowModal] = useState(false); // State to toggle modal visibility
  const [formType, setFormType] = useState(null); // State to manage which form to display

  const handleCreateModuleClick = () => {
    setFormType("module"); // Set form type to "module"
    setShowModal(true); // Show the modal
  };

  const handleUploadVideoClick = () => {
    setFormType("video"); // Set form type to "video"
    setShowModal(true); // Show the modal
  };

  const closeModal = () => {
    setShowModal(false); // Close the modal
    setFormType(null); // Reset form type
  };

  return (
    <div className="min-h-screen flex  justify-center bg-gradient-to-br from-[#0F0C29] via-[#302B63] to-[#24243E] p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl bg-white/10 backdrop-blur-md shadow-xl p-8 border border-white/20"
      >
        <motion.h1
          className="text-center  text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6 animate-pulse"
        >
          Create Module
        </motion.h1>

        <div className="flex cursor-pointer justify-center gap-6 mb-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="btn-primary "
            onClick={handleCreateModuleClick}
          >
            Create Module 
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="btn-success e"
            onClick={handleUploadVideoClick}
          >
            Upload Video 
          </motion.button>
        </div>
      </motion.div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center  justify-center bg-black/50">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-2xl bg-white/10 backdrop-blur-md shadow-xl p-8 border border-white/20"
          >
            <div className="flex justify-between items-center">
              <motion.h1 className="text-xl font-semibold text-white">
                {formType === "module" ? "Create Module" : "Upload Video"}
              </motion.h1>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="text-white text-2xl"
                onClick={closeModal}
              >
                ❌
              </motion.button>
            </div>

            {formType === "module" ? (
              <div className="grid grid-cols-1  gap-6 mt-6">
                <div className="bg-white/20 p-6 shadow-md">
                 
                  <input className="input-field" placeholder="Module Title" />
                  <input className="input-field" placeholder="Course ID" />
                  <input className="input-field" placeholder="Module No." />
                  <textarea
                    className="input-field"
                    placeholder="Description"
                    rows="3"
                  ></textarea>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="btn-primary"
                  >
                    Create Module 
                  </motion.button>
                </div>
              </div>
            ) : (
              <div className=" w-full gap-6 mt-6">
                <div className="bg-white/20 p-6 shadow-md">
                  <input className="input-field" placeholder="Video Title" />
                  <input className="input-field" placeholder="Module ID" />
                  <input className="input-field" placeholder="Video URL" />
                  <input
                    className="input-field"
                    placeholder="Duration (in minutes)"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="btn-success"
                  >
                    Upload Video 🎬
                  </motion.button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}
