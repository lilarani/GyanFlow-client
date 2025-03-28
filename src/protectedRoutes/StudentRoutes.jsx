import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Navigate } from 'react-router';  

export default function StudentRoutes({ children }) {
    const { user, loader } = useSelector(state => state.authUser);
    console.log({user , loader})
    if (loader) {
        return  (
            <div className="flex justify-center items-center h-screen">
                <div className="space-x-2 flex">
                    <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
                    <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.6s]"></div>
                </div>
            </div>
        );
    }

    if (user && user.data.role === "student") {
        
        return children;
    }

    return <Navigate to="/login" replace />;

}
