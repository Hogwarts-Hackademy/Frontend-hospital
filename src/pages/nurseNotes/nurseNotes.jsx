import React from 'react';
import './nurseNotes.css';
const NurseNotes = () => {
    return (
        <div className="nurse-notes-container">
            <div className="header">
                <h1>Nurse Notes</h1>
            </div>
            <div className="notes-grid">
                <div className="patient-info">
                    <p><strong>Name:</strong> Abc</p>
                    <p><strong>Age:</strong> 13</p>
                    <p><strong>Gender:</strong> Male</p>
                    <p><strong>Blood Group:</strong> A+</p>
                </div>
                <div className="date-time-info">
                    <p><strong>Date:</strong> 12/12/2022</p>
                    <p><strong>Time:</strong> 0123456789</p>
                </div>
                <div className="notes-section">
                    <h3>Notes:</h3>
                    <div className="scrollable">
                        <p><strong>Observations:</strong></p>
                        {/* <p>/* Add observation details here </p> */}
                        <p><strong>Care provided:</strong></p>
                        {/* <p>/* Add care details here </p> */}
                    </div>
                </div>
                <div className="treatment-updates">
                    <h3>Treatment Updates:</h3>
                    <div className="scrollable">
                        {/* <p>/* Add treatment updates here </p> */}
                    </div>
                </div>
            </div>
            <div className="submit-button">
                <button>Submit</button>
            </div>
        </div>
    );
};

export default NurseNotes;
