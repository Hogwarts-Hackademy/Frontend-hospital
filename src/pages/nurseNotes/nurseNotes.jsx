import React from 'react';
import './nurseNotes.css';

const NurseNotes = () => {
    return (
        <div className="nurse-notes-container">
            <div className="header">
                <h1>Junior Doctor Notes</h1>
            </div>
            <div className="card-nur">
                <div className="notes-grid">
                    <div className="patient-info-n">
                        <p><strong>Name:</strong> Abc</p>
                        <p><strong>Age:</strong> 13</p>
                        <p><strong>Gender:</strong> Male</p>
                        <hr className="horizontal-line" />
                    </div>
                    <div className="date-time-info-a">
                        <p><strong>Date:</strong> 12/12/2022</p>
                        <p><strong>Time:</strong> 0123456789</p>
                        <p><strong>Blood Group:</strong> A+</p>
                        <hr className="horizontal-line" />
                    </div>
                    <div className="notes-section-b">
                        <h3>Notes:</h3>
                        <div className="scrollable">
                            <p><strong>Observations:</strong></p>
                        </div>
                        <div className="notes-section-e">
                            <p><strong>Care provided:</strong></p>
                        </div>
                    </div>
                    <div className="treatment-updates-c">
                        <h3>Treatment Updates:</h3>
                        <div className="scrollable">
                        </div>
                    </div>
                </div>
                <div className="line-nur">
                
                <div className="submit-button-d">
                    <button>Submit</button>
                </div>
                <hr className="horizontal-line-submit" />
                </div>
                <div className="vertical-line"></div>
            </div>
        </div>
    );
};

export default NurseNotes;
