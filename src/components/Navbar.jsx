import React, { useContext } from 'react';
    import { Link } from 'react-router-dom';
    import { AuthContext } from '../context/AuthContext';

    function Navbar() {
      const { isLoggedIn, logout } = useContext(AuthContext);

      return (
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-white font-bold text-xl">Sinlexon Construction</Link>
            <div className="space-x-6">
              <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
              <Link to="/portfolio" className="text-gray-300 hover:text-white">Portfolio</Link>
              <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
              {isLoggedIn && (
                <button onClick={logout} className="text-gray-300 hover:text-white">Logout</button>
              )}
              {!isLoggedIn && (
                <Link to="/admin/login" className="text-gray-300 hover:text-white">Admin</Link>
              )}
            </div>
          </div>
        </nav>
      );
    }

    export default Navbar;
