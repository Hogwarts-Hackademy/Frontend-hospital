import React from "react";
import "./loginPage.css";

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Welcome back!</h2>
                <p>Enter your Credentials to access your account</p>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="input-group">
                        <div className="password-group">
                            <label htmlFor="password">Password</label>
                            <a href="#" className="forgot-password">
                                forgot password?
                            </a>
                        </div>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                        />
                    </div>

                    <div className="remember-me">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Remember for 30 days</label>
                    </div>
                    <button type="submit" className="login-button">
                        Login
                    </button>
                </form>
            </div>
            <div className="login-image">
                <img src="/images/loginPageIllustration.svg" alt="Doctors" />
            </div>
        </div>
    );
};

export default Login;
