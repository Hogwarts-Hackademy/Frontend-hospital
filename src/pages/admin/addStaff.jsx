// AddStaff.js
import React from 'react';
import { Container, TextField, Grid, Typography, Button, RadioGroup, FormControlLabel, Radio, Box } from '@mui/material';


const addStaff = () => {
    return (
        <Container component="main" maxWidth="md" sx={{ mt: 4 }}>
            <Typography variant="h4" component="h1" align="center" gutterBottom>Add Staff</Typography>
            <Box sx={{ border: '1px solid #ddd', borderRadius: '8px', p: 3 }}>
                <form noValidate>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField required fullWidth id="fullName" label="Full Name" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField required fullWidth id="dob" label="Date of Birth" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField required fullWidth id="contact" label="Contact No." variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <RadioGroup row aria-label="gender" name="gender">
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField required fullWidth id="nationalId" label="National ID" variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField required fullWidth id="address" label="House address" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField required fullWidth id="specialization" label="Specialization" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField required fullWidth id="dob2" label="Date of Birth" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField required fullWidth id="department" label="Department" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField required fullWidth id="staffType" label="Staff Type" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField required fullWidth id="experience" label="Years of Experience" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField required fullWidth id="licenseNumber" label="License Number" variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" fullWidth variant="contained" color="primary">Register</Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Container>
    );
};

export default addStaff;
