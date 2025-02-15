"use client";
import React, { useState } from "react";
import styles from "../../scss/comp/register.module.scss"; // Import as a module
import { useRouter } from 'next/navigation';


const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState(""); 
  const [error, setError] = useState(""); 
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setMessage(""); 
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    router.push("/admin");

    // try {
    //   const res = await axios.post("http://localhost:5000/register", formData);
    //   setMessage(res.data.msg);
    //   setFormData({ name: "", email: "", password: "" }); // Reset form
    // } catch (err) {
    //   setError(err.response?.data?.msg || "Something went wrong");
    // }
  };

  return (
    <div className={styles["register-container"]}>
      <h2>Register User</h2>
      {message && <p className={styles["success-message"]}>{message}</p>}
      {error && <p className={styles["error-message"]}>{error}</p>}
      <form onSubmit={handleSubmit} className={styles["register-form"]}>
        <input type="text" name="name" value={formData.name} placeholder="Name" onChange={handleChange} required />
        <input type="email" name="email" value={formData.email} placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" value={formData.password} placeholder="Password" onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
