import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import Login from "./pages/loginPage/loginPage.jsx";
import Dashboard from "./pages/adminDashboard/adminDashboard.jsx";
import AddStaff from "./pages/addStaff/addStaff.jsx";
import PrescriptionPage from "./pages/prescriptionPage/prescriptionPage.jsx";
import RegisterPatient from "./pages/registerPatient/registerPatient.jsx";
import QueueList from "./pages/queueList/queueList.jsx";
import PatientRecords from "./pages/patientRecords/patientRecords.jsx";
import NurseNotes from "./pages/NurseNotes/nurseNotes.jsx";
import Appointments from "./pages/receptionistAppointments/appointments.jsx";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Navigate to="/login" />} />
				<Route path="/login" element={<Login />} />
				<Route path="/admin" element={<Dashboard />} />
				<Route path="/add-staff" element={<AddStaff />} />
				<Route path="/register-patient" element={<RegisterPatient />} />
				<Route path="/prescription-page" element={<PrescriptionPage />} />
				<Route path="/queue-list" element={<QueueList />} />
				<Route path="/patient-records" element={<PatientRecords />} />
				<Route path="/nurse-notes" element={<NurseNotes />} />
				<Route path="/receptionist-appointments" element={<Appointments />} />
			</Routes>
		</div>
	);
}

export default App;
