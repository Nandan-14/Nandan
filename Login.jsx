import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import "./Login.css";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }

    if (login(email, password)) {
      navigate("/account"); // redirect after login
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Welcome Back</h2>

      {error && <div className="error-box">{error}</div>}

      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="login-btn">
          Login
        </button>
      </form>

      <p className="login-footer">
        Don’t have an account?{" "}
        <span onClick={() => navigate("/register")}>Register here</span>
      </p>
    </div>
  );
};

export default Login;
