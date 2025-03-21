import { Outlet } from 'react-router';

import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from '../../../firebase.config';
import { setUser, setLoader } from '../../redux/authSlice';
import Navbar from '../../components/Home/Navbar/Navbar';
import Footer from '../../components/Home/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import { useLogOutUserMutation, useGetMyUserQuery } from '@/redux/ApiCalling/apiClice';
import axios from 'axios';

export default function Main() {
  const dispatch = useDispatch();
  let [logOutUser] = useLogOutUserMutation()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      dispatch(setLoader(true));
      if (user) {
        try {
          const res = await axios.get(`http://localhost:4000/gyanflow/user/role/${user?.email}`);
          dispatch(setUser(res.data));
          console.log(res.data);
        } catch (error) {
          console.error("Error fetching user role:", error);
        } finally {
          dispatch(setLoader(false));
        }
      } else {
        try {
          await logOutUser();
          dispatch(setUser(null));
          console.log('User not found, logged out.');
        } catch (error) {
          console.error("Logout Error:", error);
        } finally {
          dispatch(setLoader(false));
        }
      }
    });

    return () => unsubscribe();
  }, [dispatch, logOutUser]);

  return (
    <div className="w-full">
      <ToastContainer />

      <Navbar></Navbar>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}
