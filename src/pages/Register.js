import React, { useState } from 'react';
import dbImage from "../assets/db.jpg"; // Import your image
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({ 
    firstName: '', 
    lastName: '', 
    mobileNumber: '', 
    email: '', 
    password: '', 
    confirmPassword: '' 
  });
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      return alert('Passwords do not match');
    }

    try {
      await axios.post('http://localhost:5000/api/auth/register', {
        firstName: form.firstName,
        lastName: form.lastName,
        mobileNumber: form.mobileNumber,
        email: form.email,
        password: form.password,
      });
      navigate('/login');
    } catch (err) {
      alert('Error registering user');
    }
  };

  return (
    <div style={styles.loginContainer}>
      {/* Left Side - Register Form */}
      <div style={styles.loginLeft}>
        <h2 style={styles.heading}>Create your account</h2>
        <p style={styles.subText}>Join us today</p>
        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.nameContainer}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              style={{ ...styles.input, width: '48%' }}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              style={{ ...styles.input, width: '48%' }}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="tel"
            name="mobileNumber"
            placeholder="Mobile Number"
            style={styles.input}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            style={styles.input}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            style={styles.input}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            style={styles.input}
            onChange={handleChange}
            required
          />
          <button type="submit" style={styles.button}>Register</button>
          <p style={styles.loginText}>
            Already have an account?{' '}
            <span 
              style={styles.loginLink} 
              onClick={() => navigate('/login')}
            >
              Login
            </span>
          </p>
        </form>
      </div>

      {/* Right Side - Image */}
      <div style={styles.loginRight}>
        <img src={dbImage} alt="Database Illustration" style={styles.image} />
      </div>
    </div>
  );
};

const styles = {
  loginContainer: {
    display: "flex",
    height: "100vh",
    background: "white",
  },
  loginLeft: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
    background: "white",
    color: "black",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "10px 12px",
    color: "#4f46e5",
  },
  subText: {
    fontSize: "1.2rem",
    marginBottom: "20px",
    color: "#6b7280",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "400px",
  },
  nameContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  input: {
    padding: "12px",
    margin: "10px ",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    fontSize: "1rem",
    backgroundColor: "#f9fafb",
  },
  button: {
    padding: "12px",
    border: "none",
    background: "#4f46e5",
    color: "white",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1rem",
    marginTop: "10px",
    fontWeight: "600",
    transition: "background 0.2s",
  },
  loginText: {
    marginTop: "15px",
    color: "#6b7280",
    textAlign: "center",
    fontSize: "0.9rem",
  },
  loginLink: {
    color: "#4f46e5",
    cursor: "pointer",
    fontWeight: "600",
  },
  loginRight: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: "auto",
    maxHeight: "80vh",
    objectFit: "contain",
    filter: "brightness(1.05)",
  },
};

export default Register;