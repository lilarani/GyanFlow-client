import { Outlet } from 'react-router';

import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from '../../firebase.config';
import { setUser } from '../redux/authSlice';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

export default function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      console.log(user);
      if (user) {
        dispatch(setUser(user));
      } else {
        console.log('user cannot fund');
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div>
      <Navbar></Navbar>
      <h1 className="text-center uppercase font-bold text-blue-800 text-5xl">
        This is main page
      </h1>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}
