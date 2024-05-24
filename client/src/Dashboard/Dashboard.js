import React, { useState, useEffect } from "react";
import bg_image from "../Assets/dsb-bg.jpg";

function MaintenanceData() {
    const [maintenanceData, setMaintenanceData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const authToken = sessionStorage.getItem('token');
    console.log("Auth Token:", authToken);

    useEffect(() => {
        const fetchMaintenanceData = async () => {
            try {
                const response = await fetch("http://localhost:3000/api", {
                    headers: {
                        "Authorization": `Bearer ${authToken}`
                    }
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                setMaintenanceData(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching maintenance data:", error);
                setError("Failed to fetch maintenance data");
                setLoading(false);
            }
        };

        fetchMaintenanceData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="bg-cover flex flex-col bg-center min-h-screen items-center" style={{ backgroundImage: `url(${bg_image})` }}>
            <h2 className="text-3xl text-white font-bold mb-4 mt-10">Maintenance Data</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center mx-20 gap-4">
                {maintenanceData.map((item) => (
                    <div key={item._id} className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-2">Equipment: {item.equipment}</h3>
                        <p className="text-sm mb-2">Maintenance Date: {item.maintenanceDate}</p>
                        <p className="text-sm">Maintenance Description: {item.maintenanceDescription}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MaintenanceData;
