import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import Login from "./pages/loginPage/loginPage.jsx";
import Dashboard from "./pages/adminDashboard/adminDashboard.jsx";
import AddStaff from "./pages/addStaff/addStaff.jsx";
import PrescriptionPage from "./pages/prescriptionPage/prescriptionPage.jsx";
import RegisterPatient from "./pages/registerPatient/registerPatient.jsx";
import QueueList from "./pages/queueList/queueList.jsx";
import PatientRecords from "./pages/patientRecords/patientRecord.jsx";
import NurseNotes from "./pages/nurseNotes/nurseNotes.jsx";
import Appointments from "./pages/receptionistAppointments/appointments.jsx";
import DoctosStatus from "./pages/doctosStatus/doctosStatus.jsx";
import BillingPage from "./pages/billingPage/billingPage.jsx";
import AddHospitalProfile from "./pages/addHospitalProfile/addHospitalProfile.jsx";
import HospitalProfile from "./pages/hospitalProfile/hospitalProfile.jsx";
import DepartmentInfo from "./pages/departmentInfo/departmentInfo.jsx";
import LabTechnicians from "./pages/dashboards/labTechnicians/technician.jsx"
import BedAvail from "./pages/bedAvailibility/bedavailibility.jsx"

import Component1 from "./pages/component/component.jsx"
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
				<Route path="/doctos-status" element={<DoctosStatus />} />
				<Route path="/billing" element={<BillingPage />} />
				<Route path="/add-hospital" element={<AddHospitalProfile />} />
				<Route path="/hospital-profile" element={<HospitalProfile/>} />
				<Route path="/department-info" element={<DepartmentInfo/>}/>
				<Route path="/component1" element={<Component1 />} />
				<Route path="/technician" element={<LabTechnicians />} />
				<Route path="/beds" element={<BedAvail />} />
			</Routes>
		</div>
	);
}

export default App;
