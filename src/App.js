import React, { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import Home from "./components/Home";
import PrivateRoute from "./utils/PrivateRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Header from "./components/Header";
import AlertComponent from "./components/AlertComponent";
function App() {
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);
  return (
    <div >
      <Header />
      <div className="container">
      <Router>
        <Switch>
          <Route path="/" exact={true}>
            <Landing />
          </Route>
          <Route path="/register">
            <RegistrationForm
              showError={updateErrorMessage}
              updateTitle={updateTitle}
            />
          </Route>
          <Route path="/login">
            <LoginForm
              showError={updateErrorMessage}
              updateTitle={updateTitle}
            />
          </Route>
          <PrivateRoute path="/home">
            <Home />
          </PrivateRoute>
          </Switch>
         
        <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}/>
       </Router>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
