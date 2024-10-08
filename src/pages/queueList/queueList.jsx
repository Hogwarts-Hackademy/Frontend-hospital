import React from "react";
import "./queueList.css"; // Assuming you'll create a CSS file for styling
import Sidebar from "../../Components/Sidebar";

const QueueList = () => {
    return (
        <div className="queue-list-container">
            <Sidebar/>
            <main className="main-content">
                <div className="header">
                    <button className="department-select">Select Department</button>
                    <h2>O P D</h2>
                    <div className="search-bar-que">
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
                <div className="patient-queue">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Token no.</th>
                                <th>Consultant</th>
                            </tr>
                        </thead>
                        <tbody>
                            <h3>Current patient-</h3>
                            <tr>
                                <td>haai</td>
                                <td>15</td>
                                <td>caty</td>
                            </tr>
                                <h3>Next patient-</h3>
                            <tr>
                                <td>haai</td>
                                <td>15</td>
                                <td>caty</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default QueueList;
