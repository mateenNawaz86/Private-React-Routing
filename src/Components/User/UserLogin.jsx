import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { Link } from "react-router-dom";

import "./LoginStyling.css";

const UserLogin = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredPsw, setEnteredPsw] = useState("");

  const userData = [
    {
      title: "User Login",
      UserName: "Username",
      userPsw: "Password",
      btn: "User Login",
    },
  ];

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const pswChangeHandler = (event) => {
    setEnteredPsw(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredName, enteredPsw);

    setEnteredName("");
    setEnteredPsw("");
  };

  return (
    <>
      {userData.map((items, index) => {
        return (
          <Card key={index}>
            <form onSubmit={submitHandler} className="login__form">
              <h1>{items.title}</h1>
              <div className="form_control">
                <label htmlFor="username">{items.UserName}</label>
                <div className="form-controls">
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
                <div className="form-controls">
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

              <Link to="/user-response">
                <Button type="submit">{items.btn}</Button>
              </Link>
            </form>
          </Card>
        );
      })}
    </>
  );
};

export default UserLogin;
