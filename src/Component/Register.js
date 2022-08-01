import React from "react";
import { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfPassword] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleMobileNo = (e) => {
    setMobileNo(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name?.length < 8) {
      console.log("Name must be greater than 8");
    }
    if (age?.length < 18) {
      console.log("Age must be 18 & above");
    }
    if (address?.length === 0) {
      console.log("Enter Address");
    }

    if (mobileNo?.length < 10) {
      console.log("Mobile No. must be of 10 Digit");
    }

    let flag = false;
    if (email.toLowerCase().includes("@gamil.com")) {
      flag = true;
    }
    if (flag !== true) {
      console.log("Enter valid Email ");
    }

    if (password.length < 8) {
      console.log("Your password must be at least 8 characters");
    }
    if (password.search(/^(?=.*[a-z]).*$/) < 0) {
      console.log("Your password must contain at least one letter.");
    }
    if (password.search(/^(?=.*[0-9]).*$/) < 0) {
      console.log("Your password must contain at least one digit.");
    }
    if (password.search(/^(?=.*[A-Z]).*$/) < 0) {
      console.log("Your password must contain at least one letter.");
    }
    if (password !== confirmPassword) {
      console.log("Password and confirm password must be same");
    }
  };

  return (
    <div>
      register
      <div>
        <form className="register_form">
          <label>Name </label>{" "}
          <input
            id="name"
            type="text"
            value={name}
            // required
            onChange={(e) => {
              handleName(e);
            }}
          />
          <br />
          <label>Age </label>{" "}
          <input
            id="age"
            type="text"
            value={age}
            // required
            onChange={(e) => {
              handleAge(e);
            }}
          />
          <br />
          <label>Mobile No. </label>
          <input
            id="mobileNo"
            type="number"
            maxLength="10"
            value={mobileNo}
            // required
            onChange={(e) => {
              handleMobileNo(e);
            }}
          />
          <br />
          <label>Email Id </label>
          <input
            id="emailId"
            type="email"
            value={email}
            onChange={(e) => {
              handleEmail(e);
            }}
          />
          <br />
          <label>Address </label>
          <input
            id="address"
            type="text"
            maxLength="50"
            value={address}
            onChange={(e) => {
              handleAddress(e);
            }}
          />
          <br />
          <label>Password </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => {
              handlePassword(e);
            }}
          />
          <br />
          <label>Confirm Password </label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => {
              handleConfirmPassword(e);
            }}
          />
          <br />
          <button
            id="submit"
            className="handleSubmit"
            value="Submit"
            onClick={handleSubmit}
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
