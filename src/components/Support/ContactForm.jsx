import { motion } from "framer-motion";
import {
  FaQuestionCircle,
  FaEnvelope,
  FaUser,
  FaPen,
  FaArrowRight,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle form submission, e.g. API call
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };


  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <div className="px-6 py-8">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <FaEnvelope className="mr-2 text-indigo-600" />
            Contact Support
          </h2>
          <p className="mt-2 text-gray-600">
            Couldn't find the answer you were looking for? Send us a message and
            we'll get back to you as soon as possible.
          </p>
          <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 flex items-center"
              >
                <FaUser className="mr-2 text-indigo-600" />
                Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-3"
                  placeholder="Your name"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 flex items-center"
              >
                <FaEnvelope className="mr-2 text-indigo-600" />
                Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-3"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 flex items-center"
              >
                <FaPen className="mr-2 text-indigo-600" />
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-3"
                  placeholder="Describe your issue or question"
                />
              </div>
            </div>

            <div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Message
                <FaArrowRight className="ml-2" />
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
    </>
  );
}
