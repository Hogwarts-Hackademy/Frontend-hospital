import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Sidebar from "../../Components/Sidebar";
import dashboardImage2 from "../../assets/images/dashboard2.png";
import GraphCard from '../../Components/graphcard';
import "./adminDashboard.css";

const ImageWithTextOverlay = ({
  imageSrc,
  text,
  number,
  blurBox1Text,
  blurBox2Text,
}) => {
  return (
    <div className="image-text-container">
      <img
        src={dashboardImage2}
        alt="Dashboard with patient statistics"
        style={{
          width: "695px",
          height: "340px",
          objectFit: "cover",
          display: "block",
        }}
      />
      <span className="overlay-text">{text}</span>
      <span className="overlay-text2">{number}</span>
      <div className="blur-box blur-box1">
        <p>{blurBox1Text}</p>
      </div>
      <div className="blur-box blur-box2">
        <p>{blurBox2Text}</p>
      </div>
    </div>
  );
};

const LargeComponentWithGrid = ({ boxContents, title }) => {
  return (
    <div className="large-component-grid">
      <p className="large-box-title">{title}</p>
      {boxContents.map((content, index) => (
        <div key={index} className="grid-box">
          <p className="box-text">{content.text}</p>
          <p className="box-number">{content.number}</p>
        </div>
      ))}
    </div>
  );
};

const Dashboard = () => {
  const boxContents1 = [
    { text: "Beds", number: "42" },
    { text: "Emergency rooms", number: "35" },
    { text: "Ventilators", number: "28" },
    { text: "ICU", number: "19" },
    { text: "OT", number: "76" },
  ];

  const boxContents2 = [
    { text: "Doctors", number: "85" },
    { text: "Nurses", number: "42" },
    { text: "Lab technicians", number: "28" },
    { text: "Receptions", number: "19" },
    { text: "Janitors", number: "52" },
  ];

  const boxContents3 = [
    { text: "Out of stock medicines", number: "60" },
    { text: "Ordered medicines", number: "12" },
    { text: "Expired meds", number: "10" },
    { text: "Departments", number: "8" },
  ];

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
          <div className="dashgrid">
            {/* Container to hold ImageWithTextOverlay and GraphCard side by side */}
            <div className="graph-image-container">
              <ImageWithTextOverlay
                imageSrc={dashboardImage2}
                text="Patients"
                number="169"
                blurBox1Text="Ambulance 24"
                blurBox2Text="Emergency Calls 24"
              />
              <GraphCard />
            </div>
          </div>
          {/* Grid of large components */}
          <div className="large-components-grid">
            <LargeComponentWithGrid boxContents={boxContents1} title="Bed Availability" />
            <LargeComponentWithGrid boxContents={boxContents3} title="Inventory" />
          </div>
          <div className="large-components-grid2">
            <LargeComponentWithGrid boxContents={boxContents2} title="Staff Availibility" />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
