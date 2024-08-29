import React from 'react';
import './Admin_Dashboard.css'; // Make sure to create this CSS file or use inline styles

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <main className="main-content">
        <header className="dashboard-header">
          <h1>Welcome Back, <span>User Name</span></h1>
          <div className="search-bar">
            <input type="text" placeholder="Search" />
          </div>
        </header>
        <section className="dashboard-cards">
          <div className="card emergency-calls">
            <h3>Emergency Calls</h3>
            <p className="call-count">169</p>
            <div className="call-details">
              <p>Ambulance: 24</p>
              <p>Patient: 24</p>
            </div>
          </div>
          <div className="card patient-admission">
            <h3>Patient Admission</h3>
            <p className="admission-count">1,287</p>
            <div className="admission-graph">
              {/* Graph will go here */}
            </div>
          </div>
          <div className="card bed-availability">
            <h3>Bed Availability</h3>
            <p>Beds: 24</p>
            <p>ICU: 24</p>
            <p>Emergency rooms: 24</p>
            <p>OT: 24</p>
            <p>Ventilators: 24</p>
          </div>
          <div className="card staff-availability">
            <h3>Staff Availability</h3>
            <p>Doctors: 24</p>
            <p>Nurses: 24</p>
            <p>Lab technicians: 24</p>
            <p>Receptionists: 24</p>
            <p>Janitors: 24</p>
          </div>
          <div className="card inventory">
            <h3>Inventory</h3>
            <p>Out of stock medicines: 24</p>
            <p>Ordered medicines: 24</p>
            <p>Expired meds: 24</p>
          </div>
          <div className="card other">
            <h3>Others</h3>
            <p>Departments: 24</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
