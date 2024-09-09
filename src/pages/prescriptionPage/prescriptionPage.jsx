import React from 'react';
import Sidebar from '../../Components/Sidebar';
import './prescriptionPage.css';

const PrescriptionPage = () => {
    return (
        <div className="prescription-container-pre">
            <Sidebar />
            <div className="content-container-pre">
                <h1 className="heading-pre">Prescription for the Patient</h1>
                <div className="patient-info-pre">
                    <div>
                        <p><b>Patient ID:</b> <input type="text" className="input-field-pre" /></p>
                        <p><b>Patient Name:</b> abcde</p>
                    </div>
                    <div>
                        <p><b>Date:</b> 12/12/2022</p>
                        <p><b>Token No.:</b> 12</p>
                    </div>
                </div>

                <div className="main-section-pre">
                    <div className="card-pre">
                        <label className="label-pre"><b>Diagnosis :</b></label>
                        <textarea rows="6" className="textarea-pre"></textarea>
                        <button className="view-test-btn-pre">View Test report</button>
                    </div>

                    <div className="card-pre">
                        <label className="label-pre"><b>Medications Prescribed:</b></label>
                        <textarea rows="6" className="textarea-pre"></textarea>
                        <div className="bottom-section-pre">
                            <div className="urgent-bed-pre">
                                <p><b>Urgent Bed Requirement:</b></p>
                                <label><input type="checkbox" /> Yes</label>
                                <label><input type="checkbox" /> No</label>
                                <label><input type="checkbox" /> Later</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-pre">
            <div className="tests-section-pre">
                <h3 className="tests-heading-pre">Tests of Patient</h3>
                <div className="tests-list-pre">
                    <div className="test-item-pre"><input type="checkbox" /> Item 1</div>
                    <div className="test-item-pre"><input type="checkbox" /> Item 2</div>
                    <div className="test-item-pre"><input type="checkbox" /> Item 3</div>
                    <div className="test-item-pre"><input type="checkbox" /> Item 4</div>
                    <div className="test-item-pre"><input type="checkbox" /> Item 5</div>
                </div>
                <button className="request-test-btn-pre">Request Test</button>
            </div>

            {/* New Final Report Section */}
            <div className="final-report-card-pre">
                <div className="final-report-section-pre">
                    <p><b>Prescribing Physician:</b> Dr. abcde</p>
                    <div className="pre-come">
                    <p><b>Department:</b>
                        <select className="input-field-pre">
                            <option>Cardiology</option>
                            <option>Neurology</option>
                            <option>Oncology</option>
                            <option>Pediatrics</option>
                            {/* Add more departments as needed */}
                        </select>
                    </p>
                    <p><b>Next appointment:</b> <input type="text" className="input-field-pre" placeholder="12/12/12" /></p>
                </div>
                </div>
                <button className="print-report-btn-pre">Print final report</button>
            </div>
            </div>
        </div>
    );
};

export default PrescriptionPage;
