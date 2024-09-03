import React from 'react';
import './hospitalProfile.css';
import Sidebar from '../../Components/Sidebar';

const HospitalProfile = () => {
    return (
        <div className="hospital-profile-container">
            <Sidebar/>
            <main className="main-content">
                <section className="hospital-profile">
                    <h1>Hospital Name</h1>
                    <p>Location</p>
                    <div className="details">
                        <p>Ownership: Private</p>
                        <p>Contact No: +91-1234567890</p>
                        <p>Affiliation: ABC University</p>
                        <p>Visiting Hours: 9 AM - 6 PM</p>
                    </div>
                </section>

                <section className="hospital-sections">
                    <div className="section-card">
                        <h2>Departments</h2>
                        <p>Cardiology: 6</p>
                        <p>Oncology: 6</p>
                        <p>Neurology: 6</p>
                    </div>
                    <div className="section-card">
                        <h2>Specialized Units</h2>
                        <p>ICU: 6</p>
                        <p>NICU: 6</p>
                        <p>CCU: 6</p>
                    </div>
                    <div className="section-card">
                        <h2>Diagnostic Facilities</h2>
                        <p>Radiology: 6</p>
                        <p>Laboratory: 6</p>
                        <p>Pathology: 6</p>
                        <p>Operation Theaters: 6</p>
                    </div>
                </section>
                <section className="hospital-section">
                    <h1>Section</h1>

                    <div className="section-grid">
                        <div className="section-card">
                            <h2>Total Beds</h2>
                            <p>ICU: 6</p>
                            <p>NICU: 6</p>
                            <p>CCU: 6</p>
                        </div>

                        <div className="section-card">
                            <h2>No. of Rooms</h2>
                            <p>Wards: 6</p>
                            <p>OPD Rooms: 6</p>
                            <p>General: 6</p>
                        </div>

                        <div className="section-card">
                            <h2>Diagnostic Facilities</h2>
                            <p>Radiology: 6</p>
                            <p>Laboratory: 6</p>
                            <p>Pathology: 6</p>
                            <p>Operation Theaters: 6</p>
                        </div>

                        <div className="section-card">
                            <h2>Lab Technician</h2>
                            <p>Radiology: 6</p>
                            <p>Surgical: 6</p>
                            <p>MLT: 6</p>
                        </div>

                        <div className="section-card">
                            <h2>Emergency</h2>
                            <p>Ambulance: 6</p>
                            <p>Doctor: 6</p>
                            <p>E Rooms: 6</p>
                        </div>

                        <div className="section-card">
                            <h2>Medical Staff</h2>
                            <p>Doc: 6</p>
                            <p>Number: 6</p>
                            <p>Pathology: 6</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default HospitalProfile;
