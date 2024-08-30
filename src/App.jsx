import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/loginPage.jsx";
import Dashboard from "./pages/admin/adminDashboard.jsx";

function App() {
	return (
		<div className="App">
			<Routes>
                <Route path="/" element={<Navigate to="/login" />} />
				<Route path="/login" element={<Login />} />
				<Route path="/admin" element={<Dashboard />} />
			</Routes>
		</div>
	);
}

export default App;
