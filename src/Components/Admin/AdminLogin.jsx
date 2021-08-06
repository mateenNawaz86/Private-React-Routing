import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import Card from "../UI/Card";

import "../User/LoginStyling.css";

const AdminForm = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredPsw, setEnteredPsw] = useState("");
  const [isValid, setIsValid] = useState(true);

  const adminData = [
    {
      title: "Admin Login",
      UserName: "Username",
      userPsw: "Password",
      btn: "Admin Login",
    },
  ];

  const nameChangeHandler = (event) => {
    if (event.target.value.trim().length > 3) {
      setIsValid(true);
    }
    setEnteredName(event.target.value);
  };

  const pswChangeHandler = (event) => {
    if (event.target.value.trim().length > 6) {
      setIsValid(true);
    }

    setEnteredPsw(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim().length === 0 || enteredName.trim().length < 3) {
      setIsValid(false);
      return;
    }

    if (enteredPsw.trim().length === 0 || enteredPsw.trim().length < 6) {
      setIsValid(false);
      return;
    }
    setEnteredName("");
    setEnteredPsw("");
  };

  return (
    <>
      {adminData.map((items, index) => {
        return (
          <Card key={index}>
            <form onSubmit={submitHandler} className="login__form">
              <h1>{items.title}</h1>
              <div className="form_control">
                <label htmlFor="username">{items.UserName}</label>
                <div className={`form-controls ${!isValid ? "invalid" : ""}`}>
                  <input
                    type="text"
                    placeholder="username"
                    id="username"
                    autoComplete="off"
                    onChange={nameChangeHandler}
                    value={enteredName}
                  />
                </div>
              </div>

              <div className="form_control">
                <label htmlFor="password">{items.userPsw}</label>
                <div className={`form-controls ${!isValid ? "invalid" : ""}`}>
                  <input
                    type="password"
                    placeholder="password"
                    id="password"
                    autoComplete="off"
                    onChange={pswChangeHandler}
                    value={enteredPsw}
                  />
                </div>
              </div>

              <Link to="/admin-response">
                <Button type="submit">{items.btn}</Button>
              </Link>
            </form>
          </Card>
        );
      })}
    </>
  );
};

export default AdminForm;
