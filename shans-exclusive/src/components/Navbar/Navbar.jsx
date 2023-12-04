import React from 'react';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // If you're using React Router
import { FaShoppingCart, FaUser } from 'react-icons/fa'; // Import icons from React Icons
import Landing from '../Landing/Landing';

const Navbar = () => {
  return (
    <nav className="bg-saffron-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold">
          <img src="/images/thumbLogo.png" alt="Logo" className="w-20 h-20 p-2" />
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-4">
          <li>
            <Link to="/categories" className="text-3xl text-white hover:text-bronze-200">
              Categories
            </Link>
          </li>
        
          <li>
            <Link to="/products" className="text-3xl text-white hover:text-bronze-200"> Products</Link>
          </li>
          {/* Add more navigation links */}
        </ul>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="text-white hover:text-bronze-100">
            <FaShoppingCart size={24} />
          </Link>
          <Link to="/account" className="text-white hover:text-bronze-100">
            <FaUser size={24} />
          </Link>
        </div>
      </div>
      <Routes>
        <Route exact path="/" element={<Landing/>}/>
      </Routes>
    </nav>
  );
};

export default Navbar;
