"use client";
import React, { useState } from "react";
import styles from "../../scss/comp/auth.module.scss"; 
import { useRouter } from 'next/navigation'; // For navigation

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Add API call to handle password reset logic here
    console.log("Password reset request for:", email);
    setMessage("If an account with this email exists, you will receive a password reset link.");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <h2>Forgot Password</h2>
        <p>Enter your email to reset your password</p>

        <div className={styles.inputGroup}>
          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={handleChange} required />
        </div>

        <button type="submit" className={styles.loginButton}>Reset Password</button>

        {message && <p className={styles.message}>{message}</p>}
        
        <button 
          type="button" 
          className={styles.backButton} 
          onClick={() => router.push('/auth/login')}
        >
          Back to Login
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
