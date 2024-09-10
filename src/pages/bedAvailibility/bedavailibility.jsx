import React, { useState } from 'react';
import './wardStatus-bed.css';
import Sidebar from '../../Components/Sidebar';

const WardStatusBed = () => {
    const wardsData = [
        { name: 'Ward 1', status: 'available', bedsAvailable: 5, department: 'Cardiology' },
        { name: 'Ward 2', status: 'busy', bedsAvailable: 0, department: 'Neurology' },
        { name: 'Ward 3', status: 'available', bedsAvailable: 3, department: 'Orthopedics' },
        { name: 'Ward 4', status: 'available', bedsAvailable: 2, department: 'Cardiology' },
        { name: 'Ward 5', status: 'busy', bedsAvailable: 0, department: 'Pediatrics' },
        { name: 'Ward 6', status: 'available', bedsAvailable: 6, department: 'Neurology' },
        { name: 'Ward 7', status: 'busy', bedsAvailable: 0, department: 'Cardiology' },
        { name: 'Ward 8', status: 'available', bedsAvailable: 4, department: 'Orthopedics' },
    ];

    const [selectedDepartment, setSelectedDepartment] = useState('All');

    const handleDepartmentChange = (e) => {
        setSelectedDepartment(e.target.value);
    };

    const filteredWards = selectedDepartment === 'All'
        ? wardsData
        : wardsData.filter(ward => ward.department === selectedDepartment);

    return (
        <div className="dashboard-container-bed">
            <Sidebar />
            <div className="main-content-bed">
                <div className="main-header-bed">
                    <h1>Ward Status</h1>
                    <div className="search-bar-bed">
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
                <div className="main-big-card-bed">
                    <div className="align-head-bed">
                    <h2>Departments -</h2>
                    <div className="input-group-doc-bed">
                        <select value={selectedDepartment} onChange={handleDepartmentChange}>
                            <option value="All">All Departments</option>
                            <option value="Cardiology">Cardiology</option>
                            <option value="Neurology">Neurology</option>
                            <option value="Orthopedics">Orthopedics</option>
                            <option value="Pediatrics">Pediatrics</option>
                        </select>
                    </div>
                    </div> 
                    <div className="ward-cards-bed">
                        {filteredWards.map((ward, index) => {
                            // Determine the row number (floor division by 3)
                            const rowIndex = Math.floor(index / 3);

                            return (
                                <div
                                    key={index}
                                    className={`ward-card-bed ${rowIndex % 2 === 0 ? 'even-row-bed' : 'odd-row-bed'}`}
                                >
                                    <h3>{ward.name}</h3>
                                    <p>
                                        <span className={ward.status === 'available' ? 'status-green-bed' : 'status-red-bed'}>
                                            {ward.status === 'available' ? '●' : '●'}
                                        </span> {ward.status}
                                    </p>
                                    <p>Available beds: {ward.bedsAvailable}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WardStatusBed;
