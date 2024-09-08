import React from "react";
import "./billingPage.css";
import Sidebar from "../../Components/Sidebar";

const BillingPage = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <div className="billing-header">
          <div className="patient-details">
            <p>Patient Id :</p>
            <p>Name :</p>
            <p>DOB :</p>
          </div>
          <div className="consultant-details">
            <p>Contact Number :</p>
            <p>Consultant :</p>
            <p>Token No. :</p>
          </div>
        </div>
        <div className="grid-section">
          <div className="billing-section">
            <table className="billing-table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Summary</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>Consultation fee</td>
                  <td>2/2/2022</td>
                  <td>300</td>
                  <td>-</td>
                  <td>300.00</td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>Test fee</td>
                  <td>2/2/2022</td>
                  <td>500</td>
                  <td>-</td>
                  <td>500.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="payment-summary">
            <div className="summary-details">
              <p>Grand Total : 800.00</p>
              <p>CGST : 27.00</p>
              <p>SGST : 27.00</p>
              <p>
                Amount To Pay : <strong>854</strong>
              </p>
            </div>
            <div className="payment-info">
              <p>Date : 2/2/2022</p>
              <p>
                For more details contact customer care - 1234567890, 0987654321
              </p>
            </div>
          </div>
          </div>
          <div className="billing-actions">
            <button className="print-button">Print</button>
            <button className="send-button">Send</button>
          </div>
        
      </div>
    </div>
  );
};

export default BillingPage;
