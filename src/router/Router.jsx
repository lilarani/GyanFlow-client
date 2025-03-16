import { createBrowserRouter } from 'react-router';
import Main from '../MainLayout/Main';
import Home from '../pages/Home/Home';
import Login from '../authentication/Login/Login';
import Register from '../authentication/Register/Register';
import Support from '../pages/Support/Support';
import About from '../pages/About/About';
import DashboardPage from '../pages/Dashboard/DashboardPage/DashboardPage';
import Statistics from '../components/Dashboard/Statistics/Statistics';

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
      {
        path: '/dashboard',
        element: <Statistics></Statistics>,
      },
    ],
  },
]);
