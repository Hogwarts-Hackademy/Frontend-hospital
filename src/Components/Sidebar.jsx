import { Link } from 'react-router-dom';
import './Sidebar.css'; // Ensure this CSS file styles your sidebar

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Admin</h2>
      </div>
      <ul className="sidebar-menu">
        <li><Link className='sidebar-link-text' to="/admin">Dashboard</Link></li>
        <li><Link className='sidebar-link-text' to="/patient-records">Patient records</Link></li>
        <li><Link className='sidebar-link-text' to="/add-schedules">Add schedules</Link></li>
        <li><Link className='sidebar-link-text' to="/add-staff">Add staff</Link></li>
        <li><Link className='sidebar-link-text' to="/department-records">Department records</Link></li>
        <li><Link className='sidebar-link-text' to="/manage-inventory">Manage Inventory</Link></li>
        <li><Link className='sidebar-link-text' to="/hospital-profile">Hospital Profile</Link></li>
      </ul>
      <div className="sidebar-footer">
        <p>Have any problems with managing your dashboard? Try to contact Customer Support</p>
        <button>Contact Us</button>
      </div>
    </aside>
  );
};

export default Sidebar;
