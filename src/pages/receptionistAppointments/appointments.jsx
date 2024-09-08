import React, { useState } from "react";
import "./appointments.css"; // Ensure you have this CSS file
import Sidebar from "../../Components/Sidebar";

const Appointments = () => {
    const [expandedRow, setExpandedRow] = useState(null);

    const appointments = [
        { name: "haai", age: 15, address: "some place", date: "12/12/2022", time: "01:20 PM", consultant: "caty", department: "Pediatricians", phone: "1234567890" },
        { name: "haai", age: 15, address: "some place", date: "12/12/2022", time: "02:30 PM", consultant: "caty", department: "Pediatricians", phone: "1234567891" },
        { name: "haai", age: 15, address: "some place", date: "12/12/2022", time: "03:40 PM", consultant: "caty", department: "Pediatricians", phone: "1234567892" },
        { name: "haai", age: 15, address: "some place", date: "12/12/2022", time: "04:50 PM", consultant: "caty", department: "Pediatricians", phone: "1234567893" },
        { name: "haai", age: 15, address: "some place", date: "12/12/2022", time: "05:00 PM", consultant: "caty", department: "Pediatricians", phone: "1234567894" },
        // Add more appointments as needed
    ];

    const toggleRow = (index) => {
        setExpandedRow(expandedRow === index ? null : index);
    };

    return (
        <div className="dashboard-container">
            <Sidebar />
            <main className="main-content">
                <div className="main-header">
                    <button className="filter-button">Filter</button>
                    <h1 className="appointments-title">Appointments</h1>
                    <input type="text" placeholder="Search" className="search-bar-app" />
                </div>

                <div className="records-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Address</th>
                                <th>Date</th>
                                <th>Phone No.</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointments.map((appointment, index) => (
                                <React.Fragment key={index}>
                                    <tr
                                        className={`${
                                            expandedRow === index ? "expanded" : ""
                                        } ${index % 2 === 0 ? "even-row" : "odd-row"}`}
                                        onClick={() => toggleRow(index)}
                                    >
                                        <td>{appointment.name}</td>
                                        <td>{appointment.age}</td>
                                        <td>{appointment.address}</td>
                                        <td>{appointment.date}</td>
                                        <td>{appointment.phone}</td>
                                    </tr>
                                    {expandedRow === index && (
                                        <tr
                                            className={`${
                                                index % 2 === 0 ? "even-row" : "odd-row"
                                            }`}
                                        >
                                            <td colSpan="5">
                                                <div className="expanded-content">
                                                    <p><strong>Time:</strong> <span>{appointment.time}</span></p>
                                                    <p><strong>Consultant:</strong> <span>{appointment.consultant}</span></p>
                                                    <p><strong>Department:</strong> <span>{appointment.department}</span></p>
                                                    <button className="cancel-button">Cancel appointment</button>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default Appointments;
