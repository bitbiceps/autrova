import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
      <h1 className="text-[120px] font-bold text-gray-300 leading-none">404</h1>
      <h2 className="text-4xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-8">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-3 text-white bg-[#f16821] hover:bg-[#d6571b] rounded text-lg transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;