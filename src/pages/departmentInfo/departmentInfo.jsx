import React from "react";
import "./departmentInfo.css"; // Import the CSS file
import Sidebar from "../../Components/Sidebar";

const DepartmentInfo = () => {
    return (
        <div className="dashboard-container">
            <Sidebar/>
            <h1 id="h">Department Info</h1>
            <div className="main-content1">
                <header className="main-header">
                    <label><h2>Doctor</h2></label>
                    <input type="text" placeholder="Search" className="search-input" />
                </header>
                <div className="department-cards-container">
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="department-card">
                            <h3 style={{marginTop:"5px"}}>Department</h3>
                            <p>Cardiology</p>
                            <div className="card-content">
                                <p><span>Doctors</span> : 30</p>
                                <p><span>Available</span> : 10</p>
                                <p><span>Busy</span> : 27</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DepartmentInfo;
