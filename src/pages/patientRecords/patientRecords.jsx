import React from 'react';
import './patientRecords.css';
import Sidebar from '../../Components/Sidebar';
const PatientRecords = () => {
    return (
        <div className="dashboard-patient-record">
            <Sidebar/>
            <main className="main-content">
                <header className="main-header">
                    <h1>Patient Records</h1>
                </header>
                <section className="records-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Address</th>
                                <th>Date</th>
                                <th>Phone no.</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>haai</td>
                                <td>15</td>
                                <td>some place</td>
                                <td>12/12/2022</td>
                                <td>1234567890</td>
                            </tr>
                            {/* Repeat the <tr> elements for each record */}
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
};

export default PatientRecords;
