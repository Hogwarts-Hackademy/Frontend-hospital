import React, { useRef, useState } from "react";
import Sidebar from "../../Components/Sidebar";
import axios from "axios";
import { Snackbar, Alert } from "@mui/material";
import patientAPI from "../../config/patientAPI";
import "./registerPatient.css";

const RegisterPatient = () => {
	const fileInputRef = useRef(null);

	const [formData, setFormData] = useState({
		fullName: "",
		dateOfBirth: "",
		gender: "",
		contactInformation: {
			phone: "",
			email: "",
			address: "",
		},
		nationalID: "",
		medicalHistory: {
			allergies: "",
			pastSurgeries: "",
			chronicConditions: "",
			currentMedications: "",
		},
		insuranceDetails: {
			insuranceProvider: "",
			policyNumber: "",
			coverageDetails: "",
		},
		emergencyContact: {
			name: "",
			relationship: "",
			contactInformation: {
				phone: "",
				email: "",
			},
		},
	});

	const [snackbarOpen, setSnackbarOpen] = useState(false);
	const [snackbarMessage, setSnackbarMessage] = useState("");
	const [snackbarSeverity, setSnackbarSeverity] = useState("success"); // 'success' | 'error'

	const handleInputChange = (e) => {
		const { name, value } = e.target;

		// Handle nested objects
		const updateNestedField = (obj, keys, value) => {
			const key = keys.shift();
			if (!keys.length) {
				obj[key] = value;
			} else {
				obj[key] = obj[key] || {};
				updateNestedField(obj[key], keys, value);
			}
		};

		if (name.includes(".")) {
			const keys = name.split(".");
			setFormData((prev) => {
				const newFormData = { ...prev };
				updateNestedField(newFormData, keys, value);
				return newFormData;
			});
		} else {
			setFormData((prev) => ({
				...prev,
				[name]: value,
			}));
		}
	};

	const validateForm = () => {
		const { fullName, dateOfBirth, gender, contactInformation } = formData;
		const { phone, address } = contactInformation;

		if (!fullName || !dateOfBirth || !gender || !phone || !address) {
			setSnackbarMessage("Please fill in all required fields.");
			setSnackbarSeverity("error");
			setSnackbarOpen(true);
			return false;
		}
		return true;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Validate form before submission
		if (!validateForm()) return;

		// Format medical history as array
		const medicalHistory = {
			allergies: formData.medicalHistory.allergies
				.split(",")
				.map((item) => item.trim()),
			pastSurgeries: formData.medicalHistory.pastSurgeries
				.split(",")
				.map((item) => item.trim()),
			chronicConditions: formData.medicalHistory.chronicConditions
				.split(",")
				.map((item) => item.trim()),
			currentMedications: formData.medicalHistory.currentMedications
				.split(",")
				.map((item) => item.trim()),
		};

		// Combine form data into one object to match the required format
		const patientData = {
			...formData,
			medicalHistory,
		};

		try {
			await axios.post(
				`${patientAPI.REGISTER_NEW_PATIENT_URL}`,
				patientData
			);

			// Success message via Snackbar
			setSnackbarMessage("Patient registered successfully!");
			setSnackbarSeverity("success");
			setSnackbarOpen(true);
		} catch (error) {
			// Error message via Snackbar
			setSnackbarMessage(
				"Error registering patient: " +
					(error.response ? error.response.data.error : error.message)
			);
			setSnackbarSeverity("error");
			setSnackbarOpen(true);
		}
	};

	const handleFileClick = () => {
		fileInputRef.current.click();
	};

	const handleCloseSnackbar = () => {
		setSnackbarOpen(false);
	};

	return (
		<div className="register-container">
			<Sidebar />
			<div className="register-card">
				<h2 className="form-title">Register Patient</h2>
				<form className="patient-form" onSubmit={handleSubmit}>
					<div className="input-group-first">
						<input
							type="text"
							name="fullName"
							placeholder="Full Name"
							onChange={handleInputChange}
						/>
						<input
							type="date"
							name="dateOfBirth"
							placeholder="Date of Birth"
							onChange={handleInputChange}
						/>
					</div>
					<div className="gender-group">
						<input
							type="text"
							name="contactInformation.phone"
							placeholder="Contact No."
							onChange={handleInputChange}
						/>
						<div className="gender-group">
							<label>Gender:</label>
							<input
								type="radio"
								name="gender"
								value="Male"
								onChange={handleInputChange}
							/>{" "}
							Male
							<input
								type="radio"
								name="gender"
								value="Female"
								onChange={handleInputChange}
							/>{" "}
							Female
							<input
								type="radio"
								name="gender"
								value="Other"
								onChange={handleInputChange}
							/>{" "}
							Other
						</div>
						<input
							type="text"
							name="nationalID"
							placeholder="National ID"
							onChange={handleInputChange}
						/>
					</div>
					<input
						type="text"
						name="contactInformation.address"
						placeholder="House Address"
						className="full-width-input"
						onChange={handleInputChange}
					/>

					<div className="section-group">
						<div className="section medical-history">
							<h3>Medical History</h3>
							<input
								type="text"
								name="medicalHistory.allergies"
								placeholder="Allergies (comma-separated)"
								onChange={handleInputChange}
							/>
							<input
								type="text"
								name="medicalHistory.pastSurgeries"
								placeholder="Past surgeries (comma-separated)"
								onChange={handleInputChange}
							/>
							<input
								type="text"
								name="medicalHistory.chronicConditions"
								placeholder="Chronic conditions (comma-separated)"
								onChange={handleInputChange}
							/>
							<input
								type="text"
								name="medicalHistory.currentMedications"
								placeholder="Current medications (comma-separated)"
								onChange={handleInputChange}
							/>
						</div>

						<div className="section insurance-details">
							<h3>Insurance Details</h3>
							<input
								type="text"
								name="insuranceDetails.insuranceProvider"
								placeholder="Insurance Provider"
								onChange={handleInputChange}
							/>
							<input
								type="text"
								name="insuranceDetails.policyNumber"
								placeholder="Policy Number"
								onChange={handleInputChange}
							/>
							<input
								type="text"
								name="insuranceDetails.coverageDetails"
								placeholder="Coverage Details"
								onChange={handleInputChange}
							/>

							{/* Custom File Upload Button */}
							<div
								className="custom-file-upload"
								onClick={handleFileClick}>
								<i className="fas fa-upload"></i> Upload
								Document
							</div>
							<input
								type="file"
								ref={fileInputRef}
								style={{ display: "none" }}
								placeholder="Upload Document"
							/>
						</div>

						<div className="section emergency-contact">
							<h3>Emergency Contact</h3>
							<input
								type="text"
								name="emergencyContact.name"
								placeholder="Name"
								onChange={handleInputChange}
							/>
							<input
								type="text"
								name="emergencyContact.contactInformation.phone"
								placeholder="Contact Number"
								onChange={handleInputChange}
							/>
							<input
								type="text"
								name="emergencyContact.relationship"
								placeholder="Relationship"
								onChange={handleInputChange}
							/>
						</div>
					</div>

					<button type="submit" className="submit-btn">
						Register
					</button>
				</form>
			</div>

			<Snackbar
				open={snackbarOpen}
				autoHideDuration={4000}
				onClose={handleCloseSnackbar}
				anchorOrigin={{ vertical: "top", horizontal: "right" }}>
				<Alert
					onClose={handleCloseSnackbar}
					severity={snackbarSeverity}
					sx={{ width: "100%" }}>
					{snackbarMessage}
				</Alert>
			</Snackbar>
		</div>
	);
};

export default RegisterPatient;
