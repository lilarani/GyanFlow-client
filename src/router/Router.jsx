import { createBrowserRouter } from "react-router";
import Main from "../MainLayout/Main";
import Home from "../pages/Home/Home";
import Login from "../authentication/Login/Login";
import Register from "../authentication/Register/Register";


export const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            }
        ],
    },
    {
        path : '/login',
        element : <Login></Login>
    },
    {
        path : '/register',
        element : <Register></Register>
    }
])

