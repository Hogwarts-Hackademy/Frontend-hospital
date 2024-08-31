import React, { useState } from "react";
import Sidebar from '../../../Components/Sidebar';
import {
	Container,
	TextField,
	Typography,
	Button,
	RadioGroup,
	FormControlLabel,
	Radio,
	Box,
} from "@mui/material";
import formFields from './formFields.json';
import axios from 'axios';
import staffAPI from "../../../config/staffAPI";

const AddStaff = () => {
	const [formData, setFormData] = useState({});

	const handleChange = (e) => {
		const { id, value } = e.target;
		setFormData({
			...formData,
			[id]: value,
		});
	};

	const handleRadioChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(`${staffAPI.ADD_STAFF}`, formData);
			console.log('Staff registered:', response.data);
		} catch (error) {
			console.error('Error registering staff:', error.response ? error.response.data : error.message);
		}
	};

	return (
		<div className="dashboard">
			<Sidebar />

			<Container component="main" maxWidth="md" sx={{ mt: 4 }}>
				<Typography
					variant="h4"
					component="h1"
					align="center"
					gutterBottom>
					Add Staff
				</Typography>
				<Box
					sx={{
						border: "1px solid #ddd",
						borderRadius: "8px",
						p: 3,
					}}>
					<form noValidate onSubmit={handleSubmit}>
						<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
							{formFields.formFields.map((field) => (
								<Box
									key={field.id}
									sx={{
										flexBasis: field.type === 'radio' ? '100%' : 'calc(50% - 16px)',
										minWidth: '200px',
									}}
								>
									{field.type === 'radio' ? (
										<RadioGroup
											row
											aria-label={field.label.toLowerCase()}
											name={field.id}
											onChange={handleRadioChange}>
											{field.options.map((option) => (
												<FormControlLabel
													key={option}
													value={option}
													control={<Radio />}
													label={option.charAt(0).toUpperCase() + option.slice(1)}
												/>
											))}
										</RadioGroup>
									) : (
										<TextField
											required={field.required}
											fullWidth
											id={field.id}
											label={field.label}
											variant="outlined"
											type={field.type}
											onChange={handleChange}
										/>
									)}
								</Box>
							))}
							<Box sx={{ flexBasis: '100%' }}>
								<Button
									type="submit"
									fullWidth
									variant="contained"
									color="primary">
									Register
								</Button>
							</Box>
						</Box>
					</form>
				</Box>
			</Container>
		</div>
	);
};

export default AddStaff;
