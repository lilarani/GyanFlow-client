import { Outlet } from 'react-router';

import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from '../../firebase.config';
import { setUser } from '../redux/authSlice';
import Navbar from '../components/Home/Navbar/Navbar';
import Footer from '../components/Home/Footer/Footer';
import { ToastContainer } from 'react-toastify';

export default function Main() {
  const dispatch = useDispatch();
  let {user} = useSelector(state => state.authUser)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      console.log(user);
      if (user) {
        dispatch(setUser(user));
      } else {
        dispatch(setUser(null));
        console.log('user cannot fund');
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

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
