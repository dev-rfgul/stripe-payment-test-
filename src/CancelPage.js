import React from 'react';

const CancelPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-red-50">
            <div className="text-center p-6 bg-white shadow-lg rounded-lg max-w-md">
                <h1 className="text-2xl font-bold text-red-600">Payment Canceled</h1>
                <p className="text-gray-600 mt-4">
                    Your transaction was canceled. If you'd like to proceed, please try again.
                </p>
                <a
                    href="/"
                    className="mt-6 inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                >
                    Go back to Homepage
                </a>
            </div>
        </div>
    );
};

export default CancelPage;
