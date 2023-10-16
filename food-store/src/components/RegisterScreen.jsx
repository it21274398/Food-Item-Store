import React from "react";
import "../styles/RegisterScreen.css";

const RegisterScreen = () => {
  return (
    <div class="container">
      <div class="form-container sign-in-container">
        <form className="register-form">
          <h1 className="form-name">Cook</h1>
          <p className="register-name">Register</p>
          <div className="column-style">
            <div className="first-form-column">
              <input
                type="text"
                placeholder="First Name"
                className="input-boxs"
              />
              <br />
              <input type="email" placeholder="E-mail" className="input-boxs" />
              <br />
              <input
                type="password"
                placeholder="Password"
                className="input-boxs"
              />
              <br />
            </div>
            <div className="second-form-column">
              <input
                type="text"
                placeholder="Last Name"
                className="input-boxs"
              />
              <br />
              <input
                type="text"
                placeholder="Phone Number"
                className="input-boxs"
              />
              <br />
              <input
                type="password"
                placeholder="Confirm Password"
                className="input-boxs"
              />
              <br />
            </div>
          </div>
          <button className="register-button">Sign In</button>
          <br />
        </form>
        <center>
          <label className="register-login-link-lebel">
            Always have an account ?
          </label>
          <a href="/" className="Login-page-link">
            Login
          </a>
          <br />
          <a href="/ItemcartScreen" className="Login-page-link">
            just puting to go item cart
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

export default RegisterScreen;
