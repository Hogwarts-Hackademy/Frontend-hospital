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
                {step === 1 ? (
                    <div className="form-container">
                        <h1>Hospital Details</h1>
                        <form>
                            <div className="form-group">
                                <label>Hospital Name</label>
                                <input type="text" />
                            </div>
                            <div className="form-group">
                                <label>Address</label>
                                <input type="text" />
                            </div>
                            <div className="form-group">
                                <label>Contact No.</label>
                                <input type="text" />
                            </div>
                            <div className="form-group">
                                <label>Established Date</label>
                                <input type="date" />
                            </div>
                            <div className="form-group">
                                <label>Ownership Detail</label>
                                <input type="text" />
                            </div>
                            <div className="form-group">
                                <label>Visiting Hours</label>
                                <input type="text" />
                            </div>
                            <div className="form-group">
                                <label>Affiliations</label>
                                <input type="text" />
                            </div>
                            <button type="submit" onClick={handleNext}>
                                Next
                            </button>
                        </form>
                    </div>
                ) : (
                    <div className="form-container">
                        <h1>Hospital Details</h1>
                        <form>
                            <div className="form-group">
                                <label>Department</label>
                                <select>
                                    <option value="department1">Department 1</option>
                                    <option value="department2">Department 2</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Total Wards</label>
                                <input type="text" />
                            </div>
                            <div className="form-group">
                                <label>Ward 1 Bed</label>
                                <input type="text" />
                            </div>
                            <div className="form-group">
                                <label>Ward 2 Bed</label>
                                <input type="text" />
                            </div>
                            <div className="form-group">
                                <label>OPD</label>
                                <input type="text" />
                            </div>
                            <button type="submit">Save</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AddHospitalProfile;
