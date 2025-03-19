
import { createBrowserRouter } from "react-router";
import AdminDashboard from "@/pages/Dashboard/AdminDashboard/AdminDashboard";
import StudentDashboard from "@/pages/Dashboard/StudentDashboard/StudentDashboard";
import AddCourses from "@/pages/Dashboard/AdminDashboard/AddCourses/AddCourses";
import { createBrowserRouter } from 'react-router';
import Main from '../layouts/MainLayout/Main';
import Home from '../pages/Home/Home';
import Login from '../authentication/Login/Login';
import Register from '../authentication/Register/Register';
import Support from '../pages/Support/Support';
import About from '../pages/About/About';
import Error from '@/pages/Error/Error';
import Dashboard from '@/layouts/DashboardLayout/Dashboard/Dashboard';
import AdminDashboard from '@/pages/Dashboard/AdminDashboard/AdminDashboard';
import Courses from '@/pages/Dashboard/AdminDashboard/Courses/Courses';
import StudentDashboard from '@/pages/Dashboard/StudentDashboard/StudentDashboard';
import UserProfile from '@/components/Dashboard/UserProfile/UserProfile';
import Features from '@/pages/Dashboard/AdminDashboard/Features/Features';
import InstructorDashboard from '@/pages/Dashboard/InstructorDashboard/InstructorDashboard/InstructorDashboard';
import UserManagement from '@/pages/Dashboard/AdminDashboard/UserManagement/UserManagement';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/support",
        element: <Support></Support>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register/:role",
    element: <Register></Register>,
  },

  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      // admin related routes
      {
        index: true, // Default route inside 'dashboard'
        element: <AdminDashboard></AdminDashboard>,
      },
      {
        path: "adminDashBoard",
        element: <AdminDashboard></AdminDashboard>,
      },
      {
        path: "features",
        element: <Features></Features>,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {

        path: "addCourse",
        element: <AddCourses />,

        path: 'userManagement',
        element: <UserManagement></UserManagement>,

      },
      // student related  routes
      {
        path: "studentDashboard",
        element: <StudentDashboard></StudentDashboard>,
      },
      {
        path: "instructorDasboard",
        element: <InstructorDashboard></InstructorDashboard>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
  {
    path: "profile",
    element: <UserProfile></UserProfile>,
  },
]);
