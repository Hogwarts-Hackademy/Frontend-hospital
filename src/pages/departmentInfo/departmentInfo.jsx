import React from "react";
import "./departmentInfo.css"; // Import the CSS file
import Sidebar from "../../Components/Sidebar";
const DepartmentInfo = () => {
    return (
        <div className="dashboard-container">
            <Sidebar/>
            <main className="main-content">
                <header className="main-header">
                    <h1>Department Info</h1>
                    <input type="text" placeholder="Search" className="search-input" />
                </header>
                <div className="department-cards-container">
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="department-card">
                            <h3>Department</h3>
                            <p>Cardiology</p>
                            <p>Doctors: 30</p>
                            <p>Available: 10</p>
                            <p>Busy: 27</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default DepartmentInfo;
