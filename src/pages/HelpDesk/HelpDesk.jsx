import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  useGetAllPostsQuery,
  usePostsMutation,
} from '@/redux/ApiCalling/apiClice';
import { toast } from 'react-toastify';
import HelpDeskNavbar from '@/components/Home/HelpDeskNavbar/HelpDeskNavbar';
import Modal from './Modal';
import PostCard from './PostCard';
import Button from './Button';
import { Link, NavLink } from 'react-router';

const HelpDesk = () => {
  const [openModal, setOpenModal] = useState(false);
  const [postText, setPostText] = useState('');
  const { user } = useSelector(state => state.authUser);
  const { data } = useGetAllPostsQuery();
  const [addPost] = usePostsMutation();

  const handleSubmit = async () => {
    if (!postText.trim()) {
      toast.error('Write something before posting!');
      return;
    }

    const newPost = {
      description: postText,
      userId: user?._id,
      category: '',
      data: new Date(),
    };

    try {
      await addPost(newPost).unwrap();
      toast.success('Post added!');
      setPostText('');
      setOpenModal(false);
    } catch {
      toast.error('Failed to post!');
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0c1a] text-white animate-fadeInSlow">
      <div className="bg-gradient-to-bl to-[#0F172A] from-[#080127] sticky top-0 z-50 p-6 shadow-xl transition-shadow duration-300">
        <nav className="w-10/12 mx-auto shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <Link
              to={'/helpDesk'}
              className="text-white font-bold text-xl hover:text-blue-300 transition duration-300"
            >
              HelpDesk
            </Link>

            <div className="hidden md:flex space-x-6 text-base">
              <NavLink
                to={'/'}
                className="text-white hover:text-gray-300 transition"
              >
                My Class
              </NavLink>
              <NavLink
                to={'/'}
                className="text-white hover:text-gray-300 transition"
              >
                About us
              </NavLink>
            </div>

            <div className="md:hidden">
              <button className="text-white focus:outline-none">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex justify-between flex-row w-full bg-gray-900 p-2 py-4 rounded-b-3xl mb-4 items-center shadow-md hover:shadow-lg transition duration-300">
          <div className="flex-1 flex flex-row gap-2 w-full">
            <img
              src={user?.picture}
              className="h-12 border-2 w-12 rounded-full hover:scale-105 transition duration-300"
              alt=""
            />
            <div className="w-full rounded-full justify-center px-4 flex flex-col text-gray-400 bg-gray-700 hover:shadow-xl transition-all duration-300 cursor-pointer">
              what's on your mind
            </div>
          </div>

          <div className="flex-1 text-end">
            <button
              className="text-xl text-end font-bold hover:text-blue-400 px-9 mx-4 transition-transform duration-300 hover:scale-105"
              onClick={() => setOpenModal(true)}
            >
              Create Post
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {data?.data?.map(post => (
            <div
              key={post._id}
              className="transition-all duration-500 ease-in-out transform hover:scale-[1.01] hover:shadow-md animate-slideUp"
            >
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>

      {openModal && (
        <Modal onClose={() => setOpenModal(false)}>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg transform transition-all duration-500 scale-95 hover:scale-100 animate-fadeIn">
            <h2 className="text-xl font-semibold mb-4">What's on your mind?</h2>
            <textarea
              rows={5}
              value={postText}
              onChange={e => setPostText(e.target.value)}
              placeholder="Write your post..."
              className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none"
            />
            <div className="mt-4 flex justify-end">
              <Button text="Post" onClick={handleSubmit} />
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default HelpDesk;
