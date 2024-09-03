import React from 'react';
import './doctorSidebar.css'; 

const doctorSidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h2>Health CR</h2>
            </div>
            <div className="sidebar-section">
                <h3>Manager</h3>
                <ul>
                    <li>Register patients</li>
                    <li>Patients list</li>
                    <li>Payment</li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3>IPD</h3>
                <ul>
                    <li>Register patients</li>
                    <li>Patients list</li>
                    <li>Payment</li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3>Medicine</h3>
            </div>
            <div className="sidebar-support">
                <p>Have any problems with managing your dashboard?</p>
                <p>Try to contact the Customer Support</p>
                <button>Contact Us</button>
            </div>
        </div>
    );
};

export default doctorSidebar;
