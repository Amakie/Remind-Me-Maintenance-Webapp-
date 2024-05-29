import React, { useState, useEffect } from "react";
import bg_image from "../Assets/dsb-bg.jpg";

function MaintenanceData() {
    const [maintenanceData, setMaintenanceData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editingRecord, setEditingRecord] = useState(null);
    const [equipment, setEquipment] = useState('');
    const [maintenanceDate, setMaintenanceDate] = useState('');
    const [maintenanceDescription, setMaintenanceDescription] = useState('');
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    const authToken = sessionStorage.getItem('token');

    useEffect(() => {
        const fetchMaintenanceData = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/dashboard", {
                    headers: {
                        "Authorization": `Bearer ${authToken}`
                    }
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                setMaintenanceData(data);
            } catch (error) {
                console.error("Error fetching maintenance data:", error);
                setError("Failed to fetch maintenance data");
            } finally {
                setLoading(false);
            }
        };

        fetchMaintenanceData();
    }, [authToken]);

    const handleEdit = (item) => {
        setEditingRecord(item);
        setEquipment(item.equipment);
        setMaintenanceDate(item.maintenanceDate);
        setMaintenanceDescription(item.maintenanceDescription);
    };

    const handleUpdate = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/updateReminder/${editingRecord._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${authToken}`
                },
                body: JSON.stringify({ equipment, maintenanceDate, maintenanceDescription })
            });

            if (!response.ok) {
                throw new Error("Failed to update record");
            }

            setEditingRecord(null);
            setEquipment('');
            setMaintenanceDate('');
            setMaintenanceDescription('');
            setError(null);

            // Refresh the data
            const updatedData = await response.json();
            setMaintenanceData((prevData) =>
                prevData.map(item => item._id === updatedData._id ? updatedData : item)
            );
        } catch (error) {
            console.error("Error updating record:", error);
            setError("Failed to update record");
        }
    };

    const handleDeleteClick = (id) => {
        setDeleteId(id);
        setShowDeleteConfirm(true);
    };

    const handleDeleteConfirm = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/deleteReminder/${deleteId}`, {
                method: "DELETE",
                headers: {
                    'Authorization': `Bearer ${authToken}`
                },
            });

            if (!response.ok) {
                throw new Error("Failed to delete record");
            }

            // Refresh the data
            setMaintenanceData((prevData) => prevData.filter((item) => item._id !== deleteId));
            setShowDeleteConfirm(false);
            setDeleteId(null);
        } catch (error) {
            console.error("Error deleting record:", error);
            setError("Failed to delete record");
        }
    };

    const handleDeleteCancel = () => {
        setShowDeleteConfirm(false);
        setDeleteId(null);
    };

    if (loading) {
        return <div className="main-div-dashboard" style={{ backgroundImage: `url(${bg_image})` }}>Loading...</div>;
    }

    if (error) {
        return <div className="main-div-dashboard" style={{ backgroundImage: `url(${bg_image})` }}>Error: {error}</div>;
    }

    return (
        <div className="main-div-dashboard" style={{ backgroundImage: `url(${bg_image})` }}>
            <h2 className="text-3xl text-white font-bold mb-4 mt-[90px]">Maintenance Data</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center mx-20 gap-4">
                {maintenanceData.map((item) => (
                    <div key={item._id} className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-2">Equipment: {item.equipment}</h3>
                        <p className="text-sm font-semibold mb-2">Maintenance Date: <span className="font-normal">{item.maintenanceDate}</span></p>
                        <p className="text-sm font-semibold">Maintenance Description: <span className="font-normal">{item.maintenanceDescription}</span></p>
                        <div className="flex mt-4">
                            <button
                                onClick={() => handleEdit(item)}
                                className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2 hover:bg-blue-700"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDeleteClick(item._id)}
                                className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-700"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {editingRecord && (
                <div className="bg-white absolute z-1 p-4 rounded-lg shadow-lg mt-[90px]">
                    <h3 className="text-lg font-semibold mb-4">Edit Maintenance Record</h3>
                    <div className="flex flex-col mt-5">
                        <label htmlFor="equipment">Equipment</label>
                        <input
                            type="text"
                            id="equipment"
                            value={equipment}
                            onChange={(e) => setEquipment(e.target.value)}
                            className="edit-maintenance-items"
                        />
                    </div>
                    <div className="flex flex-col mt-5">
                        <label htmlFor="maintenanceDate">Maintenance Date</label>
                        <input
                            type="datetime-local"
                            id="maintenanceDate"
                            value={maintenanceDate}
                            onChange={(e) => setMaintenanceDate(e.target.value)}
                            className="edit-maintenance-items"
                        />
                    </div>
                    <div className="flex flex-col mt-5">
                        <label htmlFor="maintenanceDescription">Maintenance Description</label>
                        <textarea
                            id="maintenanceDescription"
                            value={maintenanceDescription}
                            onChange={(e) => setMaintenanceDescription(e.target.value)}
                            className="edit-maintenance-items"
                        />
                    </div>
                    <button
                        onClick={handleUpdate}
                        className="w-full mt-3 bg-burgundy text-white px-4 py-2 rounded-md hover:bg-black"
                    >
                        Update
                    </button>
                    <button
                        onClick={() => setEditingRecord(null)}
                        className="w-full mt-3 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-700"
                    >
                        Cancel
                    </button>
                </div>
            )}

            {showDeleteConfirm && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold mb-4">Confirm Delete</h3>
                        <p className="mb-4">Are you sure you want to delete this maintenance record?</p>
                        <div className="flex justify-end">
                            <button
                                onClick={handleDeleteConfirm}
                                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 mr-2"
                            >
                                Yes, Delete
                            </button>
                            <button
                                onClick={handleDeleteCancel}
                                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-700"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MaintenanceData;
