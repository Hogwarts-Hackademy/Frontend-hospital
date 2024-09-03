import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import Login from "./pages/loginPage/loginPage.jsx";
import Dashboard from "./pages/adminDashboard/adminDashboard.jsx";
import AddStaff from "./pages/addStaff/addStaff.jsx";
import PrescriptionPage from "./pages/prescriptionPage/prescriptionPage.jsx";
import RegisterPatient from "./pages/registerPatient/registerPatient.jsx";
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
				<Route path="/component1" element={<Component1 />} />
			</Routes>
		</div>
	);
}

export default App;
