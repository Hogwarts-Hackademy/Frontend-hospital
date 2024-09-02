import React from 'react';
import Sidebar from '../../Components/Sidebar';
import './prescriptionPage.css';


const PrescriptionPage = () => {
    return (
        <div className="prescription-container">
            <Sidebar />
            <div className="content-container">
                <h1>Prescriptions for the Patient</h1>
                <div className="patient-info">
                    <p><b>Patient ID:</b> 11</p>
                    <p><b>Patient Name:</b> abcde</p>
                    <p><b>Date:</b> 12/12/2022</p>
                    <p><b>Token No.:</b> 12</p>
                </div>
                <div className="form-group">
                    <label><b>Diagnosis:</b></label>
                    <textarea rows="10"></textarea>
                    <button className="view-test-btn">View Test report</button>
                </div>

                <div className="form-group">
                    <label><b>Medications Prescribed:</b></label>
                    <textarea rows="10"></textarea>
                    <button className="print-report-btn">Print final report</button>
                </div>

                <div className="urgent-bed">
                    <p>Urgent Bed Requirement:</p>
                    <label><input type="checkbox" /> Yes</label>
                    <label><input type="checkbox" /> No</label>
                    <label><input type="checkbox" /> Later</label>
                </div>

                <div className="tests-section">
                    <h3>Tests of Patient</h3>
                    <div className="dropdown">
                        <button className="dropdown-btn">Select Tests</button>
                        <div className="dropdown-content">
                            <label>
                                <input type="checkbox" /> Item 1
                            </label>
                            <label>
                                <input type="checkbox" /> Item 2
                            </label>
                            <label>
                                <input type="checkbox" /> Item 3
                            </label>
                            {/* Continue adding items as needed */}
                        </div>
                    </div>
                    <button className="request-test-btn">Request Test</button>
                </div>


                <div className="final-report-section">
                    <p>Prescribing Physician: Dr. abcde</p>
                    <p>Department: Cardiology</p>
                    <p>Next appointment: 12/12/12</p>
                </div>
            </div>
        </div>
    );
};

export default PrescriptionPage;
