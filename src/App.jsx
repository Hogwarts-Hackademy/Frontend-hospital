	import React from "react";
	import { Route, Routes, Navigate } from "react-router-dom";
	import './App.css'; 
	import Login from "./pages/loginPage.jsx";
	import Dashboard from "./pages/admin/adminDashboard.jsx";
	import AddStaff from "./pages/admin/addStaff/addStaff.jsx";
	import PrescriptionPage from "./pages/nurse/prescriptionPage/prescriptionPage.jsx";
	import RegisterPatient from "./pages/nurse/registerPatient/registerPatient.jsx";
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
				</Routes>
			</div>
		);
	}

	export default App;
