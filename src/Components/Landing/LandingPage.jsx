import React from "react";
import { Link } from "react-router-dom";

import "./LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <div className="container">
        <h1>Welcome</h1>

        <div className="links">
          <Link to="/user-login" className="inner_links">
            User Login
          </Link>
          <Link to="/admin-login" className="inner_links">
            Admin Login
          </Link>
          <Link to="/super-admin-login" className="inner_links">
            Super Admin Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
