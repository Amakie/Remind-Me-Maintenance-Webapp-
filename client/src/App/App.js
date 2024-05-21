import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LoginForm from '../LoginForm/LoginForm';
// import Dashboard from '../Dashboard/Dashboard';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import LandingPage from '../LandingPage/LandingPage';
import '../styles.css';
// import EditProfile from "../Profile/EditProfile";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleRegister = () => {
        setRegistrationSuccess(true);
    };

    const handleSignOut = () => {
        setIsLoggedIn(false);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
            if (window.innerWidth >= 1024) {
                setIsSidebarOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleSidebar = () => {
        if (isSidebarOpen && window.innerWidth >= 1024) {
            setIsSidebarOpen(false);
        } else {
            setIsSidebarOpen(!isSidebarOpen);
        }
    };

    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Header toggleDropdown={toggleDropdown} isOpen={isOpen} isLoggedIn={isLoggedIn} isLargeScreen={isLargeScreen} handleSignOut={handleSignOut} isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
                <main className=" bg-gray-200">
                    <Routes>
                        {!isLoggedIn && <Route exact path="/" element={<LandingPage isLargeScreen={isLargeScreen}/>} />}
                        {!isLoggedIn && <Route path="/login" element={<LoginForm onLogin={handleLogin} registrationSuccess={registrationSuccess} />} />}
                        {!isLoggedIn && <Route path="/register" element={<RegistrationForm onRegister={handleRegister} />} />}
                        {isLoggedIn && <Route path="/" element={<LandingPage isLargeScreen={isLargeScreen}/>} />}
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}


export default App;