import React from 'react'
import { useSelector } from 'react-redux';

export default function MeetingRoute({children}) {
    const { user, loader } = useSelector(state => state.authUser);
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

    if (user) {

        return children;
    }

    return <Navigate to="/login" replace />;

}
