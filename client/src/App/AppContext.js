import React, { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

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
        <AppContext.Provider
            value={{
                isLoggedIn,
                registrationSuccess,
                isLargeScreen,
                isSidebarOpen,
                isOpen,
                toggleDropdown,
                //handleLogin,
                handleRegister,
                handleSignOut,
                toggleSidebar,
            }}
            >
                {children}
            </AppContext.Provider>
    );
};