import { Link } from 'react-router-dom';
import './Sidebar.css'; // Ensure this CSS file styles your sidebar
import image from '../assets/images/image.png'; // Import your image

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src={image} alt="Admin Icon" className="sidebar-icon" />
        <h2>Admin</h2>
      </div>
      <ul className="sidebar-menu">
        <li><Link className='sidebar-link-text' to="/admin">Dashboard</Link></li>
        <li><Link className='sidebar-link-text' to="/patient-records">Patient records</Link></li>
        <li><Link className='sidebar-link-text' to="/register-patient">Register patient</Link></li>
        <li><Link className='sidebar-link-text' to="/add-staff">Add staff</Link></li>
        <li><Link className='sidebar-link-text' to="/department-info">Department records</Link></li>
        <li><Link className='sidebar-link-text' to="/inventory">Manage Inventory</Link></li>
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
