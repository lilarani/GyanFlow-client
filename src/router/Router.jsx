import { createBrowserRouter } from 'react-router';
import Main from '../layouts/MainLayout/Main';
import Home from '../pages/Home/Home';
import Login from '../authentication/Login/Login';
import Register from '../authentication/Register/Register';
import Support from '../pages/Support/Support';
import About from '../pages/About/About';
import DashboardPage from '../pages/Dashboard/DashboardPage/DashboardPage';
import AdminDash from '@/layouts/DashboardLayout/AdminDashboard/AdminDash/AdminDash';
import Features from '@/layouts/DashboardLayout/AdminDashboard/Features/Features';
// import StudentDash from '@/layouts/DashboardLayout/StudentDashboard/StudentDash/StudentDash';
import InstructorDash from '@/layouts/DashboardLayout/InstructorDashboard/InstructorDash/InstructorDash';
import StudentDashboard from '@/DashboardLayout/StudentDashboard/StudentDashboard';
import Error from '@/pages/Error/Error';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/support',
        element: <Support></Support>,
      },
    ],
  },
  {
    path: '/login',
    element: <Login></Login>,
  },
  {
    path: '/register/:role',
    element: <Register></Register>,
  },
  {
    path: '/dashboard',
    element: <DashboardPage></DashboardPage>,
    children: [
      // admin related routes
      {
        index: true, // Default route inside 'dashboard'
        element: <AdminDash></AdminDash>,
      },
      {
        path: 'adminDashBoard',
        element: <AdminDash></AdminDash>,
      },
      {
        path: 'features',
        element: <Features></Features>,
      },

      // student related  routes
      {
        path: 'studentDashboard',
        element: <StudentDashboard></StudentDashboard>,
      },
      {
        path: 'instructorDasboard',
        element: <InstructorDash></InstructorDash>,
      },
    ],
  },
  {
    path:'*',
    element:<Error></Error>
  }
]);
