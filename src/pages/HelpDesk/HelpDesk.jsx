import Button from '@/components/customs/Button';
import HelpDeskNavbar from '@/components/Home/HelpDeskNavbar/HelpDeskNavbar';
import {
  useGetAllPostsQuery,
  usePostsMutation,
} from '@/redux/ApiCalling/apiClice';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const HelpDesk = () => {
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
          <div className="col-span-7 p-4 borderborder-gray-700 rounded-2xl shadow-md  bg-black text-gray-300">
            {data?.data?.map(post => (
              <div key={post._id} my-shadow>
                <p className="text-gray-300 text-base leading-relaxed">
                  {post?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpDesk;
