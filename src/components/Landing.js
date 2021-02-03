import React, { useState } from "react";
import Banner from "./Banner";
import logo from './Banner2.png';
import AlertComponent from "./AlertComponent";
console.log(logo);
const Landing = () => {  
   const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);

  return (
    <div>
    <img src={logo} alt="Logo" />
     <Banner />
     <div className="container">
     <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}/>
     </div>
    </div>
  );
};

export default Landing;
