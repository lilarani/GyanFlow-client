import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useParams } from 'react-router';
import {
    useAllModulesQuery,
    useCourseForInstructorQuery,
    useCreateModuleMutation,
    useCreateVideoMutation,
} from '@/redux/ApiCalling/apiClice';
import { useSelector } from 'react-redux';
export default function CreateModule() {
    const [showModal, setShowModal] = useState(false);
    const [courseId, setCourseId] = useState(null)
    const [formType, setFormType] = useState(null);
    const [formData, setFormData] = useState({});
    const [video, setVideo] = useState(null);
    const [createModule] = useCreateModuleMutation();
    const [createVideo] = useCreateVideoMutation();
    const { user } = useSelector(state => state.authUser)
    console.log(user)
    let { data } = useCourseForInstructorQuery(user?._id);
    console.log(data)
    console.log(courseId, "course id")
    console.log(formData)

    const { data: modules = [] } = useAllModulesQuery(courseId);

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
        console.log('my form data = ', formData)

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


    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-[#0F0C29] via-[#302B63] to-[#24243E] p-6">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-2xl bg-white/10 backdrop-blur-md shadow-xl p-8 border border-white/20"
            >
                <h1 className="text-center text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6 animate-pulse">
                    Course Module Management
                </h1>
                <div className="flex justify-center gap-6">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="text-sm uppercase cursor-pointer hover:bg-white hover:text-black text-blue-200 rounded-full border px-6 py-2"
                        onClick={handleCreateModuleClick}
                    >
                        Create Module
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="text-sm uppercase cursor-pointer hover:bg-white hover:text-black text-blue-200 rounded-full border px-6 py-2"
                        onClick={handleUploadVideoClick}
                    >
                        Upload Video
                    </motion.button>
                </div>
            </motion.div>

            {/* Form Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="w-full max-w-2xl bg-white/10 backdrop-blur-md shadow-xl p-8 border border-white/20"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-xl font-semibold text-white">
                                {formType === 'module' ? 'Create Module' : 'Upload Video'}
                            </h1>
                            <button
                                onClick={closeModal}
                                className="text-white text-2xl hover:text-red-500"
                            >
                                ❌
                            </button>
                        </div>
                        <form onSubmit={handleSubmit} className="grid gap-4">
                            {formType === 'module' ? (
                                <>
                                    <input
                                        name="title"
                                        placeholder="Module Title"
                                        className="input-field"
                                        onChange={handleChange}
                                    />
                                    <select
                                        name="courseId"
                                        className="input-field bg-black text-white"
                                        onChange={(e) => setCourseId(e.target.value)}
                                    >
                                        <option className='bg-black text-white' value="">Select Course</option>
                                        {data?.map((course, idx) => (
                                            <option className='bg-black text-white' key={course._id} value={course._id}>
                                                {idx + 1}. {course.title}
                                            </option>
                                        ))}
                                    </select>
                                    <input
                                        name="modulNo"
                                        placeholder="Module Number"
                                        className="input-field"
                                        onChange={handleChange}
                                    />
                                    <textarea
                                        name="description"
                                        placeholder="Description"
                                        className="input-field"
                                        rows={3}
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
                                        placeholder="Video Title"
                                        className="input-field"
                                        onChange={handleChange}
                                    />
                                    <select
                                        name="courseId"
                                        className="input-field bg-black text-white"
                                        onChange={(e) => setCourseId(e.target.value)}
                                    >
                                        <option className='bg-black text-white' value="">Select Course</option>
                                        {data?.map((course, idx) => (
                                            <option className='bg-black text-white' key={course._id} value={course._id}>
                                                {idx + 1}. {course.title}
                                            </option>
                                        ))}
                                    </select>
                                    <select
                                        name="modelId"
                                        className="input-field bg-black text-white"
                                        onChange={handleChange}
                                        disabled={!courseId}
                                    >
                                        <option value="">Select Module</option>
                                        {modules?.data?.map(module => (
                                            <option key={module._id} value={module._id}>
                                                {module.modulNo}. {module.title}
                                            </option>
                                        ))}
                                    </select>
                                    <input
                                        name='url'
                                        placeholder='Video link'
                                        type="text"
                                        onChange={handleChange}
                                        className="input-field"
                                    />
                                    <input
                                        name="duration"
                                        placeholder="Duration (in minutes)"
                                        className="input-field"
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
