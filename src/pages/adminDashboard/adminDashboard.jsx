import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Sidebar from "../../Components/Sidebar";
import dashboardImage2 from "../../assets/images/dashboard2.png";
import "./adminDashboard.css";

// New component for the image with text overlay
const ImageWithTextOverlay = ({
  imageSrc,
  text,
  blurBox1Text,
  blurBox2Text,
}) => {
  return (
    <div className="image-text-container">
      <img src={imageSrc} alt="Dashboard Image" className="dashboard-image" />
      <span className="overlay-text">{text}</span>
      <div className="blur-box blur-box1">
        <p>{blurBox1Text}</p>
      </div>
      <div className="blur-box blur-box2">
        <p>{blurBox2Text}</p>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-container">
        <main className="main-content">
          <header className="dashboard-header">
            <h1>
              <span className="welcome-text">Welcome Back,</span>
              <span className="user-name">User Name</span>
            </h1>
            <div className="header-right">
              <div className="search-bar">
                <input type="text" placeholder="Search" />
              </div>
              <NotificationsNoneIcon className="notification-icon" />
            </div>
          </header>

          {/* Image with text and blur boxes overlay */}
          <ImageWithTextOverlay
            imageSrc={dashboardImage2}
            text="Patients"
            blurBox1Text="Ambulance 24"
            blurBox2Text="Emergency Calls 24"
          />

          <section className="dashboard-cards">
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
    </div>
  );
};

export default Dashboard;
