import { createBrowserRouter } from 'react-router';
import StudentDashboard from '@/pages/Dashboard/StudentDashboard/StudentDashboard';
import AddCourses from '@/pages/Dashboard/AdminDashboard/AddCourses/AddCourses';
import Main from '../layouts/MainLayout/Main';
import Home from '../pages/Home/Home';
import Login from '../authentication/Login/Login';
import Register from '../authentication/Register/Register';
import Support from '../pages/Support/Support';
import About from '../pages/About/About';
import Error from '@/pages/Error/Error';
import Dashboard from '@/layouts/DashboardLayout/Dashboard/Dashboard';
import Courses from '@/pages/Dashboard/AdminDashboard/Courses/Courses';
import UserManagement from '@/pages/Dashboard/AdminDashboard/UserManagement/UserManagement';
import InstructorDashboard from '@/pages/Dashboard/InstructorDashboard/InstructorDashboard/InstructorDashboard';
import UserProfile from '@/components/Dashboard/UserProfile/UserProfile';
import AdminDashboard from '@/pages/Dashboard/AdminDashboard/AdminDashboard';
import Career from '@/pages/Career/Career';
import TecherDashboard from '@/pages/Dashboard/TecherDashboard/TecherDashboard';
import StudentRoutes from './../protectedRoutes/StudentRoutes';
import AdminRoute from './../protectedRoutes/AdminRoute';
import UploadModul from '@/pages/Dashboard/InstructorDashboard/InstructorDashboard/UploadModul';
import FeaturesCourseDetails from '@/pages/FeaturesCourseDetails/FeaturesCourseDetails';
import AllCourses from '@/pages/AllCourses/AllCourses';
import SuccessPayment from '@/pages/Dashboard/StudentDashboard/SuccessPayment';
import ActionalDashboard from '@/pages/Dashboard/StudentDashboard/ActionalDashboard';
import { Chat } from '@/pages/Dashboard/Chat/Chat';
import AddAnnouncement from '@/pages/Dashboard/AdminDashboard/AddAnnouncement/AddAnnouncement';
import SeeVideo from '@/shared/CustomButtons/SeeVideo';
import CreateMeeting from '@/pages/Dashboard/InstructorDashboard/InstructorDashboard/CreateMeeting';
import CreateModule from '@/pages/Dashboard/InstructorDashboard/InstructorDashboard/CreateModule';
import ForgotPass from '../authentication/Login/ForgotPass';
import MeetingRoute from '@/protectedRoutes/MeetingRoute';
import JoinClassRoom from '../pages/Dashboard/InstructorDashboard/InstructorDashboard/JoinClassRoom';
import MyCoursesVideo from '@/pages/Dashboard/StudentDashboard/MyCoursesVideo';
import InstructorDashboardProgress from '@/pages/Dashboard/InstructorDashboard/InstructorDashboard/InstructorDashboardProgress';
import CourseAnnouncement from '@/pages/Dashboard/StudentDashboard/CourseAnnouncement';
<<<<<<< HEAD
import PaymentHistory from '@/pages/Dashboard/AdminDashboard/AddAnnouncement/PaymentHistory/PaymentHistory';
=======
import HelpDesk from '@/pages/HelpDesk/HelpDesk';
>>>>>>> 53a62572d445b0dbc11c5ae30c66082fc7a48873

