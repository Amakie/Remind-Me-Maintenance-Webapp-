import React, { useState, useEffect } from "react";
import { Navigate, Link } from "react-router-dom";
import moment from "moment-timezone";
import bg_image from '../Assets/fm-pg-bg.jpg';
import { useAppContext } from "../App/AppContext";

function RegistrationForm() {
    const { handleRegister, registrationSuccess } = useAppContext();
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [timeZone, setTimeZone] = useState('');
    const [timeZones, setTimeZones] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch time zones from moment-timezone
        const timeZones = moment.tz.names();
        setTimeZones(timeZones);
    }, []);

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
            const userData = { firstname, lastname, email, password, timeZone };
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
                console.log(data);
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
        <div className="main-div" style={{ backgroundImage: `url(${bg_image})` }}>
            <div className="form-div">
                <h2 className="form-header mb-2">Create new account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <input
                            type="text"
                            id="firstname"
                            value={firstname}
                            placeholder="First Name"
                            onChange={(e) => setFirstname(e.target.value)}
                            required
                            className="register-input"
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
                            className="register-input"
                        />
                    </div>
                    <div className="mb-2">
                        <input
                            type="email"
                            id="email"
                            value={email}
                            placeholder="Enter Your Email Address"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="register-input"
                        />
                    </div>
                    <div className="mb-2">
                        <select
                            id="timeZone"
                            value={timeZone}
                            onChange={(e) => setTimeZone(e.target.value)}
                            required
                            className="register-input"
                        >
                            <option value="" disabled>Select Time Zone</option>
                            {timeZones.map((tz) => (
                                <option key={tz} value={tz}>{tz}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-2">
                        <input
                            type="password"
                            id="password"
                            value={password}
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="register-input"
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
                            className="register-input"
                        />
                    </div>
                    
                    <button type="submit" disabled={isLoading} className="button-primary">
                        {isLoading ? 'Registering...' : 'Register'}
                    </button>
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                    <p className="error-message">
                        Already have an account? <Link to="/login"><span className="font-semibold underline">Log In</span></Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;
