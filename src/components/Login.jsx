import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { CiUnlock } from "react-icons/ci";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    setLoading(true);

    try {
      const res = await axios.post("https://web-production-262c.up.railway.app/core/login/", {
        email,
        password,
      });

      const response = res.data;
      localStorage.setItem("access", response.access);
      navigate("/"); // Redirect to another page after successful login
    } catch (error) {
      setError("Invalid credentials or server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <CiUser className="user-icon" />
              <input
                type="email"
                name="email"
                placeholder="Username or Email"
                required
              />
            </div>
            <div className="input-box">
              <CiUnlock className="user-icon" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="login-button">
              <button type="submit" disabled={loading}>
                {loading ? "Loading..." : "Login"}
              </button>
            </div>
            {error && <p className="error">{error}</p>}
          </form>
          <div className="signup-title">
            <p>Don't have an account?</p>
          </div>
          <div className="signup-button">
            <NavLink to="/signup">
              <button>Sign Up</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
