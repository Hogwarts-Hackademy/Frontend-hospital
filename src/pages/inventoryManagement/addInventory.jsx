import React, { useState } from 'react';
import Sidebar from '../../Components/Sidebar';
import './addMedicine.css';

const AddMedicine = () => {
    const [formData, setFormData] = useState({
        drugName: '',
        drugClassification: '',
        formulation: '',
        strength: '',
        quantityAvailable: '',
        dateOfPurchase: '',
        batchNumber: '',
        manufacturer: '',
        supplierDetails: '',
        purchasePrice: '',
        sellingPrice: '',
        totalCost: '',
        expiryDate: '',
        storageConditions: '',
        reorderLevel: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/inventory/pharmaceuticals/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            if (response.ok) {
                alert('Medicine added to inventory successfully');
            } else {
                alert('Failed to add medicine: ' + result.message);
            }
        } catch (error) {
            console.error('Error adding medicine:', error);
            alert('An error occurred while adding the medicine');
        }
    };

    return (
        <div className="add-medicine-container">
            <Sidebar />
            <div className="add-medicine-card">
                <h2 className="form-title">Add Medicine to Inventory</h2>
                <form className="medicine-form" onSubmit={handleSubmit}>
                    <input type="text" name="drugName" placeholder="Drug Name" onChange={handleInputChange} />
                    <input type="text" name="drugClassification" placeholder="Drug Classification" onChange={handleInputChange} />
                    <input type="text" name="formulation" placeholder="Formulation" onChange={handleInputChange} />
                    <input type="text" name="strength" placeholder="Strength" onChange={handleInputChange} />
                    <input type="number" name="quantityAvailable" placeholder="Quantity Available" onChange={handleInputChange} />
                    <input type="date" name="dateOfPurchase" placeholder="Date of Purchase" onChange={handleInputChange} />
                    <input type="text" name="batchNumber" placeholder="Batch Number" onChange={handleInputChange} />
                    <input type="text" name="manufacturer" placeholder="Manufacturer" onChange={handleInputChange} />
                    <input type="text" name="supplierDetails" placeholder="Supplier Details" onChange={handleInputChange} />
                    <input type="number" name="purchasePrice" placeholder="Purchase Price" onChange={handleInputChange} />
                    <input type="number" name="sellingPrice" placeholder="Selling Price" onChange={handleInputChange} />
                    <input type="number" name="totalCost" placeholder="Total Cost" onChange={handleInputChange} />
                    <input type="date" name="expiryDate" placeholder="Expiry Date" onChange={handleInputChange} />
                    <input type="text" name="storageConditions" placeholder="Storage Conditions" onChange={handleInputChange} />
                    <input type="number" name="reorderLevel" placeholder="Reorder Level" onChange={handleInputChange} />

                    <button type="submit" className="submit-btn">Add Medicine</button>
                </form>
            </div>
        </div>
    );
};

export default AddMedicine;
