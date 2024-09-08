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
            <div className="card">
            <h2>Hospital Detail's</h2><div/>
            <div className="main-content">
              
                    <form>
                        <div className="input-group-hospitalname">
                            <label>Hospital Name</label>
                            <input type="text"/>
                        </div>
                        <div className="input-group-address">
                            <label>Address</label>
                            <input type="text"/>
                        </div>
                        <div className="input-group-contact">
                            <label>Contact No.</label>
                            <input type="text"/>
                        </div>
                        <div className="input-group-date">
                            <label>Established Date</label>
                            <input type="date"/>
                        </div>
                        <div className="input-group-owndetail">
                            <label>Ownership Detail</label>
                            <input type="text"/>
                        </div>
                        <div className="input-group-aff">
                            <label>Affiliations</label>
                            <input type="number" />
                        </div>
                        <div className="input-group-hrs">
                            <label>Visiting Hours</label>
                            <input type="url"/>
                        </div>
                      

                        <button onClick={handleNext}>Next</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddHospitalProfile;
