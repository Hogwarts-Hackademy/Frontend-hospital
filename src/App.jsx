import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/loginPage.jsx";
import Dashboard from "./pages/admin/adminDashboard.jsx";
import addStaff from "./pages/admin/addStaff.jsx";

function App() {
	return (
		<div className="App">
			<Routes>
                <Route path="/" element={<Navigate to="/login" />} />
				<Route path="/login" element={<Login />} />
				<Route path="/admin" element={<Dashboard />} />
				<Route path="/addStaff" element={<addStaff/>}/>
			</Routes>
		</div>
	);
}

export default App;
