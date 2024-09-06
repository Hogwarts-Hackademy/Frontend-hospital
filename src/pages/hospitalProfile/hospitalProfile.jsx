import React from 'react';
import './hospitalProfile.css';
import Sidebar from '../../Components/Sidebar';

const HospitalProfile = () => {
    return (
        <div className="hospital-profile-container">
            <Sidebar/>
            <main className="main-content">
                <section className="hospital-profile">
                    <div className="profile-card">
                        <h1>Hospital Name</h1>
                        <p>Location</p>
                        <div className="details-grid">
                            <div className="details-item">
                                <p><h5>Ownership:</h5>Mr. Dinesh Salvi</p>
                            </div>
                            <div className="details-item">
                                <p><h5>Contact No:</h5> +91-1234567890</p>
                            </div>
                            <div className="details-item-full">
                                <p><h5>Affiliation:</h5> ABC University</p>
                            </div>
                            <div className="details-item-full">
                                <p><h5>Visiting Hours:</h5> 9 AM - 6 PM</p>
                            </div>
                        </div>
                    </div>

                    <div className="card-row">
                        <div className="info-card">
                            <h>Department’s</h>
                            <hr />
                            <div className="card-details">
                                <p>Cardiology: <span>123</span></p>
                                <p>Orthology: <span>456</span></p>
                                <p>etc: <span>789</span></p>
                            </div>
                        </div>
                        <div className="info-card">
                            <h>Specialized Units</h>
                            <hr />
                            <div className="card-details">
                                <p>ICU: <span>321</span></p>
                                <p>NICU: <span>654</span></p>
                                <p>CCU: <span>987</span></p>
                            </div>
                        </div>
                        <div className="info-card">
                            <h>Diagnostic facilities</h>
                            <hr />
                            <div className="card-details">
                                <p>Radiology: <span>111</span></p>
                                <p>Laboratory: <span>222</span></p>
                                <p>Pathology: <span>333</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="card-row">
                        <div className="info-card">
                            <h>Total Beds</h>
                            <hr />
                            <div className="card-details">
                                <p>ICU: <span>444</span></p>
                                <p>NICU: <span>555</span></p>
                                <p>CCU: <span>666</span></p>
                            </div>
                        </div>
                        <div className="info-card">
                            <h>No. Of Rooms</h>
                            <hr />
                            <div className="card-details">
                                <p>Wards: <span>777</span></p>
                                <p>OPD Rooms: <span>888</span></p>
                                <p>General: <span>999</span></p>
                            </div>
                        </div>
                        <div className="info-card">
                            <h>Diagnostic facilities</h>
                            <hr />
                            <div className="card-details">
                                <p>Radiology: <span>000</span></p>
                                <p>Laboratory: <span>111</span></p>
                                <p>Pathology: <span>222</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="card-row">
                        <div className="info-card">
                            <h>Lab Technician</h>
                            <hr />
                            <div className="card-details">
                                <p>Radiology: <span>333</span></p>
                                <p>Surgical: <span>444</span></p>
                                <p>MLT: <span>555</span></p>
                            </div>
                        </div>
                        <div className="info-card">
                            <h>Emergency</h>
                            <hr />
                            <div className="card-details">
                                <p>Ambulance: <span>666</span></p>
                                <p>Doctor: <span>777</span></p>
                                <p>E Rooms: <span>888</span></p>
                            </div>
                        </div>
                        <div className="info-card">
                            <h>Medical Staff</h>
                            <hr />
                            <div className="card-details">
                                <p>Doc: <span>999</span></p>
                                <p>Number: <span>000</span></p>
                                <p>Pathology: <span>111</span></p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default HospitalProfile;
