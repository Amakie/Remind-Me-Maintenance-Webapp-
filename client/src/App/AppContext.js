// src/contexts/AppContext.js

import React, { createContext, useState, useEffect, useContext } from "react";

export const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
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

    const toggleSidebar = () => {
        if (isSidebarOpen && window.innerWidth >= 1024) {
            setIsSidebarOpen(false);
        } else {
            setIsSidebarOpen(!isSidebarOpen);
        }
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

    return (
        <AppContext.Provider
            value={{
                isLoggedIn,
                handleLogin,
                handleSignOut,
                registrationSuccess,
                handleRegister,
                resetRegistrationSuccess,
                isLargeScreen,
                isSidebarOpen,
                toggleSidebar,
                isOpen,
                toggleDropdown,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
