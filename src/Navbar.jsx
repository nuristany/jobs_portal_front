import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <h1>Admin Panel</h1>
        <ul>
          <NavLink to="/login">
            <li>Login</li>
          </NavLink>
          <NavLink to ="/">
            <li>Jobs</li>
          </NavLink>
          <NavLink to ="/register">
            <li>Register</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
