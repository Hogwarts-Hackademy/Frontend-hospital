import React, { useRef } from 'react';
import Sidebar from '../../Components/Sidebar';
import './registerPatient.css';

const RegisterPatient = () => {
    const fileInputRef = useRef(null);

    const handleFileClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="register-container">
            <Sidebar />
            <div className="register-card">
                <h2 className="form-title">Register Patient</h2>
                <form className="patient-form">
                    <div className="input-group-first">
                        <input type="text" placeholder="Full Name" />
                        <input type="date" placeholder="Date of Birth" />
                    </div>
                    <div className="gender-group">
                        <input type="text" placeholder="Contact No." />
                        <div className="gender-group">
                            <label>Gender:</label>
                            <input type="radio" name="gender" value="Male" /> Male
                            <input type="radio" name="gender" value="Female" /> Female
                            <input type="radio" name="gender" value="Other" /> Other
                        </div>
                        <input type="text" placeholder="National ID" />
                    </div>
                    <input type="text" placeholder="House Address" className="full-width-input" />

                    <div className="section-group">
                        <div className="section medical-history">
                            <h3>Medical History</h3>
                            <input type="text" placeholder="Allergies" />
                            <input type="text" placeholder="Past surgeries" />
                            <input type="text" placeholder="Chronic conditions" />
                            <input type="text" placeholder="Current medications" />
                        </div>

                        <div className="section insurance-details">
                            <h3>Insurance Details</h3>
                            <input type="text" placeholder="Insurance Provider" />
                            <input type="text" placeholder="Policy Number" />
                            <input type="text" placeholder="Coverage Details" />

                            {/* Custom File Upload Button */}
                            <div className="custom-file-upload" onClick={handleFileClick}>
                                <i className="fas fa-upload"></i> Upload Document
                            </div>
                            <input 
                                type="file" 
                                ref={fileInputRef} 
                                style={{ display: 'none' }} 
                                placeholder="Upload Document" 
                            />
                        </div>

                        <div className="section emergency-contact">
                            <h3>Emergency Contact</h3>
                            <input type="text" placeholder="Name" />
                            <input type="text" placeholder="Contact Number" />
                            <input type="text" placeholder="Relationship" />
                        </div>
                    </div>

                    <button type="submit" className="submit-btn">Register</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPatient;
