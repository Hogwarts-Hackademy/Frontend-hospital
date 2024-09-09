import React, { useState, useEffect } from 'react';
import './patientRecord.css';
import Sidebar from '../../Components/Sidebar';
import patientAPI from '../../config/patientAPI'; // Import the API URLs

const PatientRecords = () => {
    const [patientRecords, setPatientRecords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Function to fetch all patient records
    const fetchPatientRecords = async () => {
        try {
            const response = await fetch(patientAPI.FETCH_ALL_PATIENTS_URL);
            if (!response.ok) {
                throw new Error("Failed to fetch patient records");
            }
            const data = await response.json();
            setPatientRecords(data); // Set the fetched patient data to state
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    // Get the last date of visit from visitHistory array
    const getLastVisitDate = (visitHistory) => {
        if (!visitHistory || visitHistory.length === 0) return 'No visits yet';
        // Sort by dateOfVisit in descending order to get the latest visit
        const latestVisit = visitHistory.sort((a, b) => new Date(b.dateOfVisit) - new Date(a.dateOfVisit))[0];
        return new Date(latestVisit.dateOfVisit).toLocaleDateString();
    };

    useEffect(() => {
        fetchPatientRecords(); // Fetch patient records on component mount
    }, []);

    if (loading) return <p>Loading patient records...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="dashboard-patient-record">
            <Sidebar />
            <main className="main-content">
                <header className="main-header">
                    <h1>Patient Records</h1>
                </header>
                <section className="records-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Address</th>
                                <th>Last visit</th>
                                <th>Phone no.</th>
                            </tr>
                        </thead>
                        <tbody>
                        {patientRecords.map((patient) => (
                                <tr key={patient.patientID}>
                                    <td>{patient.fullName}</td>
                                    <td>{new Date().getFullYear() - new Date(patient.dateOfBirth).getFullYear()}</td>
                                    <td>{patient.contactInformation.address}</td>
                                    <td>{getLastVisitDate(patient.visitHistory)}</td> {/* Display the last date of visit */}
                                    <td>{patient.contactInformation.phone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
};

export default PatientRecords;
