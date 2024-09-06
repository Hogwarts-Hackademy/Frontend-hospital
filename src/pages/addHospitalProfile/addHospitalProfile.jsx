import React, { useState } from "react";
import "./addHospitalProfile.css";
import Sidebar from "../../Components/Sidebar";

const AddHospitalProfile = () => {
    const [step, setStep] = useState(1);

    const handleNext = (e) => {
        e.preventDefault();
        setStep(2); // Move to the next step
    };

    return (
        <div className="hospital-profile-container">
            <Sidebar />
            <div className="main-content">
                <div className="card">
                    <h2>Hospital Profile</h2>
                    <form>
                        <div className="input-group">
                            <label>Hospital Name</label>
                            <input type="text"/>
                        </div>
                        <div className="input-group">
                            <label>Address</label>
                            <input type="text"/>
                        </div>
                        <div className="input-group">
                            <label>Contact No.</label>
                            <input type="text"/>
                        </div>
                        <div className="input-group">
                            <label>Established Date</label>
                            <input type="email"/>
                        </div>
                        <div className="input-group">
                            <label>Specialty</label>
                            <input type="text"/>
                        </div>
                        <div className="input-group">
                            <label></label>
                            <input type="number" />
                        </div>
                        <div className="input-group">
                            <label>Ownership Detail</label>
                            <input type="url"/>
                        </div>

                        <button onClick={handleNext}>Next Step</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddHospitalProfile;
