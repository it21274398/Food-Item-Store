import React from "react";
import "../styles/LoginScreen.css";

const LoginScreen = () => {
  return (
    <div class="container" id="container">
      <div class="form-container sign-in-container">
        <form className="loginform">
          <h1 className="form-name">Cook</h1>
          <p className="login-name">Login</p>
          <input
            type="email"
            placeholder="Email"
            className="login-input-boxe"
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            className="login-input-boxe"
          />
          <br />
          <p className="please-enter-a-password">
            <b>Please entera password?</b>
          </p>
          <br />
          <br />
          <button className="singin-button">Sign In</button>
          <br />
          <p className="incorectusername">
            <b>Your password or username is incorrect</b>
          </p>
        </form>
        <center>
          <label className="login-registerpage-link-lebel">
            Don't have an account ?
          </label>

          <a href="/registerScreen" className="Login-page-link">
            Create Account
          </a>
        </center>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default LoginScreen;
