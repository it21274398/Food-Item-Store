import React from "react";
import "../styles/RegisterScreen.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SendNewMemberDetails() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");
  const sendData = (e) => {
    e.preventDefault();
    axios
      .post(
        "mongodb+srv://linukalolitha:ATlinuka2002@fooditemcart.lldaazf.mongodb.net/FoodStore",
        {
          firstName,
          lastName,
          email,
          phoneNumber,
          password,
          conformPassword,
        }
      )
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div class="container">
      <div class="form-container sign-in-container">
        <form className="register-form" onSubmit={sendData}>
          <h1 className="form-name">Cook</h1>
          <p className="register-name">Register</p>
          <div className="column-style">
            <div className="first-form-column">
              <input
                required
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                className="input-boxs"
              />
              <br />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail"
                className="input-boxs"
              />
              <br />
              <input
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="input-boxs"
              />
              <br />
            </div>
            <div className="second-form-column">
              <input
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="Last Name"
                className="input-boxs"
              />
              <br />
              <input
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="text"
                placeholder="Phone Number"
                className="input-boxs"
              />
              <br />
              <input
                required
                value={conformPassword}
                onChange={(e) => setConformPassword(e.target.value)}
                type="password"
                placeholder="Confirm Password"
                className="input-boxs"
              />
              <br />
            </div>
          </div>
          <button type="submit" className="register-button">
            Sign In
          </button>
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
}
export default SendNewMemberDetails;
