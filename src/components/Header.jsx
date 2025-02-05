import { Link, useNavigate } from "react-router-dom";
import React from "react";

const Header = () => {
  return (
    <nav className="bg-gray-100 shadow-md">
      <div className="flex justify-between h-16 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-xl font-bold text-gray-800">
            React<span className="text-gradient">Blogs</span>
          </Link>
        <div className="flex justify-items-start gap-1 sm:gap-2 md:gap-4 lg:gap-6">
          <Link
            to="/"
            className="text-gray-600 hover:text-black transition ease-in-out duration-300 hover:scale-110"
          >
            Home
          </Link>
          <Link
            to="/blogs"
            className="text-gray-600 hover:text-black transition ease-in-out duration-300 hover:scale-110"
          >
            Blogs
          </Link>
          <Link to="/favorites" className="text-gray-600 hover:text-black transition ease-in-out duration-300 hover:scale-110">
            Favorites
          </Link>
          <Link
            to="/add-blog"
            className="text-gray-600 hover:text-black transition ease-in-out duration-300 hover:scale-110"
          >
            Add Blog
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
