import React, { useState } from "react";
import "./technician.css"; // Ensure you have this CSS file
import Sidebar from "../../../Components/Sidebar";
import { FaUpload, FaTrash, FaCheck } from "react-icons/fa"; // Import icons from react-icons

const Appointments = () => {
    const [expandedRow, setExpandedRow] = useState(null);

    const appointments = [
        { name: "haai", age: 15, date: "12/12/2022", phone: "1234567890" },
        { name: "haai", age: 15, date: "12/12/2022", phone: "1234567891" },
        { name: "haai", age: 15, date: "12/12/2022", phone: "1234567892" },
        { name: "haai", age: 15, date: "12/12/2022", phone: "1234567893" },
        { name: "haai", age: 15, date: "12/12/2022", phone: "1234567894" },
    ];

    const toggleRow = (index) => {
        setExpandedRow(expandedRow === index ? null : index);
    };

    return (
        <div className="dashboard-container-lab">
            <Sidebar />
            <main className="main-content-lab">
                <div className="main-header-lab">
                    <button className="filter-button-lab">Filter</button>
                    <h1 className="appointments-title-lab">LAB REPORTS</h1>
                    <input type="text" placeholder="Search" className="search-bar-app-lab" />
                </div>

                <div className="records-table-lab">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Prescription ID</th>
                                <th>Date</th>
                                <th>Phone No.</th>
                                <th>Upload Document</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointments.map((appointment, index) => (
                                <React.Fragment key={index}>
                                    <tr
                                        className={`${
                                            expandedRow === index ? "expanded-lab" : ""
                                        } ${index % 2 === 0 ? "even-row-lab" : "odd-row-lab"}`}
                                        onClick={() => toggleRow(index)}
                                    >
                                        <td>{appointment.name}</td>
                                        <td>{appointment.age}</td>
                                        <td>{appointment.date}</td>
                                        <td>{appointment.phone}</td>
                                        <td>
                                            <button className="upload-button-lab">
                                                <FaUpload /> {/* Upload Icon */}
                                            </button>
                                            <button className="delete-button-lab">
                                                <FaTrash /> {/* Delete Icon */}
                                            </button>
                                            <button className="confirm-button-lab">
                                                <FaCheck /> {/* Tick Icon */}
                                            </button>
                                        </td>
                                    </tr>
                                    
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
