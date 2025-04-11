import { Link, useLocation, useNavigate, useParams } from 'react-router';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase.config';
import { useCreateUserMutation } from '../../redux/ApiCalling/apiClice';
import regImg from '../../assets/images/signup.jpg';
import { Eye, EyeOff } from 'lucide-react';

export default function Register() {
  let { role } = useParams();
  let userRole = useLocation().pathname.split('/')[2];
  let navigate = useNavigate();
  const [createUser, { isLoading }] = useCreateUserMutation();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    role: role,
    picture:
      'https://img.freepik.com/free-photo/top-view-pink-flower-with-drops_1112-450.jpg?uid=R187535479&ga=GA1.1.1477002296.1724664851&semt=ais_hybrid',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { name, phone, email, password } = formData;

    if (name.trim().length < 3) {
      setErrorMsg('Name must be at least 3 characters.');
      return false;
    }

    if (!/^\d{10,}$/.test(phone)) {
      setErrorMsg('Phone must be at least 10 digits.');
      return false;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setErrorMsg('Invalid email format.');
      return false;
    }

    if (password.length < 6) {
      setErrorMsg('Password must be at least 6 characters.');
      return false;
    }

    if (!password || password.length < 6) {
      setErrorMsg('Password must be at least 6 characters.');
      return false;
    }

    if (!/\d/.test(password)) {
      setErrorMsg('Password must contain at least one number.');
      return false;
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setErrorMsg('Password must contain at least one special character.');
      return false;
    }


    setErrorMsg('');
    return true;
  };

  const handleRegister = async e => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData?.email,
        formData?.password
      );

      const user = userCredential.user;
      const result = await createUser(formData).unwrap();
      localStorage.setItem('token', result?.data?.token);
      toast('Registration successful!');
      navigate('/');
    } catch (error) {
      console.error('Registration Error:', error);
      setErrorMsg(error.message);
    }
  };

  const togglePassword = () => {
    setTimeout(() => {
      setShowPassword(prev => !prev);
    }, 150);
  };

  return (
    <div className="bg-gradient-to-bl to-[#1a044d] from-[#080127]">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen items-center justify-center mx-auto p-6 w-10/12 ">
        <div className="h-full relative w-full">
          <img
            src={regImg}
            alt="register image"
            className="object-cover bg-blue-500 opacity-40 h-full w-full bg-blend-overlay"
          />
          <div className="text-white absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <h2 className="text-base md:text-3xl font-bold">
              GyanFlow - Where Learning Meets Innovation
            </h2>
            <p className="text-sm md:text-base text-gray-300 p-3 font-medium">
              Join GyanFlow’s interactive classroom to learn, connect, and
              grow—all in one place.
            </p>
          </div>
        </div>

        {/* register form */}
        <div className="w-full text-white my-shadow h-full rounded-none p-6 shadow-md flex flex-col items-center justify-center">
          <h2 className="mb-4 text-center text-2xl font-bold">Register {role}</h2>
          <form onSubmit={handleRegister} className="w-full">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="mb-2 w-full rounded-none outline-none border p-2"
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="mb-2 w-full rounded-none outline-none border p-2"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="mb-2 w-full rounded-none outline-none border p-2"
            />
            <div className="relative mb-4">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full rounded-none outline-none border p-2 pr-10"
              />
              <span
                onClick={togglePassword}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            </div>

            <button
              type="submit"
              className="mb-2 my-button w-full cursor-pointer rounded-none p-2 text-white"
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : 'Register'}
            </button>

            {errorMsg && (
              <p className="text-red-500 text-sm mt-2 text-center">{errorMsg}</p>
            )}

            <p className="text-left mt-3">
              Already have an account?{' '}
              <span className="text-blue-500 font-bold cursor-pointer underline">
                <Link to={'/login'}>Login</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
