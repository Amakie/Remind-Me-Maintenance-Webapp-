// Registration Form Component
import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import bg_image from '../Assets/fm-pg-bg.jpg';

function RegistrationForm({ handleRegister, registrationSuccess }) {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            setIsLoading(false);
            return;
        }

        try {
            const userData = { firstname, lastname, email, password };
            const response = await fetch("http://localhost:3000/api/register", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                console.log('Registration successful!');
                handleRegister();
            } else {
                const data = await response.json();
                setError(data.message);
                console.log (data)
            }
        } catch (error) {
            console.error("Error:", error);
            setError('An unexpected error occurred. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };
    if (registrationSuccess) {
        console.log('success');
        return <Navigate to="/login" />;
    }

    return (
        <div className="bg-cover flex flex-col justify-center bg-center min-h-screen" style={{ backgroundImage: `url(${bg_image})` }}>
            <div className="max-w-sm my-20 mx-20 sm:ml-10 lg:ml-40 mt-0 md:mt-20 md:ml-40 lg:mt-10 p-6 bg-white rounded-xl">
                <h2 className="text-2xl text-burgundy font-sembold mb-4 font-bold text-center">Create new account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <input
                            type="text"
                            id="firstname"
                            value={firstname}
                            placeholder="First Name"
                            onChange={(e) => setFirstname(e.target.value)}
                            required
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-burgundy"
                        />
                    </div>
                    <div className="mb-2">
                        <input
                            type="text"
                            id="lastname"
                            value={lastname}
                            placeholder="Last Name"
                            onChange={(e) => setLastname(e.target.value)}
                            required
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-burgundy"
                        />
                    </div>
                    <div className="mb-2">
                        <input
                            type="text"
                            id="email"
                            value={email}
                            placeholder="Enter Your Email Address"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-burgundy"
                        />
                    </div>
                    <div className="mb-2">
                        <input
                            type="password"
                            id="password"
                            value={password}
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-burgundy"
                        />
                    </div>
                    <div className="mb-2">
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            placeholder="Confirm Password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-burgundy"
                        />
                    </div>
                    <button type="submit" disabled={isLoading} className="w-full mt-5 text-md font-semibold bg-burgundy text-white px-4 py-2 rounded-md hover:bg-black">
                        {isLoading ? 'Registering...' : 'Register'}
                    </button>
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                    <p className="text-center text-burgundy mt-3">
                        Already have an account? <Link to="/login"><span className="font-semibold underline">Log In</span></Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;
