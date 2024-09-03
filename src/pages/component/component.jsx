import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Sidebar from "../../Components/Sidebar";
import dashboardImage2 from "../../assets/images/dashboard2.png";
import dashboardSvg from "../../assets/images/dashboard.svg"; // Import your SVG
import "./component.css";

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

          {/* New Card Component with SVG */}
          <div className="card-container">
            <div className="card-component">
              <h3>Card Title</h3>
              <p>Card content goes here.</p>
            </div>
            <img src={dashboardSvg} alt="Dashboard SVG" className="dashboard-svg" />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
