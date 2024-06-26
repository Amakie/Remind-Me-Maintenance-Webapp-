import React, { useEffect, useState } from "react";
import bg_image from "../Assets/dsb-bg.jpg";
import { useNavigate } from 'react-router-dom';

function Reminder() {
    const [equipment, setEquipment] = useState('');
    const [maintenanceDate, setMaintenanceDate] = useState('');
    const [maintenanceDescription, setMaintenanceDescription] = useState('');
    const [error, setError] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [minDate, setMinDate] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const authToken = sessionStorage.getItem('token');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await fetch("http://localhost:3000/api/createReminder", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${authToken}`
                },
                body: JSON.stringify({ equipment, maintenanceDate, maintenanceDescription })
            });
            if (!response.ok) {
                throw new Error("Something went wrong.");
            }

            setEquipment("");
            setMaintenanceDate("");
            setMaintenanceDescription("");
            setError(null);
            setSubmitted(true);
            setSuccessMessage("Reminder added successfully!");
            setTimeout(() => {
                navigate('/dashboard');
            }, 2000);
        } catch (error) {
            console.error("Error:", error);
            setError("Something went wrong. Please try again later.");
        }
    };

    useEffect(() => {
        const formatDate = (date) => {
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        };

        const today = formatDate(new Date());
        setMinDate(today);

      
    }, []);

    return (
        <div className="bg-cover flex flex-col justify-center bg-center h-screen" style={{ backgroundImage: `url(${bg_image})` }}>
            <div className="max-w-lg my-20 mx-auto mt-0 md:mt-20 lg:mt-[90px] p-6 bg-white rounded-xl">
                {submitted && !error && <p className="text-green-500 mt-2 mb-2">{successMessage}</p>}
                <h1 className="text-2xl font-semibold mb-4 text-burgundy text-center">Create New Reminder</h1>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <div className="flex flex-col mt-5">
                        <label htmlFor="equipment">Equipment</label>
                        <input
                            type="text"
                            id="equipment"
                            value={equipment}
                            onChange={(e) => setEquipment(e.target.value)}
                            className="w-full border mt-1 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-burgundy"
                        />
                    </div>
                    <div className="flex flex-col mt-5">
                        <label htmlFor="maintenanceDate">Maintenance Date</label>
                        <input
                            type="datetime-local"
                            id="maintenanceDate"
                            min={minDate}
                            value={maintenanceDate}
                            onChange={(e) => setMaintenanceDate(e.target.value)}
                            className="w-full mt-1 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-burgundy"
                        />
                    </div>
                    <div className="flex flex-col mt-5">
                        <label htmlFor="maintenanceDescription">Maintenance Description</label>
                        <textarea
                            id="maintenanceDescription"
                            value={maintenanceDescription}
                            onChange={(e) => setMaintenanceDescription(e.target.value)}
                            className="w-full mt-1 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-burgundy"
                        />
                    </div>
                    <button type="submit" className="w-full mt-3 bg-burgundy text-white px-4 py-2 rounded-md hover:bg-black">Submit</button>
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                </form>
            </div>
        </div>
    );
}

export default Reminder;
