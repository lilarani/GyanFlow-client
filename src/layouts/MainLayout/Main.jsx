import { Outlet } from 'react-router';

import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../../../firebase.config';
import { setUser, setLoader } from '../../redux/authSlice';
import Navbar from '../../components/Home/Navbar/Navbar';
import Footer from '../../components/Home/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import {
  useLogOutUserMutation,
  useGetMyUserMutation,
} from '@/redux/ApiCalling/apiClice';
import WelcomeModal from '@/components/welcomModal/WelcomeModal';

export default function Main() {
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();
  let [logOutUser] = useLogOutUserMutation();
  let [getMyuser] = useGetMyUserMutation();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async user => {
      dispatch(setLoader(true));

      if (user) {
        try {
          // const res = await axios.get(
          //   `https://gyanflow-server.onrender.com/gyanflow/user/role/${user?.email}`
          // );
          const res = await getMyuser(user?.email).unwrap();
          // console.log('our api response for user informations ', res);
          dispatch(setUser(res?.data));
          dispatch(setLoader(false));

          // console.log(res?.data);
          localStorage.setItem('token', res?.token);
        } catch (error) {
          // console.error('Error fetching user role:', error);
        } finally {
          dispatch(setLoader(false));
        }
      } else {
        try {
          localStorage.removeItem('token');
          dispatch(setUser(null));
          dispatch(setLoader(false));

          console.log('User not found, logged out.');
        } catch (error) {
          console.error('Logout Error:', error);
        } finally {
          dispatch(setLoader(false));
        }
      }
    });

    return () => unsubscribe();
  }, [dispatch, logOutUser]);

  return (
    <div className="w-full">
      {/* {open && <WelcomeModal open={open} setOpen={setOpen} />} */}

      <Navbar></Navbar>
      <div>
        <Outlet></Outlet>
        <ToastContainer />
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
