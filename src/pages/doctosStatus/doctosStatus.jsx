import React, { useState } from 'react';
import './doctosStatus.css';
import Sidebar from '../../Components/Sidebar';

const DoctosStatus = () => {
    // Initial doctors data with departments
    const doctorsData = [
        { name: 'Dr. A', status: 'available', time: '02:30 PM', department: 'Cardiology' },
        { name: 'Dr. B', status: 'busy', time: '03:00 PM', department: 'Neurology' },
        { name: 'Dr. C', status: 'available', time: '04:00 PM', department: 'Orthopedics' },
        { name: 'Dr. D', status: 'available', time: '02:00 PM', department: 'Cardiology' },
        { name: 'Dr. E', status: 'busy', time: '05:30 PM', department: 'Pediatrics' },
        { name: 'Dr. F', status: 'available', time: '01:30 PM', department: 'Neurology' },
        { name: 'Dr. G', status: 'busy', time: '02:45 PM', department: 'Cardiology' },
        { name: 'Dr. H', status: 'available', time: '03:15 PM', department: 'Orthopedics' },
    ];

    // State to track selected department
    const [selectedDepartment, setSelectedDepartment] = useState('All');

    // Function to handle department change
    const handleDepartmentChange = (e) => {
        setSelectedDepartment(e.target.value);
    };

    // Filtered doctors based on selected department
    const filteredDoctors = selectedDepartment === 'All'
        ? doctorsData
        : doctorsData.filter(doctor => doctor.department === selectedDepartment);

    return (
        <div className="dashboard-container">
            <Sidebar/>
            <div className="main-content">
                <div className="main-header">
                    <h1>Doctors Status</h1>
                    <div className="search-bar-doc">
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
                <div className="records-table">
                    <h2>Departments -</h2>
                    <div className="input-group-doc">
                        <select value={selectedDepartment} onChange={handleDepartmentChange}>
                            <option value="All">All Departments</option>
                            <option value="Cardiology">Cardiology</option>
                            <option value="Neurology">Neurology</option>
                            <option value="Orthopedics">Orthopedics</option>
                            <option value="Pediatrics">Pediatrics</option>
                        </select>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Doctor</th>
                                <th>Status</th>
                                <th>Available till</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredDoctors.map((doctor, index) => (
                                <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                                    <td>{doctor.name}</td>
                                    <td>
                                        <span className={doctor.status === 'available' ? 'status-green' : 'status-red'}>
                                            {doctor.status === 'available' ? '●' : '●'}
                                        </span>
                                    </td>
                                    <td>{doctor.time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DoctosStatus;
