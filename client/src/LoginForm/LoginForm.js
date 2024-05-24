import React, { useState} from "react";
import { Link } from "react-router-dom";
import bg_image from '../Assets/fm-pg-bg.jpg'

function LoginForm({ onLogin, registrationSuccess }){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        try{
            const response = await fetch("http://localhost:3000/api/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });
            if (!response.ok) {
                if (response.status === 401) {
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
            setIsLoading(false);
            onLogin();
            console.log("Auth Token:", token);
        } catch (error) {
            console.error("Error:", error);
            setError("Something went wrong. Please try again later.");
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-cover flex flex-col justify-center bg-center h-screen" style={{ backgroundImage: `url(${bg_image})` }}>
            <div className="max-w-sm  my-20 mx-20 sm:ml-10 lg:ml-40 mt-0 md:mt-20 md:ml-40 lg:mt-10 p-6 bg-white rounded-xl">
                <h2 className="text-2xl font-sembold mb-4 text-burgundy text-center font-bold">Sign In</h2>
                {registrationSuccess && <p className="text-red-500 mb-4">Please login to continue</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <input 
                            type="text" 
                            id="email" 
                            value={email}
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)} 
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
                            className="w-full mt-5 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-burgundy" 
                        />
                    </div>
                    <button type="submit" disabled={isLoading} className="w-full mt-3 bg-burgundy text-white px-4 py-2 rounded-md hover:bg-black">Login</button>
                    {error && <p className="text-red-500">{error}</p>}
                    <p className="text-center text-sm sm:text-sm text-burgundy mt-3">Don't have an account? <Link to={'/Register'}><span className="font-semibold underline">Sign Up</span></Link></p>
                </form>
            </div>
        </div>
    );
}

export default LoginForm