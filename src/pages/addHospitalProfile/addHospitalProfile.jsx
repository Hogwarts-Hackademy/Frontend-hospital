import React, { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa"; // Import icons
import "./addHospitalProfile.css";
import Sidebar from "../../Components/Sidebar";

const AddHospitalProfile = () => {
  const [contacts, setContacts] = useState([""]);
  const [step, setStep] = useState(1); // Add step state here

  const handleAddContact = () => {
    setContacts([...contacts, ""]);
  };

  const handleRemoveContact = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  };

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2); // This moves to the next step
  };

  return (
    <div className="hospital-profile-container">
      <Sidebar />
      <div className="card">
        <h2>Hospital Detail's</h2>
        <div className="main-content-hos">
          <form>
            {step === 1 && (
              <>
                <div className="input-group-hospitalname">
                  <label>Hospital Name</label>
                  <input type="text" />
                </div>
                <div className="input-group-address">
                  <label>Address</label>
                  <input type="text" />
                </div>

                {/* Contact No. with Plus Icon */}
                {contacts.map((contact, index) => (
                  <div className="input-group-contact" key={index}>
                    <label>Contact No.</label>
                    <div className="input-with-icon">
                      <input
                        type="text" // Ensures only numeric input
                        value={contact}
                        onChange={(e) => {
                          const updatedContacts = [...contacts];
                          updatedContacts[index] = e.target.value;
                          setContacts(updatedContacts);
                        }}
                      />
                      <FaPlus className="add-icon" onClick={handleAddContact} />
                      {index > 0 && (
                        <FaTimes
                          className="delete-icon"
                          onClick={() => handleRemoveContact(index)}
                        />
                      )}
                    </div>
                  </div>
                ))}

                <div className="input-group-date">
                  <label>Established Date</label>
                  <input type="date" />
                </div>
                <div className="input-group-owndetail">
                  <label>Ownership Detail</label>
                  <input type="text" />
                </div>
                <div className="input-group-aff">
                  <label>Affiliations</label>
                  <input type="text" placeholder="Enter affiliation details" />
                </div>
                <div className="input-group-hrs">
                  <label>Visiting Hours</label>
                  <input type="url" />
                </div>

                <button onClick={handleNext}>Next</button>
              </>
            )}

            {step === 2 && (
              <>
                {/* Step 2 form content goes here */}
                <h3>Step 2: More Information</h3>
                <button onClick={() => setStep(1)}>Back to Step 1</button>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddHospitalProfile;
