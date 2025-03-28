import { Link, useNavigate, useParams } from 'react-router';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase.config';
import { useCreateUserMutation } from '../../redux/ApiCalling/apiClice';
import regImg from '../../assets/images/signup.jpg';

export default function Register() {
  let { role } = useParams();
  let navigate = useNavigate();
  const [createUser, { isLoading, isError }] = useCreateUserMutation();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    role: role,
    picture:
      'https://img.freepik.com/free-photo/top-view-pink-flower-with-drops_1112-450.jpg?uid=R187535479&ga=GA1.1.1477002296.1724664851&semt=ais_hybrid',
  });
  console.log(role);
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRegister = async e => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const user = userCredential.user;
      const result = await createUser(formData).unwrap();
      console.log('hello my backend response:', result);
      localStorage.setItem('token' , result?.data?.token)
      toast('Registration successful!');
      navigate('/');
    } catch (error) {
      console.error('Registration Error:', error);
      toast(error.message);
    }
  };
  // bg-gradient-to-bl from-blue-950 to-[#3d023f]
  return (
    <div className="bg-gradient-to-bl to-[#1a044d] from-[#080127]">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen items-center justify-center mx-auto p-6 w-10/12 ">
        <div className=" h-full relative w-full ">
          <img
            src={regImg}
            alt="register image"
            className="   bg-blue-500 opacity-40 h-full w-full bg-blend-overlay"
          />

          <div className="text-white absolute inset-0 flex flex-col items-center justify-center text-center p-6 ">
            <h2 className="text-base md:text-3xl font-bold">
              GyanFlow - Where Learning Meets Innovation
            </h2>
            <p className="text-sm md:text-base  text-gray-300 p-3 font-medium">
              Join GyanFlow’s interactive classroom to learn, connect, and
              grow—all in one place.
            </p>
          </div>
        </div>

        {/* register form */}
        <div className="w-full text-white my-shadow h-full rounded-none p-6 shadow-md flex flex-col items-center justify-center">
          <h2 className="mb-4 text-center text-2xl font-bold">
            Register {role}
          </h2>
          <form onSubmit={handleRegister}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="mb-2 w-full rounded-none outline-none border p-2 "
              required
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="mb-2 w-full rounded-none outline-none border p-2 "
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="mb-2 w-full rounded-none outline-none border p-2 "
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="mb-4 w-full rounded-none outline-none border p-2 "
              required
            />
            <button
              type="submit"
              className="mb-2 my-button w-full cursor-pointer rounded-none p-2 text-white "
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : 'Register'}
            </button>
            <p className="text-left">
              Already Have an account? Please{' '}
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
