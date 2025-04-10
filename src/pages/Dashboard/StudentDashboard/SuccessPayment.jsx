import React from 'react';

const SuccessPayment = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-green-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full text-center">
        <h2 className="text-3xl font-semibold text-green-600 mb-4">
          Payment Successful!
        </h2>
        <p className="text-gray-600 mb-6">
          Your payment has been processed successfully. Thank you for your
          purchase!
        </p>
        <button className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600 transition duration-300">
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default SuccessPayment;
