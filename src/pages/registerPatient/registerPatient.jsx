import React, { useRef, useState } from 'react';
import Sidebar from '../../Components/Sidebar';
import './registerPatient.css';

const RegisterPatient = () => {
    const fileInputRef = useRef(null);

    const [formData, setFormData] = useState({
        fullName: '',
        dateOfBirth: '',
        gender: '',
        contactInformation: {
            phone: '',
            email: '', // Add an email field if needed
            address: ''
        },
        nationalID: '',
        medicalHistory: {
            allergies: '',
            pastSurgeries: '',
            chronicConditions: '',
            currentMedications: ''
        },
        insuranceDetails: {
            insuranceProvider: '',
            policyNumber: '',
            coverageDetails: ''
        },
        emergencyContact: {
            name: '',
            relationship: '',
            contactInformation: {
                phone: '',
                email: '' // Add an email field
            }
        }
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
    
        // Handle nested objects (for both `contactInformation` and `emergencyContact.contactInformation`)
        const updateNestedField = (obj, keys, value) => {
            const key = keys.shift();
            if (!keys.length) {
                obj[key] = value;
            } else {
                obj[key] = obj[key] || {};
                updateNestedField(obj[key], keys, value);
            }
        };
    
        if (name.includes(".")) {
            const keys = name.split(".");
            setFormData(prev => {
                const newFormData = { ...prev };
                updateNestedField(newFormData, keys, value);
                return newFormData;
            });
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Format medical history as array
        const medicalHistory = {
            allergies: formData.medicalHistory.allergies.split(',').map(item => item.trim()),
            pastSurgeries: formData.medicalHistory.pastSurgeries.split(',').map(item => item.trim()),
            chronicConditions: formData.medicalHistory.chronicConditions.split(',').map(item => item.trim()),
            currentMedications: formData.medicalHistory.currentMedications.split(',').map(item => item.trim())
        };

        // Combine form data into one object to match the required format
        const patientData = {
            ...formData,
            medicalHistory
        };

        try {
            const response = await fetch('http://localhost:5000/api/patient/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(patientData)
            });

            const result = await response.json();
            if (response.ok) {
                alert('Patient registered successfully');
            } else {
                alert('Failed to register patient: ' + result.message);
            }
        } catch (error) {
            console.error('Error registering patient:', error);
            alert('An error occurred while registering the patient');
        }
    };

    const handleFileClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="register-container">
            <Sidebar />
            <div className="register-card">
                <h2 className="form-title">Register Patient</h2>
                <form className="patient-form" onSubmit={handleSubmit}>
                    <div className="input-group-first">
                        <input type="text" name="fullName" placeholder="Full Name" onChange={handleInputChange} />
                        <input type="date" name="dateOfBirth" placeholder="Date of Birth" onChange={handleInputChange} />
                    </div>
                    <div className="gender-group">
                        <input type="text" name="contactInformation.phone" placeholder="Contact No." onChange={handleInputChange} />
                        <div className="gender-group">
                            <label>Gender:</label>
                            <input type="radio" name="gender" value="Male" onChange={handleInputChange} /> Male
                            <input type="radio" name="gender" value="Female" onChange={handleInputChange} /> Female
                            <input type="radio" name="gender" value="Other" onChange={handleInputChange} /> Other
                        </div>
                        <input type="text" name="nationalID" placeholder="National ID" onChange={handleInputChange} />
                    </div>
                    <input type="text" name="contactInformation.address" placeholder="House Address" className="full-width-input" onChange={handleInputChange} />

                    <div className="section-group">
                        <div className="section medical-history">
                            <h3>Medical History</h3>
                            <input type="text" name="medicalHistory.allergies" placeholder="Allergies (comma-separated)" onChange={handleInputChange} />
                            <input type="text" name="medicalHistory.pastSurgeries" placeholder="Past surgeries (comma-separated)" onChange={handleInputChange} />
                            <input type="text" name="medicalHistory.chronicConditions" placeholder="Chronic conditions (comma-separated)" onChange={handleInputChange} />
                            <input type="text" name="medicalHistory.currentMedications" placeholder="Current medications (comma-separated)" onChange={handleInputChange} />
                        </div>

                        <div className="section insurance-details">
                            <h3>Insurance Details</h3>
                            <input type="text" name="insuranceDetails.insuranceProvider" placeholder="Insurance Provider" onChange={handleInputChange} />
                            <input type="text" name="insuranceDetails.policyNumber" placeholder="Policy Number" onChange={handleInputChange} />
                            <input type="text" name="insuranceDetails.coverageDetails" placeholder="Coverage Details" onChange={handleInputChange} />

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
                            <input type="text" name="emergencyContact.name" placeholder="Name" onChange={handleInputChange} />
                            <input type="text" name="emergencyContact.contactInformation.phone" placeholder="Contact Number" onChange={handleInputChange} />
                            {/* <input type="email" name="emergencyContact.contactInformation.email" placeholder="Email" onChange={handleInputChange} /> */}
                            <input type="text" name="emergencyContact.relationship" placeholder="Relationship" onChange={handleInputChange} />
                        </div>
                    </div>

                    <button type="submit" className="submit-btn">Register</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPatient;
