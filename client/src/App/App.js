import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LoginForm from '../LoginForm/LoginForm';
// import Dashboard from '../Dashboard/Dashboard';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import LandingPage from '../LandingPage/LandingPage';
import '../styles.css';
import { AppProvider, useAppContext } from "./AppContext";


function App() {
    const {isLoggedIn} = useAppContext;

        return (
        <AppProvider>
            <Router>
                <div className="flex flex-col min-h-screen">
                    <Header />
                    <main className=" bg-gray-200">
                        <Routes>
                            {!isLoggedIn && <Route exact path="/" element={<LandingPage />} />}
                            {!isLoggedIn && <Route path="/login" element={<LoginForm />} />}
                            {!isLoggedIn && <Route path="/register" element={<RegistrationForm />} />}
                            {isLoggedIn && <Route path="/" element={<LandingPage />} />}
                            <Route path="*" element={<Navigate to="/" />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </AppProvider>
    );
}


export default App;