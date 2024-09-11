/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import "./addHospitalProfile.css";
import Sidebar from "../../Components/Sidebar";

const AddHospitalProfile = () => {
	const [step, setStep] = useState(1);
	const [cards, setCards] = useState([{}]);

	const handleAddCard = () => {
		const newCard = {
			totalWards: cards.length
				? cards[cards.length - 1].totalWards + 1
				: 1,
		};
		setCards([...cards, newCard]);
	};

	const handleRemoveCard = (index) => {
		const updatedCards = cards.filter((_, i) => i !== index);
		setCards(updatedCards);
	};

	const handleWardChange = (index, wardCount) => {
		const updatedCards = [...cards];
		updatedCards[index].totalWards = Math.max(parseInt(wardCount, 10), 1);
		setCards(updatedCards);
	};

	const handleNext = (e) => {
		e.preventDefault();
		setStep(2);
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

								<div className="input-group-contact">
									<label>Contact No.</label>
									<div className="input-with-icon">
										<input
											type="text"
											placeholder="Enter contact number"
										/>
									</div>
								</div>

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
									<input
										type="text"
										placeholder="Enter affiliation details"
									/>
								</div>
								<div className="input-group-hrs">
									<label>Email</label>
									<input type="url" />
								</div>

								<button onClick={handleNext}>Next</button>
							</>
						)}

						{step === 2 && (
							<>
								<div className="card-container-addhos">
									{cards.map((card, index) => (
										<div className="card-inner" key={index}>
											<div className="input-group">
												<label>
													Department {index + 1}
												</label>
												<select>
													<option value="">
														Select Department
													</option>
													<option value="surgery">
														Surgery
													</option>
													<option value="cardiology">
														Cardiology
													</option>
													<option value="neurology">
														Neurology
													</option>
												</select>
											</div>

											<div className="input-group">
												<label>Total Wards</label>
												<input
													type="number"
													min="1" // Set the minimum value to 1
													onChange={(e) =>
														handleWardChange(
															index,
															e.target.value
														)
													}
												/>
											</div>

											<div className="ward-bed-container">
												{[
													...Array(
														parseInt(
															card.totalWards || 0
														)
													),
												].map((_, i) => (
													<div
														className="input-group"
														key={i}>
														<label>
															Ward {i + 1} Bed
														</label>
														<input type="text" />
													</div>
												))}
											</div>

											<div className="input-group">
												<label>OPD</label>
												<input type="number" min={0} />
											</div>

											{index > 0 && (
												<FaTimes
													className="delete-icon-step2"
													onClick={() =>
														handleRemoveCard(index)
													}
												/>
											)}
										</div>
									))}
									<FaPlus
										className="add-icon-step2"
										onClick={handleAddCard}
									/>
								</div>

								<button onClick={() => setStep(1)}>
									Back to Step 1
								</button>
							</>
						)}
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddHospitalProfile;
