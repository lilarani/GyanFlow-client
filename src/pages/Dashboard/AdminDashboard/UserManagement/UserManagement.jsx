import { useSelector } from 'react-redux';
import { RiDeleteBin2Line } from 'react-icons/ri';

const UserManagement = () => {
  const { user } = useSelector(state => state.authUser);

  return (
    <div className="bg-gradient-to-bl z-50 to-[#170445] from-[#130456] text-gray-300 p-8">
      <h2 className="text-2xl font-bold"> Manage your users</h2>
      <div className="mt-6">
        <table className="min-w-full">
          <thead className="text-lg">
            <tr className="bg-gray-800 text-gray-300">
              <th className="px-4 py-2 text-left">No</th>
              <th className="px-4 py-2 text-left">User Name</th>
              <th className="px-4 py-2 text-left">User Email</th>
              <th className="px-4 py-2 text-left">Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-base">
              <td className="px-4 py-2 text-left"></td>
              <td className="px-4 py-2 text-left">Windows</td>
              <td className="px-4 py-2 text-left">2025-03-19</td>
              <td className="px-4 py-2 text-left">
                <button className=" px-3 py-1 rounded cursor-pointer">
                  <RiDeleteBin2Line className="text-3xl text-red-500" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
