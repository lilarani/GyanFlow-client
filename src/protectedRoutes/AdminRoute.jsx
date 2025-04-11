import React from 'react';
import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';

export default function AdminRoute({ children }) {
  const { user, loader } = useSelector(state => state.authUser);
  // console.log({ user, loader })
  if (loader) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="space-x-2 flex">
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.6s]"></div>
        </div>
      </div>
    );
  }

  if (user && user?.role === 'admin') {
    return children;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Navigate to="/login" replace />;
}
