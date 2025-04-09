import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DashboardNavbar from '../DashboardNavbar/DashboardNavbar';
import { FiEdit } from 'react-icons/fi';
import { Link } from 'react-router';
import {
  useGetMyUserQuery,
  useUpdateUserMutation,
} from '@/redux/ApiCalling/apiClice';

import { BsUpload } from 'react-icons/bs';
import Button from '@/components/customs/Button';

let ImageHostKey = '47b25851b9d300db92da4ca62f89a4bb';
let ImageHosting = `https://api.imgbb.com/1/upload?key=${ImageHostKey}`;

const UserProfile = () => {
  const { user } = useSelector(state => state.authUser);
  console.log(user?.data?._id);

  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(user?.data?.name);
  const [phone, setPhone] = useState(user?.data?.phone);
  const [id, setStudentId] = useState(user?.data?._id);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userPhoto, setUserPhoto] = useState('');

  // profile image hangle
  const [preview, setPreview] = useState(null);

  const [updateUser] = useUpdateUserMutation();

  const handleFileChange = e => {
    const file = e.target.files[0];
    console.log(e.target.files, 'my file');
    setUserPhoto(file);
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }
  };

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleSaveChanges = async () => {
    // console.log('Updated Data:', { name, email, phone, password });
    let changesData = user?.data?.picture;
    if (userPhoto) {
      const imageData = new FormData();

      imageData.append('image', userPhoto);
      console.log(imageData, 'image');
      try {
        const res = await fetch(ImageHosting, {
          method: 'POST',
          body: imageData,
        });
        const imgData = await res.json();
        if (imgData.success) {
          console.log(imgData, 'neela');
          changesData = imgData.data.url;
        }
      } catch (error) {
        console.log(error);
        return;
      }
    }
    let info = { name, phone, picture: changesData };
    await updateUser({ id, info }).unwrap();
    setEditMode(false);
  };

  return (
    <div className="bg-gradient-to-bl to-[#0e0227] from-[#0b022e]">
      <div className="">
        <DashboardNavbar
          navTitle={
            <Link to={'/'}>
              <span className="text-yellow-300">G</span>yanFlow
            </Link>
          }
        />
        <div className="min-h-screen flex flex-col md:flex-row gap-5 container mx-auto">
          {/* Sidebar */}
          <div className="w-80 bg-gradient-to-bl to-[#1a044d] from-[#080127] shadow-lg p-8  mt-4 text-gray-300 flex flex-col items-center">
            <img
              src={user?.data?.picture}
              alt="user image"
              className="w-32 h-32 rounded-full "
            />
            <ul className="mt-6 space-y-4 text-white text-center">
              <li className="font-semibold text-lg">{user?.data?.name}</li>
              <li className="font-semibold text-base">{user?.data?.email}</li>
              <li className="font-semibold ">
                Phone:
                {user?.data?.phone || 'N/A'}
              </li>
            </ul>
          </div>

          {/* Profile Section */}
          <div className="flex-1 gap-8 mt-6">
            <div className="bg-[#0B1739] shadow-md rounded-lg text-gray-300">
              <div className="flex items-center p-6 justify-between border-dashed border-b-[1px] border-gray-500">
                <h2 className="text-xl font-semibold">My Profile</h2>
                <FiEdit
                  className="text-base md:text-2xl cursor-pointer"
                  onClick={handleEditClick}
                />
              </div>

              {/* user info */}
              <div className="p-6 space-y-6  w-3/4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-lg font-bold text-gray-400">
                      Full Name
                    </label>
                    {editMode ? (
                      <input
                        type="text"
                        // value={user?.data?.name}
                        defaultValue={user?.data?.name}
                        onChange={e => setName(e.target.value)}
                        className="w-full p-2 rounded bg-gray-800 text-white"
                      />
                    ) : (
                      <h2 className="text-lg font-semibold">
                        {' '}
                        {user?.data?.name}
                      </h2>
                    )}
                  </div>
                  <div>
                    <label className="text-lg font-bold text-gray-400">
                      Email
                    </label>
                    {editMode ? (
                      <input
                        type="email"
                        value={user?.data?.email}
                        onChange={e => setEmail(e.target.value)}
                        className="w-full p-2 rounded bg-gray-800 text-white"
                      />
                    ) : (
                      <h2 className="text-lg font-semibold">
                        {' '}
                        {user?.data?.email}
                      </h2>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
                  <div>
                    <label className="text-lg font-bold text-gray-400">
                      Student Id
                    </label>
                    {editMode ? (
                      <input
                        type="text"
                        value={id}
                        onChange={e => setStudentId(e.target.value)}
                        className="w-full p-2 rounded bg-gray-800 text-white"
                      />
                    ) : (
                      <h2 className="text-lg font-semibold">
                        {user?.data?._id}
                      </h2>
                    )}
                  </div>
                  <div>
                    <label className="text-lg font-bold text-gray-400">
                      Mobile Number
                    </label>
                    {editMode ? (
                      <input
                        type="text"
                        // value={user?.data?.phone}
                        defaultValue={user?.data?.phone}
                        onChange={e => setPhone(e.target.value)}
                        className="w-full p-2 rounded bg-gray-800 text-white"
                      />
                    ) : (
                      <h2 className="text-lg font-semibold">
                        {user?.data?.phone || 'N/A'}
                      </h2>
                    )}
                  </div>
                </div>

                {/* image change fields */}
                {editMode && (
                  <div className="space-y-3">
                    <div>
                      <h2 className="text-2xl font-bold">Profile image</h2>

                      <h2 className="flex gap-2 items-center mt-4 font-bold text-base">
                        <BsUpload />
                        Change Profile Image
                      </h2>
                    </div>

                    {/* Upload Button is the Image */}

                    <label htmlFor="fileUpload" className="cursor-pointer">
                      <img
                        src={preview || `${user?.data?.picture}`}
                        alt="Upload"
                        className="w-32 h-32 object-cover border rounded-full shadow-md hover:scale-105 transition"
                      />
                    </label>

                    {/* Hidden File Input */}
                    <input
                      type="file"
                      id="fileUpload"
                      className="hidden"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  </div>
                )}

                {/* Password Change Fields */}
                {editMode && (
                  <div>
                    <h2 className="text-2xl font-bold border-b-[1px] border-dashed p-2 mt-14 border-gray-700">
                      Password
                    </h2>
                    <div className="mt-8">
                      <label className="text-lg font-bold text-gray-400">
                        Current Password
                      </label>
                      <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="w-full p-2 rounded bg-gray-800 text-white"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <div>
                        <label className="text-lg font-bold text-gray-400">
                          New Password
                        </label>
                        <input
                          type="password"
                          value={password}
                          onChange={e => setPassword(e.target.value)}
                          className="w-full p-2 rounded bg-gray-800 text-white"
                        />
                      </div>
                      <div>
                        <label className="text-lg font-bold text-gray-400">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          value={confirmPassword}
                          onChange={e => setConfirmPassword(e.target.value)}
                          className="w-full p-2 rounded bg-gray-800 text-white"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Save Button */}
                {editMode && (
                  <div onClick={handleSaveChanges}>
                    <Button text={'Save changes'}></Button>
                  </div>
                )}
              </div>

              {/* Device Activity */}
              <div>
                <h2 className="text-base md:text-xl font-bold p-6 mt-10 border-gray-700 border-b-[1px] border-dashed">
                  Device Activity
                </h2>

                <div className="mt-6">
                  <table className="w-full">
                    <thead className="">
                      <tr className="bg-gray-800 text-gray-300 text-sm md:text-lg">
                        <th className="px-4 py-2 text-left">Serial</th>
                        <th className="px-4 py-2 text-left">Platform</th>
                        <th className="px-4 py-2 text-left">Date</th>
                        <th className="px-4 py-2 text-left">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-base">
                        <td className="px-4 py-2 text-left">1</td>
                        <td className="px-4 py-2 text-left">Windows</td>
                        <td className="px-4 py-2 text-left">2025-03-19</td>
                        <td className="px-4 py-2 text-left">
                          <button className="text-yellow-400 px-3 py-1 rounded cursor-pointer">
                            Remove
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
