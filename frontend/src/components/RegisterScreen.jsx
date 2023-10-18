import React from "react";
import "../styles/RegisterScreen.css";
import axios from "axios";
import { useState } from "react";

const RegisterScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");

  function sendData(e) {
    e.preventDefault(); // stops page from refreshing when form is submitted

    const newMember = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
    };
    console.log(newMember); // change this part to send data to server or API using Axios or fetch

    axios
      .post("http://localhost:8070/food/addFood", newMember)
      .then(() => {
        alert("Ticket added successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  }
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
};

export default RegisterScreen;
