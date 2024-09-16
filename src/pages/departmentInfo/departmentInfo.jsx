import React from "react";
import "./departmentInfo.css"; // Import the CSS file
import Sidebar from "../../Components/Sidebar";

const DepartmentInfo = () => {
    return (
        <div className="dashboard-container-depart">
            <Sidebar/>
            <h1 id="h-depart">Department Info</h1>
            <div className="main-content1-depart">
                <header className="main-header-depart">
                    <label><h2>Doctor</h2></label>
                    <input type="text" placeholder="Search" className="search-input-depart" />
                </header>
                <div className="department-cards-container-depart">
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="department-card-depart">
                            <h3 style={{marginTop:"5px"}}>Department</h3>
                            <p>Cardiology</p>
                            <div className="card-content-depart">
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
