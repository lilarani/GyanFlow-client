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

export default function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  let [googleLogin] = useGoogleLoginMutation();
  let [logInUser] = useLogInUserMutation();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const res = await signInWithPopup(auth, provider);
      let user = res.user;
      console.log(res.user);
      const userData = {
        email: user.email,
        name: user.displayName,
        // phone: user.phoneNumber ,
        picture: user.photoURL,
      };

      const response = await googleLogin(userData).unwrap();

      console.log(response.data);
      console.log('Google login successful');
      navigate('/');
    } catch (e) {
      setError(e.message);
      console.error(e);
    }
  };

  const handleEmailPasswordLogin = async e => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // const response = await axios.post('http://localhost:4000/gyanflow/user/login', { email, password }, {
      //   withCredentials: true
      // });

      let res = await logInUser({ email, password }).unwrap();
      console.log(res);

      // const response = await axios.post(
      //   'http://localhost:4000/gyanflow/user/login',
      //   { email, password },
      //   {
      //     withCredentials: true,
      //   }
      // );
      console.log('Email/Password login successful');
      navigate('/');
    } catch (e) {
      setError(e.message);
      console.error(e);
    }
  };

  return (
    <div className="bg-gradient-to-bl to-[#1a044d] from-[#080127] ">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen items-center justify-center p-6 w-10/12 mx-auto">
        <div className="relative h-full">
          <img
            src={logImg}
            alt="login image"
            className="bg-blue-500 opacity-50 h-full w-full"
          />
          <div className="text-white absolute text-center top-1/6 md:top-1/3 ">
            <h2 className="text-base md:text-xl font-bold">
              Welcome Back to GyanFlow
            </h2>
            <p className="text-sm md:text-base  text-gray-300 p-3 font-medium">
              Log in to continue your learning journey. Access interactive
              classes, connect with educators, and explore a world of
              knowledge—all in one place.
            </p>
          </div>
        </div>

        {/* login form */}
        <div className="w-full text-white my-shadow max-w-md rounded-none p-6 shadow-md h-full flex flex-col justify-center items-center">
          <h2 className="mb-4 text-center text-2xl font-bold">Login</h2>
          {error && <p className="text-red-400 text-center">{error}</p>}
          <form onSubmit={handleEmailPasswordLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="mb-2 w-full rounded-none outline-none border p-2"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="mb-4 w-full rounded-none outline-none border p-2"
              required
            />
            <button
              type="submit"
              className="mb-2 my-button w-full cursor-pointer rounded-none p-2 text-white"
            >
              Sign In
            </button>
          </form>
          <button
            onClick={handleGoogleLogin}
            className="mb-2 my-button w-full cursor-pointer rounded-none p-2 text-white"
          >
            Sign in with Google
          </button>
          <p className="text-left">
            New here? Start your journey by{' '}
            <span className="text-blue-500 cursor-pointer underline">
              <Link to={'/register/:role'}>registering</Link>
            </span>{' '}
            {''}
            today!
          </p>
        </div>
      </div>
    </div>
  );
}
