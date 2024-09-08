import React from 'react';
import './patientRecord.css';
import Sidebar from '../../Components/Sidebar';

const PatientRecords = () => {
    const patientData = [
        { name: "haai", age: 15, address: "some place", date: "12/12/2022", phone: "1234567890" },
        { name: "John Doe", age: 28, address: "another place", date: "01/11/2023", phone: "0987654321" },
        { name: "Jane Smith", age: 34, address: "place three", date: "22/10/2023", phone: "1122334455" },
        { name: "Alice Johnson", age: 22, address: "place four", date: "14/09/2023", phone: "2233445566" },
        { name: "Bob Brown", age: 47, address: "place five", date: "05/08/2023", phone: "3344556677" },
        { name: "Charlie Black", age: 19, address: "place six", date: "16/07/2023", phone: "4455667788" },
    ];

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
                            {patientData.map((patient, index) => (
                                <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                                    <td>{patient.name}</td>
                                    <td>{patient.age}</td>
                                    <td>{patient.address}</td>
                                    <td>{patient.date}</td>
                                    <td>{patient.phone}</td>
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
