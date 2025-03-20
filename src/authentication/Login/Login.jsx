import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { useNavigate } from 'react-router';
import { useState } from 'react';
import { auth } from '../../../firebase.config';
import { useGoogleLoginMutation, useLogInUserMutation } from '../../redux/ApiCalling/apiClice';

export default function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  let [googleLogin] = useGoogleLoginMutation()
  let [logInUser] = useLogInUserMutation()

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const res = await signInWithPopup(auth, provider);
      let user = res.user
      console.log(res.user);
      const userData = {
        email: user.email,
        name: user.displayName,
        // phone: user.phoneNumber ,
        picture: user.photoURL 
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
      // const response = await axios.post('https://gyanflow-server.onrender.com/gyanflow/user/login', { email, password }, {
      //   withCredentials: true
      // });

      let res = await logInUser({email , password}).unwrap()
      console.log(res)

      // const response = await axios.post(
      //   'https://gyanflow-server.onrender.com/gyanflow/user/login',
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
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-bl from-blue-950 to-[#3d023f] p-6">
      <div className="w-full text-white my-shadow max-w-md rounded-none p-6 shadow-md">
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
      </div>
    </div>
  );
}
