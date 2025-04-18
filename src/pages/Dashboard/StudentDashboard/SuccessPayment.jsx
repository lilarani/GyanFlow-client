import React from 'react';
import { Link } from 'react-router';

const SuccessPayment = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-bl to-[#1a044d] from-[#080127]">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full text-center">
        <h2 className="text-3xl font-semibold text-green-600 mb-4">
          Payment Successful!
        </h2>
        <p className="text-gray-600 mb-6 text-base">
          Your payment has been processed successfully. Thank you for your
          purchase!
        </p>
        <Link
          to={'/'}
          className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600 transition duration-300"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default SuccessPayment;
