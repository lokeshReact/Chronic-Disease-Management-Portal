"use client";
import React, { useState } from "react";
import styles from "../../scss/comp/auth.module.scss"; 
import { useRouter } from 'next/navigation';

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", formData);
  };

    const handleForgotPassword = () => {
    router.push("/auth/forgot_password")
  };

  return (
    <div className={styles.container}>
      <img src="/download.png" alt="logo" className={styles.logo} />
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <h2>Login</h2>
        <div className={styles.inputGroup}>
          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Password:</label>
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit" className={styles.loginButton}>Login</button>
        <a onClick={handleForgotPassword}>Forgot Password?</a>
      </form>
    </div>
  );
};

export default Login;
