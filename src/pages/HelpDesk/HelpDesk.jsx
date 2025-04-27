import Button from '@/components/customs/Button';
import HelpDeskNavbar from '@/components/Home/HelpDeskNavbar/HelpDeskNavbar';
import {
  useGetAllPostsQuery,
  usePostsMutation,
} from '@/redux/ApiCalling/apiClice';
import React, { useState } from 'react';
import { AiTwotoneLike } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa6';
import { LuSend } from 'react-icons/lu';
import { PiShareFat } from 'react-icons/pi';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const HelpDesk = () => {
  const [activePostId, setActivePostId] = useState(null);
  const [post, setPost] = useState('');
  const [addPost] = usePostsMutation();
  const { data } = useGetAllPostsQuery();
  console.log(data);
  const { user } = useSelector(state => state?.authUser);

  const handleAddPost = async () => {
    const newPost = {
      description: post,
      userId: user?._id,
      category: '',
      data: new Date(),
    };
    try {
      await addPost(newPost).unwrap();
      toast.success('Post added successfully');
    } catch (err) {
      toast.error('Failed Post Added!');
    }
  };

  return (
    <div>
      <HelpDeskNavbar></HelpDeskNavbar>
      <div className="bg-gradient-to-br from-[#010009] via-[#0f0b3e] to-[#0b0b0c]">
        <div className="grid grid-cols-12 w-10/12 mx-auto py-16 gap-5 relative ">
          {/* Left Sidebar (Create Post) */}
          <div className="col-span-5 sticky  top-18 self-start p-4 border border-gray-700 rounded-2xl shadow-md bg-black">
            {/* User Info */}
            <div className="flex items-center mb-4">
              <img
                src="https://via.placeholder.com/40"
                alt="User Avatar"
                className="w-10 h-10 rounded-full mr-3"
              />
              <input
                type="text"
                name="post"
                value={post}
                onChange={e => setPost(e.target.value)}
                placeholder="What's on your mind ?"
                className="flex-1 border-none focus:ring-0 outline-none text-gray-300 placeholder-gray-300 font-semibold bg-transparent"
              />
            </div>

            {/* Optional Buttons */}
            <div className="flex justify-between items-center border-t pt-3 text-sm text-gray-300">
              <button className="flex items-center space-x-1 hover:text-blue-500">
                <span>📷</span>
                <span>Photo/Video</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-green-500">
                <span>🏷️</span>
                <span>Tag Friends</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-red-500">
                <span>😊</span>
                <span>Feeling/Activity</span>
              </button>
            </div>

            {/* Post Button */}
            <div onClick={handleAddPost} className="mt-4">
              <Button text={'Post'}></Button>
            </div>
          </div>

          {/* Right Section (Posts) */}
          <div className="col-span-7 p-6 border border-gray-700 rounded-2xl shadow-lg bg-gradient-to-br from-black via-gray-900 to-black text-gray-300">
            {data?.data?.map(post => (
              <div
                key={post._id}
                className="mb-7 p-5 border border-gray-600 rounded-xl  transition-transform duration-300 shadow-md text-gray-100"
              >
                <div className="flex items-center gap-4 mb-2">
                  <img
                    src={post?.userId?.picture}
                    alt="User Picture"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h2 className="text-lg font-bold text-white">
                      {post?.userId?.name || 'Anonymous'}
                    </h2>
                    <p className="text-sm text-gray-400">
                      {post?.userId?.email || 'No email'}
                    </p>
                  </div>
                </div>

                <p className=" text-lg leading-relaxed font-medium">
                  {post?.description}
                </p>
                {/* actions */}
                <div className="flex justify-between mt-6">
                  <button className="cursor-pointer hover:bg-gray-500 px-2 py-1 duration-300 transition-all ease-in flex gap-1  items-center text-lg justify-center">
                    <AiTwotoneLike className="" />
                    Like
                  </button>
                  <button
                    className="cursor-pointer hover:bg-gray-500 px-2 py-1 duration-300 transition-all ease-in  flex gap-1  items-center text-lg justify-center"
                    onClick={() =>
                      setActivePostId(
                        activePostId === post._id ? null : post._id
                      )
                    }
                  >
                    <FaRegComment />
                    Comment
                  </button>
                  <button className="cursor-pointer hover:bg-gray-500 px-2 py-1 duration-300 transition-all ease-in  flex gap-1  items-center text-lg justify-center">
                    <PiShareFat />
                    Share
                  </button>
                </div>

                {/* Comment Input */}
                {activePostId === post._id && (
                  <div className="mt-4 flex gap-2 relative">
                    <input
                      type="text"
                      placeholder="Write a comment..."
                      className="w-full p-3 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-600 placeholder-gray-400"
                    />
                    <button className="mt-2 absolute right-4 top-1 text-blue-500 rounded-lg text-base">
                      <LuSend className="text-2xl" />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpDesk;