// import { createBrowserRouter } from 'react-router';
// import StudentDashboard from '@/pages/Dashboard/StudentDashboard/StudentDashboard';
// import AddCourses from '@/pages/Dashboard/AdminDashboard/AddCourses/AddCourses';
// import Main from '../layouts/MainLayout/Main';
// import Home from '../pages/Home/Home';
// import Login from '../authentication/Login/Login';
// import Register from '../authentication/Register/Register';
// import Support from '../pages/Support/Support';
// import About from '../pages/About/About';
// import Error from '@/pages/Error/Error';
// import Dashboard from '@/layouts/DashboardLayout/Dashboard/Dashboard';
// import Courses from '@/pages/Dashboard/AdminDashboard/Courses/Courses';
// import UserManagement from '@/pages/Dashboard/AdminDashboard/UserManagement/UserManagement';
// import InstructorDashboard from '@/pages/Dashboard/InstructorDashboard/InstructorDashboard/InstructorDashboard';
// import UserProfile from '@/components/Dashboard/UserProfile/UserProfile';
// import AdminDashboard from '@/pages/Dashboard/AdminDashboard/AdminDashboard';
// import Career from '@/pages/Career/Career';
// import TecherDashboard from '@/pages/Dashboard/TecherDashboard/TecherDashboard';
// import StudentRoutes from './../protectedRoutes/StudentRoutes';
// import AdminRoute from './../protectedRoutes/AdminRoute';
// import UploadModul from '@/pages/Dashboard/InstructorDashboard/InstructorDashboard/UploadModul';
// import SeeVideo from './../shared/CustomButtons/SeeVideo';
// import CreateMeeting from '@/pages/Dashboard/InstructorDashboard/InstructorDashboard/CreateMeeting';
// import JoinClassRoom from '@/pages/Dashboard/InstructorDashboard/InstructorDashboard/JoinClassRoom';
// import MeetingRoute from '@/protectedRoutes/MeetingRoute';
// import FeaturesCourseDetails from '@/pages/FeaturesCourseDetails/FeaturesCourseDetails';
// import CourseAnnoucement from '@/pages/Dashboard/StudentDashboard/CourseAnnoucement';
// import AllCourses from '@/pages/AllCourses/AllCourses';
// import CreateModule from '@/pages/Dashboard/InstructorDashboard/InstructorDashboard/CreateModule';
// import SuccessPayment from '@/pages/Dashboard/StudentDashboard/SuccessPayment';
// import ActionalDashboard from '@/pages/Dashboard/StudentDashboard/ActionalDashboard';
// import ForgotPass from '@/authentication/Login/ForgotPass';
// import MyCoursesVideo from '@/pages/Dashboard/StudentDashboard/MyCoursesVideo';

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
      {
        path: '/career',
        element: <Career></Career>,
      },

      {
        path: '/CourseVideo/:courseId',
        element: <MyCoursesVideo></MyCoursesVideo>,
      },
      {
        path: '/featuresDetails/:id',
        element: <FeaturesCourseDetails></FeaturesCourseDetails>,
      },
      {
        path: '/AllCourses',
        element: <AllCourses></AllCourses>,
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
    path: '/successedPayment',
    element: <SuccessPayment></SuccessPayment>,
  },

  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      // admin related routes

      {
        path: 'adminDashboard',
        element: (
          <AdminRoute>
            <AdminDashboard></AdminDashboard>
          </AdminRoute>
        ),
      },
      {
        path: 'courses',
        element: (
          <AdminRoute>
            <Courses />
          </AdminRoute>
        ),
      },
      {
        // dashboard/addCourse'
        path: 'addCourse',
        element: (
          <AdminRoute>
            <AddCourses />
          </AdminRoute>
        ),
      },
      {
        // dashboard/addAnnouncement'
        path: 'addAnnouncement',
        element: (
          <AdminRoute>
            <AddAnnouncement />
          </AdminRoute>
        ),
      },
      {
        // dashboard/paymentHistory'
        path: 'paymentHistory',
        element: (
          <AdminRoute>
            <PaymentHistory/>
          </AdminRoute>
        ),
      },
      {
        path: 'userManagement',
        element: <UserManagement></UserManagement>,
      },
      // student related  routes
      {
        path: 'studentDashboard',
        element: (
          <StudentRoutes>
            <StudentDashboard></StudentDashboard>
          </StudentRoutes>
        ),
      },
      {
        path: 'actionaldashboard',
        element: (
          <StudentRoutes>
            <ActionalDashboard></ActionalDashboard>
          </StudentRoutes>
        ),
      },
      {
        // dashboard/allAnnouncement'
        path: 'allAnnouncement',
        element: <CourseAnnouncement />,
      },
      {
        path: 'teacherDashboard',

        element: <TecherDashboard></TecherDashboard>,
      },
      {
        path: 'instructorDashboard',
        element: <InstructorDashboard></InstructorDashboard>,
      },
      {
        path: 'instructorDashboard/action/:id',
        element: <UploadModul></UploadModul>,
        children: [
          {
            path: 'see-video/:id',
            element: <SeeVideo></SeeVideo>,
          },
        ],
      },

      {
        path: 'create-meeting',
        element: <CreateMeeting></CreateMeeting>,
      },
      {
        path: 'create-module',
        element: <CreateModule></CreateModule>,
      },
      {
        path: 'instructor-Dashboard-progress',
        element: <InstructorDashboardProgress></InstructorDashboardProgress>,
      },
    ],
  },
  {
    path: '*',
    element: <Error></Error>,
  },
  {
    path: 'chat',
    element: <Chat></Chat>,
  },
  {
    path: '/forgot-pass/:email',
    element: <ForgotPass></ForgotPass>,
  },
  {
    path: 'profile',
    element: <UserProfile></UserProfile>,
  },
  {
    path: '/join-meeting',
    element: (
      <MeetingRoute>
        <JoinClassRoom></JoinClassRoom>
      </MeetingRoute>
    ),
  },
  {
    path: '/helpDesk',
    element: <HelpDesk></HelpDesk>,
  },
]);
