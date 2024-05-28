import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LoginForm from '../LoginForm/LoginForm';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import LandingPage from '../LandingPage/LandingPage';
import SetReminder from '../Reminder/SetReminder';
import Dashboard from '../Dashboard/Dashboard';
import '../styles/main.css';
import { AppProvider, useAppContext } from "./AppContext";

function App() {
    const { isLoggedIn, registrationSuccess } = useAppContext();

    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow bg-gray-200">
                    <Routes>
                        {!isLoggedIn && (
                            <>
                                <Route exact path="/" element={<LandingPage />} />
                                <Route path="/login" element={<LoginForm />} />
                                <Route path="/register" element={<RegistrationForm />} />
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

export default function AppWithProvider() {
    return (
        <AppProvider>
            <App />
        </AppProvider>
    );
}
