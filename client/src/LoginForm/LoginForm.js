// Login Form Component
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bg_image from '../Assets/fm-pg-bg.jpg';
import { useAppContext } from "../App/AppContext";

function LoginForm() {
    const { handleLogin, resetRegistrationSuccess, registrationSuccess } = useAppContext();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (registrationSuccess) {
            const timer = setTimeout(() => {
                resetRegistrationSuccess();
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [registrationSuccess, resetRegistrationSuccess]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        try {
            const response = await fetch("http://localhost:3000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                if (response.status === 400) {
                    throw new Error("Invalid email or password");
                }
                throw new Error("Something went wrong");
            }

            const data = await response.json();
            const token = data.token;

            sessionStorage.setItem("token", token);

            setEmail("");
            setPassword("");
            setError(null);
            handleLogin();
            
        } catch (error) {
            console.error("Error:", error);
            setError("invalid email or password.");
            setIsLoading(false);
        } finally {
            setIsLoading(false)
        }
    };

    return (
        <div className="main-div" style={{ backgroundImage: `url(${bg_image})` }}>
            <div className="form-div">
                <h2 className="form-header">Sign In</h2>
                {registrationSuccess && <p className="text-red-500 mb-4">Please login to continue</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <input
                            type="text"
                            id="email"
                            value={email}
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            className='login-input'
                        />
                    </div>
                    <div className="mb-2">
                        <input
                            type="password"
                            id="password"
                            value={password}
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            className='login-input'
                        />
                    </div>
                    <button type="submit" disabled={isLoading} className='button-primary'>
                        {isLoading? 'logging in...' : 'Login'}
                    </button>
                    {error && <p className="text-red-500">{error}</p>}
                    <p className="error-message">
                        Don't have an account? <Link to="/register"><span className="font-semibold underline">Sign Up</span></Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
