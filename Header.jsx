import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import "./Header.css";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
   
  };

  return (
    <header className="header">
      {/* Logo */}
      <h2 className="logo">🚖 Ride Your Destination</h2>

      {/* Navigation */}
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          🏠 Home
        </NavLink>
        <NavLink to="/Services" className={({ isActive }) => (isActive ? "active" : "")}>
          🛠 Services
        </NavLink>
        <NavLink to="/Activity" className={({ isActive }) => (isActive ? "active" : "")}>
          📊 Activity
        </NavLink>
        {user && (
          <NavLink to="/Account" className={({ isActive }) => (isActive ? "active" : "")}>
            👤 Account
          </NavLink>
        )}
        <NavLink to="/Contact" className={({ isActive }) => (isActive ? "active" : "")}>
          ❓ Contact
        </NavLink>

        {/* Auth Controls */}
        {user ? (
          <>
            <span className="welcome">👋 {user.email}</span>
            <button onClick={handleLogout} className="button logout-btn">
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login">
              <button className="button">Login</button>
            </NavLink>
            </>
        )}

       
        <NavLink to="/Book">
          <button className="button book-btn">Book Now</button>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
