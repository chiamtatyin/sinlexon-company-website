import React, { useState } from 'react';
    import { Routes, Route, useNavigate } from 'react-router-dom';
    import Home from './pages/Home';
    import Portfolio from './pages/Portfolio';
    import Contact from './pages/Contact';
    import Navbar from './components/Navbar';
    import Footer from './components/Footer';
    import AdminLogin from './pages/admin/AdminLogin';
    import AdminDashboard from './pages/admin/AdminDashboard';
    import { AuthContext } from './context/AuthContext';
    import Settings from './pages/admin/Settings';
    import UploadProject from './pages/admin/UploadProject';
    import ChangePhotos from './pages/admin/ChangePhotos';

    function App() {
      const [isLoggedIn, setIsLoggedIn] = useState(false);
      const navigate = useNavigate();

      const login = () => {
        setIsLoggedIn(true);
        navigate('/admin');
      };

      const logout = () => {
        setIsLoggedIn(false);
        navigate('/');
      };

      return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/admin/settings" element={<Settings />} />
                <Route path="/admin/upload-project" element={<UploadProject />} />
                <Route path="/admin/change-photos" element={<ChangePhotos />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </AuthContext.Provider>
      );
    }

    export default App;
