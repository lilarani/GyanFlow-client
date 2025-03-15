import { useNavigate, useParams } from "react-router";
import { useState } from "react";
import axios from 'axios';
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase.config";

export default function Register() {
  let { role } = useParams();
  let navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    role: role,
    picture: 'https://img.freepik.com/free-photo/top-view-pink-flower-with-drops_1112-450.jpg?uid=R187535479&ga=GA1.1.1477002296.1724664851&semt=ais_hybrid'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then(async res => {
          const response = await axios.post('http://localhost:4000/gyanflow/user/regiser', formData, {
            withCredentials: true
          });
          toast('okey')
          if (response.data.success) {
            navigate('/');
            toast('done');
            console.log(response.data)
          } else {
            toast('something wrong')
          }
        })
        .catch((e) => {
          toast(e.message)
        })




    } catch (error) {
      toast('something wrong', error.message)

    }
  }

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
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
