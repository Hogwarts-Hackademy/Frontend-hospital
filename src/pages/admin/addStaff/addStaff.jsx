import React from "react";
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
import formFields from './formFields.json'; // Import JSON file

const AddStaff = () => {
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
					<form noValidate>
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
											name={field.id}>
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
