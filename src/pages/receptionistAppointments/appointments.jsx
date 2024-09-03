import React from "react";
import "./appointments.css"; // Create this CSS file for the styles
import Sidebar from "../../Components/Sidebar";
const Appointments = () => {
    const appointments = [
        { name: "haai", age: 15, address: "some place", date: "12/12/2022", time: "01:20 PM", consultant: "caty", department: "Pediatricians", phone: "1234567890" },
        // Add more appointments as needed
    ];

    return (
        <div className="dashboard-container">
            <Sidebar/>
            <main className="main-content">
                <div className="main-header">
                    <button className="filter-button">Filter</button>
                    <h1>Appointments</h1>
                    <input type="text" placeholder="Search" className="search-bar" />
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
                                <tr key={index}>
                                    <td>{appointment.name}</td>
                                    <td>{appointment.age}</td>
                                    <td>{appointment.address}</td>
                                    <td>{appointment.date}</td>
                                    <td>{appointment.phone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default Appointments;
