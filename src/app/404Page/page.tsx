import Link from 'next/link';
import React from 'react'

const Custom404 = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex items-center justify-center">
            <div className="text-center p-6 bg-black/50 rounded-lg shadow-lg max-w-md">
                <h1 className="text-6xl font-extrabold text-red-500 mb-4">404</h1>
                <p className="text-2xl font-semibold mb-2">Oops! The page you're looking for doesn't exist.</p>
                <p className="text-md text-gray-300 mb-6">
                    It seems you've hit a dead end. The link may be broken, or the page may have been removed.
                </p>
                <p className="text-lg mb-6">
                    If you believe this is an error, please <span className="font-semibold text-blue-400">contact our administrator</span> for assistance.
                </p>
                <Link href="/">
                    <span className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors">
                        Go Back to Home
                    </span>
                </Link>
            </div>
        </div>

    );
};

export default Custom404;
