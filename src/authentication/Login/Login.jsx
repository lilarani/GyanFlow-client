import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { Link, useNavigate } from 'react-router';
import { useState } from 'react';
import { auth } from '../../../firebase.config';
import {
  useGoogleLoginMutation,
  useLogInUserMutation,
} from '../../redux/ApiCalling/apiClice';
import logImg from '../../assets/images/login.jpg';
import { Eye, EyeOff } from 'lucide-react';

export default function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  let [googleLogin] = useGoogleLoginMutation();
  let [logInUser] = useLogInUserMutation();
  const [showPassword, setShowPassword] = useState(false);

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const res = await signInWithPopup(auth, provider);
      let user = res.user;
      // console.log(res.user);
      const userData = {
        email: user.email,
        name: user.displayName,
        // phone: user.phoneNumber ,
        picture: user.photoURL,
      };

      const response = await googleLogin(userData).unwrap();

      // console.log(response.data);
      console.log('Google login successful');
      navigate('/');
    } catch (e) {
      setError(e.message);
      // console.error(e);
    }
  };

  let getEmail = () => {
    if (email) {
      navigate(`/forgot-pass/${email}`);
    } else {
      setError('type your email');
    }
  };

  const handleEmailPasswordLogin = async e => {
    e.preventDefault();
    setError('');
    try {
      let res = await logInUser({ email, password }).unwrap();
      // console.log(res);
      localStorage.setItem('token', res?.data?.token);
      await signInWithEmailAndPassword(auth, email, password);

      console.log('Email/Password login successful');
      navigate('/');
    } catch (e) {
      setError(e?.data?.message);
      // console.error(e.message);
    }
  };
  //  toggle password
  const togglePassword = () => {
    setTimeout(() => {
      setShowPassword(prev => !prev);
    }, 150);
  };

  return (
    <div className="bg-gradient-to-bl to-[#1a044d] from-[#080127] ">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen items-center justify-center p-6 w-10/12 mx-auto my-shadow">
        <div className="relative h-full ">
          <img
            src={logImg}
            alt="login image"
            className="bg-blue-500 opacity-25 h-full w-full bg-blend-overlay"
          />
          <div className="text-white absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <h2 className="text-base md:text-3xl  font-bold">
              Welcome Back to <span className="text-yellow-300">Gyan</span>Flow
            </h2>
            <p className="text-base  text-gray-300 p-3 font-medium">
              Log in to continue your learning journey. Access interactive
              classes, connect with educators, and explore a world of
              knowledge—all in one place.
            </p>
          </div>
        </div>

        {/* login form */}
        <div className="w-full text-white  h-full rounded-none p-6 shadow-md flex flex-col items-center justify-center">
          <h2 className="mb-4 text-center text-2xl font-bold">Sign-in</h2>
          <form
            className="flex flex-col gap-5 w-full"
            onSubmit={handleEmailPasswordLogin}
          >
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className=" w-full rounded-none outline-none border p-2"
              required
            />

            <div className="relative mb-4">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className=" w-full rounded-none outline-none border p-2"
                required
              />
              <span
                onClick={togglePassword}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            </div>

            {error && <p className="text-red-400 text-start ">{error}</p>}
            <p onClick={getEmail} className="py-2 cursor-pointer">
              forgot password
            </p>
            <button
              type="submit"
              className=" my-button w-full cursor-pointer rounded-none p-2 text-white font-bold "
            >
              Sign In
            </button>
            <p
              onClick={handleGoogleLogin}
              className=" my-button w-full cursor-pointer rounded-none p-2 text-white text-center font-bold"
            >
              Sign in with Google
            </p>
          </form>

          <p className="text-left">
            New here? Start your journey by{' '}
            <span className="text-blue-500 font-bold cursor-pointer underline">
              <Link to={'/register/student'}>register with student</Link>
            </span>{' '}
            {''}
            today!
          </p>
        </div>
      </div>
    </div>
  );
}
