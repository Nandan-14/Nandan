import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Call logout when component mounts
    logout();
    // Redirect to login page after logout
    navigate("/login");
  }, [logout, navigate]);

  return (
    <div className="logout-container">
      <h2 className="logout-title">Logging you out...</h2>
    </div>
  );
};

export default Logout;
