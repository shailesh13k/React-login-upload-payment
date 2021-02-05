import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { API_BASE_URL, ACCESS_TOKEN_NAME } from "../constants/apiConstants";
import { withRouter } from "react-router-dom";

function LoginForm(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
    successMessage: null,
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    const payload = {
      email: state.email,
      password: state.password,
    };
    axios
      .post(API_BASE_URL + "/api/auth/signin", payload)
      .then(function (response) {
        if (response.status === 200) {
          setState((prevState) => ({
            ...prevState,
            successMessage: "Login successful. Redirecting to home page..",
          }));
          localStorage.setItem(ACCESS_TOKEN_NAME, response.data.token);
          redirectToHome();
          props.showError(null);
        } else if (response.code === 204) {
          props.showError("Username and password do not match");
        } else {
          props.showError("Username does not exists");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const redirectToHome = () => {
    props.updateTitle("home");
    props.history.push("/home");
  };
  const redirectToRegister = () => {
    props.history.push("/register");
    props.updateTitle("Register");
  };
  return (
    <main id="main">
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <ol>
            <li>
              <a href="/">Home</a>
            </li>
            <li>Login</li>
          </ol>
        </div>
      </section>
      <section className="inner-page">
        <div className="container">
          <div className="form-login">
            <h1 className="fw-light">Login Form</h1>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={state.email}
                  onChange={handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={state.password}
                  onChange={handleChange}
                />
              </div>
              <div className="form-check"></div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmitClick}
              >
                Submit
              </button>
            </form>
            <div
              className="alert alert-success mt-2"
              style={{ display: state.successMessage ? "block" : "none" }}
              role="alert"
            >
              {state.successMessage}
            </div>
            <div className="registerMessage">
              <span>Dont have an account? </span>
              <span className="loginText" onClick={() => redirectToRegister()}>
                Register
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default withRouter(LoginForm);
