import React from "react";
import { useState } from "react";
import Header from "./Header";
import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState({
    name: "",
    age: "",
    mobileNo: "",
    address: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleName = (e) => {
    setName(e.target.value);
    setErrorMessage({ ...errorMessage, name: "" });
  };

  const handleAge = (e) => {
    setAge(e.target.value);
    setErrorMessage({ ...errorMessage, age: "" });
  };

  const handleMobileNo = (e) => {
    setMobileNo(e.target.value);
    setErrorMessage({ ...errorMessage, mobileNo: "" });
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrorMessage({ ...errorMessage, email: "" });
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrorMessage({ ...errorMessage, password: "" });
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setErrorMessage({ ...errorMessage, confirmPassword: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name?.length < 8) {
      setErrorMessage({
        ...errorMessage,
        name: "Name must be greater than 8 ",
      });
    }
    if (name?.length === 0) {
      setErrorMessage({ ...errorMessage, name: "field cannot be empty " });
    }
    if (age < 18) {
      setErrorMessage({ ...errorMessage, age: "Age must be 18 & above " });
    }

    if (mobileNo?.length < 10) {
      setErrorMessage({
        ...errorMessage,
        mobileNo: "Mobile No. must be of 10 Digit ",
      });
      console.log(errorMessage.mobileNo);
    }

    let flag = false;
    if (email.toLowerCase().includes("@gmail.com")) {
      flag = true;
    }
    if (flag === false) {
      setErrorMessage({ ...errorMessage, email: "Enter valid Email " });
    }

    if (password.length < 8) {
      setErrorMessage({
        ...errorMessage,
        password: "Your password must be at least 8 characters",
      });
    }
    if (password.search(/^(?=.*[a-z]).*$/) < 0) {
      setErrorMessage({
        ...errorMessage,
        password: "Your password must contain at least one small letter.",
      });
    }
    if (password.search(/^(?=.*[0-9]).*$/) < 0) {
      setErrorMessage({
        ...errorMessage,
        password: "Your password must contain at least one digit.",
      });
    }
    if (password.search(/^(?=.*[A-Z]).*$/) < 0) {
      setErrorMessage({
        ...errorMessage,
        password: "Your password must contain at least one Capital letter.",
      });
    }
    if (password !== confirmPassword) {
      setErrorMessage({
        ...errorMessage,
        password: "Password and confirm password must be same",
      });
      setErrorMessage({
        ...errorMessage,
        confirmPassword: "Password and confirm password must be same",
      });
    }
  };

  return (
    <div className="register">
      <h1 className="heading">Register yourself here</h1>
      <div>
        <form className="register_form">
          <div className="flex">
            <label>Name </label>{" "}
            <input
              className="name"
              type="text"
              value={name}
              onChange={(e) => {
                handleName(e);
              }}
            />
          </div>
          <div className="errormsg">{errorMessage.name}</div>
          <br />
          <div className="flex">
            <label>Age </label>{" "}
            <input
              className="age"
              type="text"
              value={age}
              onChange={(e) => {
                handleAge(e);
              }}
            />
          </div>
          <div className="errormsg">{errorMessage.age}</div>
          <br />
          <div className="flex">
            <label>Mobile No. </label>
            <input
              className="mobileNo"
              type="number"
              maxLength="10"
              value={mobileNo}
              onChange={(e) => {
                handleMobileNo(e);
              }}
            />
          </div>
          <div className="errormsg">{errorMessage.mobileNo}</div>
          <br />
          <div className="flex">
            <label>Email Id </label>
            <input
              className="emailId"
              type="email"
              value={email}
              onChange={(e) => {
                handleEmail(e);
              }}
            />
          </div>
          <div className="errormsg">{errorMessage.email}</div>
          <br />
          <div className="flex">
            <label>Address </label>
            <input
              className="address"
              type="text"
              maxLength="50"
              value={address}
              onChange={(e) => {
                handleAddress(e);
              }}
            />
          </div>
          <br />
          <div className="flex">
            <label>Password </label>
            <input
              className="password"
              type="password"
              value={password}
              onChange={(e) => {
                handlePassword(e);
              }}
            />
          </div>
          <div className="errormsg">{errorMessage.password}</div>
          <br />
          <div className="flex">
            <label>Confirm Password </label>
            <input
              className="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => {
                handleConfirmPassword(e);
              }}
            />
          </div>
          <div className="errormsg">{errorMessage.confirmPassword}</div>
          <br />
          <button className="submit" value="Submit" onClick={handleSubmit}>
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
