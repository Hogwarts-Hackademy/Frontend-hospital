import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Admin</h2>
      </div>
      <ul className="sidebar-menu">
        <li>Dashboard</li>
        <li>Patient records</li>
        <li>Add schedules</li>
        <li>Add staff</li>
        <li>Department records</li>
        <li>Manage Inventory</li>
        <li>Hospital Profile</li>
      </ul>
      <div className="sidebar-footer">
        <p>Have any problems with managing your dashboard? Try to contact Customer Support</p>
        <button>Contact Us</button>
      </div>
    </aside>
  );
};

export default Sidebar;
