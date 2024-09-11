import React, { useState, useEffect } from "react";
import axios from "axios";
import "./inventory.css";
import Sidebar from "../../Components/Sidebar";

const InventoryPage = () => {
    const [expandedRow, setExpandedRow] = useState(null);
    const [selectedPage, setSelectedPage] = useState("medicalSupplies");
    const [medicalSuppliesData, setMedicalSuppliesData] = useState([]);
    const [pharmaceuticalsData, setPharmaceuticalsData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                if (selectedPage === "medicalSupplies") {
                    const response = await axios.get(
                        "http://localhost:5000/api/inventory/consumables/all"
                    );
                    setMedicalSuppliesData(response.data);
                } else {
                    const response = await axios.get(
                        "http://localhost:5000/api/inventory/pharmaceuticals/all"
                    );
                    setPharmaceuticalsData(response.data);
                }
            } catch (err) {
                setError("Error fetching data. Please try again later.");
            }
            setLoading(false);
        };

        fetchData();
    }, [selectedPage]);

    const toggleRow = (index) => {
        setExpandedRow(expandedRow === index ? null : index);
    };

    const currentData =
        selectedPage === "medicalSupplies" ? medicalSuppliesData : pharmaceuticalsData;

    return (
        <div className="dashboard-container-inv">
            <Sidebar />
            <main className="main-content-inv">
                <div className="main-header-inv">
                    <select
                        onChange={(e) => setSelectedPage(e.target.value)}
                        className="inventory-selector-inv"
                    >
                        <option value="medicalSupplies">
                            Medical Supplies (Consumables) Inventory Page
                        </option>
                        <option value="pharmaceuticals">
                            Pharmaceuticals (Medicines) Inventory Page
                        </option>
                    </select>
                    <h1 className="inventory-title-inv">
                        {selectedPage === "medicalSupplies"
                            ? "Medical Supplies (Consumables)"
                            : "Pharmaceuticals (Medicines)"}
                    </h1>
                    <input type="text" placeholder="Search" className="search-bar-inv" />
                </div>

                <div className="records-table-inv">
                    {loading ? (
                        <p>Loading data...</p>
                    ) : error ? (
                        <p>{error}</p>
                    ) : (
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
                {Object.entries(data).map(([key, value], idx) => {
                    // Skip unwanted fields (dispensingHistory, __v, and _id)
                    if (key === "_id" || key === "dispensingHistory" || key === "__v" || key === "usageHistory") {
                        return null;
                    }

                    // Hide reorderLevel for pharmaceuticals and show it for medicalSupplies
                    if (selectedPage === "pharmaceuticals" && key === "reorderLevel") {
                        return null;
                    }

                    // Hide storageConditions for pharmaceuticals and show it for medicalSupplies
                    if (selectedPage === "pharmaceuticals" && key === "storageConditions") {
                        return null;
                    }

                    // Render only valid data cells
                    return <td key={idx}>{value}</td>;
                })}
            </tr>
        </React.Fragment>
    ))}
</tbody>


                        </table>
                    )}
                </div>
            </main>
        </div>
    );
};

export default InventoryPage;
