
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8">
        <h1 className="text-6xl font-bold text-ejobs-orange mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-ejobs-black mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-8">The page you are looking for doesn't exist or has been moved.</p>
        <Link to="/" className="btn-primary inline-block">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
