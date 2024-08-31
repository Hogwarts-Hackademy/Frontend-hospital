import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import loginAPI from '../config/loginAPI';
import './loginPage.css';
import loginPageIllustration from "../assets/images/loginPageIllustration.svg";

const LoginPage = () => {
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('info');

    const handleLogin = async (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;

        try {
            const response = await fetch(`${loginAPI.LOGIN_URL}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();
            if (response.ok) {
                // Handle successful login (e.g., redirect or show a success message)
                setSnackbarMessage('Login successful!');
                setSnackbarSeverity('success');
                setSnackbarOpen(true);
                // Example of redirection after a successful login
                setTimeout(() => {
                    window.location.href = '/dashboard';
                }, 1000); // Redirect after 1 second
            } else {
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
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter your username"
                            required
                            aria-label="Username"
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
                            aria-label="Password"
                        />
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
            <div className="login-image">
                <img src={loginPageIllustration} alt="A Hospital Staff" />
            </div>

            {/* Snackbar for error messages */}
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={5000}
                onClose={handleCloseSnackbar}
                sx={{
                    position: 'fixed',
                    top: 16,
                    right: 16,
                    height: '50px',
                    width: '300px',
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
