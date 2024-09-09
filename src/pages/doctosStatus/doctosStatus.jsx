import React from 'react';
import './doctosStatus.css';
import Sidebar from '../../Components/Sidebar';

const DoctosStatus = () => {
    const doctors = Array(12).fill({ name: 'abc', status: 'available', time: '02:30 PM' });

    return (
        <div className="dashboard-container">
            <Sidebar/>
            <div className="main-content">
                <div className="main-header">
                    <h1>Doctors Status</h1>
                    <div className="search-bar">
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
                <div className="records-table">
                    <h2>Departments -</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Doctors</th>
                                <th>Status</th>
                                <th>Available till</th>
                            </tr>
                        </thead>
                        <tbody>
                            {doctors.map((doctor, index) => (
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
