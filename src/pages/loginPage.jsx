import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import login_API from '../config/login_API';
import './loginPage.css'

const LoginPage = () => {
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('info'); // Change to 'error' for error messages

    const handleLogin = async (event) => {
        event.preventDefault();
        const username = event.target.username.value; // Updated from email to username
        const password = event.target.password.value;

        try {
            const response = await fetch(`${login_API.API_BASE_URL}${login_API.LOGIN_URL}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ username, password }), // Updated from email to username
            });

            const data = await response.json();
            if (response.ok) {
                // Handle successful login (e.g., redirect or show a success message)
                console.log('Login successful:', data);
            } else {
                // Handle error response
                setSnackbarMessage(data.status || 'An error occurred');
                setSnackbarSeverity('error');
                setSnackbarOpen(true);
            }
        } catch (error) {
            console.error('Error during login:', error);
            setSnackbarMessage('An unexpected error occurred. Please try again.');
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
        }
    };

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Welcome back!</h2>
                <p>Enter your Credentials to access your account</p>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label htmlFor="username">Username</label> {/* Updated from Email address to Username */}
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter your username" // Updated placeholder
                            required
                        />
                    </div>
                    <div className="input-group">
                        <div className="password-group">
                            <label htmlFor="password">Password</label>
                        </div>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
            <div className="login-image">
                <img src="/images/loginPageIllustration.svg" alt="Doctors" />
            </div>

            {/* Snackbar for error messages */}
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={5000} // Show for 5 seconds
                onClose={handleCloseSnackbar}
                sx={{
                    position: 'fixed',
                    top: 16,
                    right: 16,
                    height: '50px',
                    width: '300px', // Adjust width as needed
                }}
            >
                <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default LoginPage;
