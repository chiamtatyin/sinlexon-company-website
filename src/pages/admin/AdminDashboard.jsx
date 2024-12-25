import React, { useContext } from 'react';
    import { AuthContext } from '../../context/AuthContext';
    import { useNavigate } from 'react-router-dom';

    function AdminDashboard() {
      const { isLoggedIn } = useContext(AuthContext);
      const navigate = useNavigate();

      if (!isLoggedIn) {
        navigate('/admin/login');
        return null;
      }

      return (
        <div className="container mx-auto p-4">
          <h1 className="text-4xl font-bold mb-4">Admin Dashboard</h1>
          <div className="bg-gray-100 p-4 rounded shadow">
            <h2 className="text-2xl font-semibold mb-2">Settings</h2>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4">
              Manage Settings
            </button>
            <h2 className="text-2xl font-semibold mb-2 mt-4">Upload Project</h2>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4">
              Upload Project
            </button>
            <h2 className="text-2xl font-semibold mb-2 mt-4">Change Photos</h2>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Change Photos
            </button>
          </div>
        </div>
      );
    }

    export default AdminDashboard;
