import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { API_BASE_URL, ACCESS_TOKEN_NAME } from "../constants/apiConstants";
import { withRouter } from "react-router-dom";
function RegistrationForm(props) {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
    successMessage: null,
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const sendDetailsToServer = () => {
    //  alert(state.email.length && state.password.length);
    if (state.email.length && state.password.length) {
      props.showError(null);
      const payload = {
        firstName: state.firstname,
        lastName: state.lastname,
        mobile: state.mobile,
        email: state.email,
        password: state.password,
        userName: "username",
      };
      axios
        .post(API_BASE_URL + "/api/auth/signup", payload)
        .then(function (response) {
          if (response.status === 200) {
            setState((prevState) => ({
              ...prevState,
              successMessage:
                "Registration successful. Redirecting to home page..",
            }));
            localStorage.setItem(ACCESS_TOKEN_NAME, response.data.token);
            redirectToHome();
            props.showError(null);
          } else {
            props.showError("Some error ocurred");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      props.showError("Please enter valid username and password");
    }
  };
  const redirectToHome = () => {
    props.updateTitle("home");
    props.history.push("/");
  };
  const redirectToLogin = () => {
    props.updateTitle("login");
    props.history.push("/login");
  };
  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (state.password === state.confirmPassword) {
      sendDetailsToServer();
    } else {
      props.showError("Passwords do not match");
    }
  };
  return (
    <main id="main">
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <ol>
            <li>
              <a href="/">Home</a>
            </li>
            <li>Register</li>
          </ol>
        </div>
      </section>
      <section className="inner-page">
        <div className="container">
          <div className="form-login">
            <h1 className="fw-light">Register Form</h1>
            <div
              className="alert alert-success mt-2"
              style={{ display: state.successMessage ? "block" : "none" }}
              role="alert"
            >
              {state.successMessage}
            </div>
            <form>
              <div className="mb-2">
                <label htmlFor="exampleInputFirstname1" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  placeholder="Enter firstname"
                  value={state.firstname}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputFirstname1" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  placeholder="Enter lastname"
                  value={state.lastname}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputFirstname1" className="form-label">
                  Mobile
                </label>
                <input
                  type="mobile"
                  className="form-control"
                  id="mobile"
                  placeholder="Enter mobile"
                  value={state.mobile}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email Address
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
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  value={state.confirmPassword}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmitClick}
              >
                Register
              </button>
            </form>
            <div className="mt-2">
              <span>Already have an account? </span>
              <span className="loginText" onClick={() => redirectToLogin()}>
                Login here
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default withRouter(RegistrationForm);
