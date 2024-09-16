import React, { useState } from "react";
import axios from "axios";
import { Snackbar, Alert } from "@mui/material";
import inventoryAPI from "../../config/inventoryAPI";
import Sidebar from "../../Components/Sidebar";
import "./addMedicine.css";

const AddMedicinePage = () => {
	const [selectedCategory, setSelectedCategory] = useState("medicalSupplies");
	const [formData, setFormData] = useState({
		itemName: "",
		category: "",
		quantityAvailable: "",
		dateOfPurchase: "",
		batchNumber: "",
		supplierDetails: "",
		pricePerUnit: "",
		totalCost: "",
		expiryDate: "",
		storageConditions: "",
		reorderLevel: "",
		drugName: "",
		drugClassification: "",
		formulation: "",
		strength: "",
		manufacturer: "",
		purchasePrice: "",
		sellingPrice: "",
	});

	const [snackbarOpen, setSnackbarOpen] = useState(false);
	const [snackbarMessage, setSnackbarMessage] = useState("");
	const [snackbarSeverity, setSnackbarSeverity] = useState("success");

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			if (selectedCategory === "medicalSupplies") {
				try {
					const response = await axios.post(
						inventoryAPI.ADD_CONSUMABLE_ITEM,
						{
							itemName: formData.itemName,
							category: formData.category,
							quantityAvailable: formData.quantityAvailable,
							dateOfPurchase: formData.dateOfPurchase,
							batchNumber: formData.batchNumber,
							supplierDetails: formData.supplierDetails,
							pricePerUnit: formData.pricePerUnit,
							totalCost: formData.totalCost,
							expiryDate: formData.expiryDate,
							storageConditions: formData.storageConditions,
							reorderLevel: formData.reorderLevel,
						}
					);
					if (response.status === 201) {
						setSnackbarMessage(
							"Consumable added to inventory successfully"
						);
						setSnackbarSeverity("success");
						setSnackbarOpen(true);
					} else {
						setSnackbarMessage("Failed to add consumable");
						setSnackbarSeverity("error");
						setSnackbarOpen(true);
					}
				} catch (error) {
					console.error("Error adding consumable:", error);
					setSnackbarMessage(
						"An error occurred while adding the consumable"
					);
					setSnackbarSeverity("error");
					setSnackbarOpen(true);
				}
			} else {
				try {
					const response = await axios.post(
						inventoryAPI.ADD_PHARMACEUTICAL_ITEM,
						{
							drugName: formData.drugName,
							drugClassification: formData.drugClassification,
							formulation: formData.formulation,
							strength: formData.strength,
							quantityAvailable: formData.quantityAvailable,
							dateOfPurchase: formData.dateOfPurchase,
							batchNumber: formData.batchNumber,
							manufacturer: formData.manufacturer,
							supplierDetails: formData.supplierDetails,
							purchasePrice: formData.purchasePrice,
							sellingPrice: formData.sellingPrice,
							totalCost: formData.totalCost,
							expiryDate: formData.expiryDate,
							storageConditions: formData.storageConditions,
							reorderLevel: formData.reorderLevel,
						}
					);
					if (response.status === 201) {
						setSnackbarMessage(
							"Medicine added to inventory successfully"
						);
						setSnackbarSeverity("success");
						setSnackbarOpen(true);
					} else {
						setSnackbarMessage("Failed to add medicine");
						setSnackbarSeverity("error");
						setSnackbarOpen(true);
					}
				} catch (error) {
					console.error("Error adding medicine:", error);
					setSnackbarMessage(
						"An error occurred while adding the medicine"
					);
					setSnackbarSeverity("error");
					setSnackbarOpen(true);
				}
			}
		} catch (err) {
			alert("Error adding data: " + err.message);
		}
	};

	const handleCloseSnackbar = () => {
		setSnackbarOpen(false);
	};

	return (
		<div className="add-medicine-container">
			<Sidebar />
			<div className="add-medicine-card">
				<div className="add-medicine-div">
					<h2>Add Inventory</h2>
					<select
						onChange={(e) => setSelectedCategory(e.target.value)}
						className="add-medicine-selector">
						<option value="medicalSupplies">
							Medical Supplies (Consumables)
						</option>
						<option value="pharmaceuticals">
							Pharmaceuticals (Medicines)
						</option>
					</select>
				</div>

				<form onSubmit={handleSubmit} className="add-medicine-form">
					{selectedCategory === "medicalSupplies" ? (
						<>
							<input
								type="text"
								name="itemName"
								placeholder="Item Name"
								value={formData.itemName}
								onChange={handleInputChange}
							/>
							<input
								type="text"
								name="category"
								placeholder="Category (sterile, non-sterile)"
								value={formData.category}
								onChange={handleInputChange}
							/>
							<input
								type="number"
								name="quantityAvailable"
								placeholder="Quantity Available"
								value={formData.quantityAvailable}
								onChange={handleInputChange}
							/>
							<input
								type="date"
								name="dateOfPurchase"
								placeholder="Date of Purchase"
								value={formData.dateOfPurchase}
								onChange={handleInputChange}
							/>
							<input
								type="text"
								name="batchNumber"
								placeholder="Batch Number"
								value={formData.batchNumber}
								onChange={handleInputChange}
							/>
							<input
								type="text"
								name="supplierDetails"
								placeholder="Supplier Details"
								value={formData.supplierDetails}
								onChange={handleInputChange}
							/>
							<input
								type="number"
								name="pricePerUnit"
								placeholder="Price per Unit"
								value={formData.pricePerUnit}
								onChange={handleInputChange}
							/>
							<input
								type="number"
								name="totalCost"
								placeholder="Total Cost"
								value={formData.totalCost}
								onChange={handleInputChange}
							/>
							<input
								type="date"
								name="expiryDate"
								placeholder="Expiry Date"
								value={formData.expiryDate}
								onChange={handleInputChange}
							/>
							<input
								type="text"
								name="storageConditions"
								placeholder="Storage Conditions"
								value={formData.storageConditions}
								onChange={handleInputChange}
							/>
							<input
								type="number"
								name="reorderLevel"
								placeholder="Reorder Level"
								value={formData.reorderLevel}
								onChange={handleInputChange}
							/>
						</>
					) : (
						<>
							<input
								type="text"
								name="drugName"
								placeholder="Drug Name"
								value={formData.drugName}
								onChange={handleInputChange}
							/>
							<input
								type="text"
								name="drugClassification"
								placeholder="Drug Classification"
								value={formData.drugClassification}
								onChange={handleInputChange}
							/>
							<input
								type="text"
								name="formulation"
								placeholder="Formulation"
								value={formData.formulation}
								onChange={handleInputChange}
							/>
							<input
								type="text"
								name="strength"
								placeholder="Strength"
								value={formData.strength}
								onChange={handleInputChange}
							/>
							<input
								type="number"
								name="quantityAvailable"
								placeholder="Quantity Available"
								value={formData.quantityAvailable}
								onChange={handleInputChange}
							/>
							<input
								type="date"
								name="dateOfPurchase"
								placeholder="Date of Purchase"
								value={formData.dateOfPurchase}
								onChange={handleInputChange}
							/>
							<input
								type="text"
								name="batchNumber"
								placeholder="Batch Number"
								value={formData.batchNumber}
								onChange={handleInputChange}
							/>
							<input
								type="text"
								name="manufacturer"
								placeholder="Manufacturer"
								value={formData.manufacturer}
								onChange={handleInputChange}
							/>
							<input
								type="text"
								name="supplierDetails"
								placeholder="Supplier Details"
								value={formData.supplierDetails}
								onChange={handleInputChange}
							/>
							<input
								type="number"
								name="purchasePrice"
								placeholder="Purchase Price"
								value={formData.purchasePrice}
								onChange={handleInputChange}
							/>
							<input
								type="number"
								name="sellingPrice"
								placeholder="Selling Price"
								value={formData.sellingPrice}
								onChange={handleInputChange}
							/>
							<input
								type="number"
								name="totalCost"
								placeholder="Total Cost"
								value={formData.totalCost}
								onChange={handleInputChange}
							/>
							<input
								type="date"
								name="expiryDate"
								placeholder="Expiry Date"
								value={formData.expiryDate}
								onChange={handleInputChange}
							/>
							<input
								type="text"
								name="storageConditions"
								placeholder="Storage Conditions"
								value={formData.storageConditions}
								onChange={handleInputChange}
							/>
							<input
								type="number"
								name="reorderLevel"
								placeholder="Reorder Level"
								value={formData.reorderLevel}
								onChange={handleInputChange}
							/>
						</>
					)}
					<button type="submit" className="submit-btn">
						Add
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

export default AddMedicinePage;
