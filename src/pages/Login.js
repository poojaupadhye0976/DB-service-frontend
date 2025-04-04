import React from "react";
import dbImage from "../assets/db.jpg"; // Import your image

const Login = () => {
  return (
    <div style={styles.loginContainer}>
      {/* Left Side - Login Form */}
      <div style={styles.loginLeft}>
        <h2 style={styles.heading}>Welcome to 1SPOC</h2>
        <p style={styles.subText}>Sign into your account</p>
        <form style={styles.form}>
          <input type="text" placeholder="Phone or Email address" style={styles.input} />
          <input type="password" placeholder="Password" style={styles.input} />
          <button type="submit" style={styles.button}>Log In</button>
          <p style={styles.forgotPassword}>Forgot password?</p>
        </form>
      </div>

      {/* Right Side - Image (now blended with white background) */}
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
    background: "white", // Changed from gradient to pure white
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
    marginBottom: "10px",
    color: "#4f46e5", // Added brand color to heading
  },
  subText: {
    fontSize: "1.2rem",
    marginBottom: "20px",
    color: "#6b7280", // Gray color for subtext
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "300px",
  },
  input: {
    padding: "12px",
    margin: "10px 0",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    fontSize: "1rem",
    backgroundColor: "#f9fafb", // Light gray background for inputs
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
  forgotPassword: {
    marginTop: "15px",
    color: "#6d28d9",
    cursor: "pointer",
    textAlign: "center",
    fontSize: "0.9rem",
  },
  loginRight: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    backgroundColor: "white", // Ensures white background
  },
  image: {
    width: "100%",
    height: "auto",
    maxHeight: "80vh",
    objectFit: "contain",
    filter: "brightness(1.05)", // Slight brightness adjustment for blending
  },
};

export default Login;