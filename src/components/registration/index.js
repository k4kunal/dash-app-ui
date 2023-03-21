import React from "react";
import {Link} from 'react-router-dom';
import "./index.css";

function Registration() {
  return (
    <div className="register-page">
      <div className="form">
      <form className="login-form">
          <input type="text" placeholder="name" />
          <input type="password" placeholder="password" />
          <input type="text" placeholder="email address" />
          <button>create</button>
          <p className="message">
            Already registered? <Link to="/login">Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Registration;
