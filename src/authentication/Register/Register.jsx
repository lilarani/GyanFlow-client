import { useNavigate, useParams } from 'react-router';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase.config';
import { useCreateUserMutation } from '../../redux/ApiCalling/apiClice';

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

      toast('Registration successful!');
      navigate('/');
    } catch (error) {
      console.error('Registration Error:', error);
      toast(error.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-bl from-blue-950 to-[#3d023f] p-6">
      <div className="w-full text-white my-shadow max-w-md rounded-none p-6 shadow-md">
        <h2 className="mb-4 text-center text-2xl font-bold">Register {role}</h2>
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
            {isLoading ? 'pagli please wait...' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
}
