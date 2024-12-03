import React from 'react';

const SuccessPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-green-50">
            <div className="text-center p-6 bg-white shadow-lg rounded-lg max-w-md">
                <h1 className="text-2xl font-bold text-green-600">Payment Successful!</h1>
                <p className="text-gray-600 mt-4">
                    Thank you for your purchase. Your transaction was completed successfully.
                </p>
                <a
                    href="/"
                    className="mt-6 inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                >
                    Go back to Homepage
                </a>
            </div>
        </div>
    );
};

export default SuccessPage;
