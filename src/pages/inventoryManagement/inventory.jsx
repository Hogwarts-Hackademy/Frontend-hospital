import React, { useState } from "react";
import "./inventory.css"; // Ensure you have this updated CSS file
import Sidebar from "../../Components/Sidebar";


const InventoryPage = () => {
    const [expandedRow, setExpandedRow] = useState(null);
    const [selectedPage, setSelectedPage] = useState("medicalSupplies");

    const medicalSuppliesData = [
        { itemName: "Gauze", category: "Sterile", quantity: 100, dateOfPurchase: "12/12/2022", batchNumber: "A123", supplier: "ABC Supplies", pricePerUnit: 2, totalCost: 200, expiryDate: "12/12/2025", storage: "Cool, dry place", reorderLevel: 50 },
        { itemName: "Gloves", category: "Non-Sterile", quantity: 200, dateOfPurchase: "01/05/2023", batchNumber: "B456", supplier: "XYZ Supplies", pricePerUnit: 1, totalCost: 200, expiryDate: "01/05/2026", storage: "Room temperature", reorderLevel: 100 }
    ];

    const pharmaceuticalsData = [
        { drugName: "Paracetamol", classification: "Analgesic", formulation: "Tablet", strength: "500 mg", quantity: 1000, dateOfPurchase: "10/10/2022", batchNumber: "C789", manufacturer: "PharmaCorp", supplier: "MediSupplies", purchasePrice: 0.10, sellingPrice: 0.50, totalCost: 100, expiryDate: "10/10/2024"},
        { drugName: "Amoxicillin", classification: "Antibiotic", formulation: "Capsule", strength: "250 mg", quantity: 500, dateOfPurchase: "05/15/2022", batchNumber: "D012", manufacturer: "HealthPharma", supplier: "PharmaDistributors", purchasePrice: 0.20, sellingPrice: 1.00, totalCost: 500, expiryDate: "05/15/2025" }
    ];

    const toggleRow = (index) => {
        setExpandedRow(expandedRow === index ? null : index);
    };

    const currentData = selectedPage === "medicalSupplies" ? medicalSuppliesData : pharmaceuticalsData;

    return (
        <div className="dashboard-container-inv">
            <Sidebar />
            <main className="main-content-inv">
                <div className="main-header-inv">
                    <select 
                        onChange={(e) => setSelectedPage(e.target.value)} 
                        className="inventory-selector-inv"
                    >
                        <option value="medicalSupplies">Medical Supplies (Consumables) Inventory Page</option>
                        <option value="pharmaceuticals">Pharmaceuticals (Medicines) Inventory Page</option>
                    </select>
                    <h1 className="inventory-title-inv">
                        {selectedPage === "medicalSupplies" 
                            ? "Medical Supplies (Consumables)" 
                            : "Pharmaceuticals (Medicines)"}
                    </h1>
                    <input type="text" placeholder="Search" className="search-bar-inv" />
                </div>

                <div className="records-table-inv">
                    <table>
                        <thead>
                            <tr>
                                {selectedPage === "medicalSupplies" ? (
                                    <>
                                        <th>Item Name</th>
                                        <th>Category</th>
                                        <th>Quantity Available</th>
                                        <th>Date of Purchase</th>
                                        <th>Batch Number</th>
                                        <th>Supplier Details</th>
                                        <th>Price per Unit</th>
                                        <th>Total Cost</th>
                                        <th>Expiry Date</th>
                                        <th>Storage Conditions</th>
                                        <th>Reorder Level</th>
                                    </>
                                ) : (
                                    <>
                                        <th>Drug Name</th>
                                        <th>Drug Classification</th>
                                        <th>Formulation</th>
                                        <th>Strength</th>
                                        <th>Quantity Available</th>
                                        <th>Date of Purchase</th>
                                        <th>Batch Number</th>
                                        <th>Manufacturer</th>
                                        <th>Supplier Details</th>
                                        <th>Purchase Price</th>
                                        <th>Selling Price</th>
                                        <th>Total Cost</th>
                                        <th>Expiry Date</th>
                                    </>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {currentData.map((data, index) => (
                                <React.Fragment key={index}>
                                    <tr
                                        className={`${
                                            expandedRow === index ? "expanded-inv" : ""
                                        } ${index % 2 === 0 ? "even-row-inv" : "odd-row-inv"}`}
                                        onClick={() => toggleRow(index)}
                                    >
                                        {Object.values(data).map((value, idx) => (
                                            <td key={idx}>{value}</td>
                                        ))}
                                    </tr>
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default InventoryPage;
