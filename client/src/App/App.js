import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LoginForm from '../LoginForm/LoginForm';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import LandingPage from '../LandingPage/LandingPage';
import SetReminder from '../Reminder/SetReminder';
import Dashboard from '../Dashboard/Dashboard';
import '../styles/main.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLogin = () => {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
    };
    

    const handleRegister = () => {
        setRegistrationSuccess(true);
    };

    const resetRegistrationSuccess = () => {
        setRegistrationSuccess(false);
    };

    const handleSignOut = () => {
        setIsLoggedIn(false);
        localStorage.setItem('isLoggedIn', 'false');
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
                <main className="flex-grow bg-gray-200">
                    <Routes>
                        {!isLoggedIn && (
                            <>
                                <Route exact path="/" element={<LandingPage isLargeScreen={isLargeScreen} />} />
                                <Route path="/login" element={<LoginForm onLogin={handleLogin} registrationSuccess={registrationSuccess} resetRegistrationSuccess={resetRegistrationSuccess} />} />
                                <Route path="/register" element={<RegistrationForm handleRegister={handleRegister} registrationSuccess={registrationSuccess} />} />
                                {registrationSuccess && <Route path="*" element={<Navigate to="/login" />} />}
                                <Route path="*" element={<Navigate to="/" />} />
                            </>
                        )}
                        {isLoggedIn && (
                            <>
                                <Route path="/" element={<Dashboard />} />
                                <Route path="/createReminder" element={<SetReminder />} />
                                <Route path="/dashboard" element={<Dashboard />} />
                                <Route path="*" element={<Navigate to="/" />} />
                            </>
                        )}

                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;