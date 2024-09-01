import React from 'react';
import Sidebar from '../../../Components/Sidebar';
import './registerPatient.css'; 

const RegisterPatient = () => {
    return (
        <div className="register-container">
            <Sidebar/>
            <div className="form-container">
                <h2>Register A Patient</h2>
                <form>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" />
                    </div>
                    <div className="form-group">
                        <label>Date of Birth</label>
                        <input type="date" />
                    </div>
                    <div className="form-group">
                        <label>Contact No.</label>
                        <input type="text" />
                    </div>
                    <div className="form-group">
                        <label>Gender</label>
                        <div>
                            <label><input type="radio" name="gender" value="male" /> Male</label>
                            <label><input type="radio" name="gender" value="female" /> Female</label>
                            <label><input type="radio" name="gender" value="other" /> Other</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>National ID</label>
                        <input type="text" />
                    </div>
                    <div className="form-group">
                        <label>House Address</label>
                        <input type="text" />
                    </div>
                    <div className="form-section">
                        <h3>Medical History</h3>
                        <div className="form-group">
                            <label>Allergies</label>
                            <input type="text" />
                        </div>
                        <div className="form-group">
                            <label>Past surgeries</label>
                            <input type="text" />
                        </div>
                        <div className="form-group">
                            <label>Chronic conditions</label>
                            <input type="text" />
                        </div>
                        <div className="form-group">
                            <label>Current medications</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="form-section">
                        <h3>Insurance Details</h3>
                        <div className="form-group">
                            <label>Insurance Provider</label>
                            <input type="text" />
                        </div>
                        <div className="form-group">
                            <label>Policy Number</label>
                            <input type="text" />
                        </div>
                        <div className="form-group">
                            <label>Coverage Details</label>
                            <input type="text" />
                        </div>
                        <div className="form-group">
                            <label>Upload Document</label>
                            <input type="file" />
                        </div>
                    </div>
                    <div className="form-section">
                        <h3>Emergency Contact</h3>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" />
                        </div>
                        <div className="form-group">
                            <label>Contact Number</label>
                            <input type="text" />
                        </div>
                        <div className="form-group">
                            <label>Relationship</label>
                            <input type="text" />
                        </div>
                    </div>
                    <button type="submit" className="register-btn">Register</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPatient;
