import React from "react";
function Header() {
  return (
    <header id="header" className="fixed-top header-inner-pages">
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto">
          <a href="/">Uway Booking System</a>
        </h1>
        {/* Uncomment below if you prefer to use an image logo */}
        {/* <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
        <nav className="nav-menu d-none d-lg-block">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
          </ul>
        </nav>
        {/* .nav-menu */}
        <a href="#about" className="get-started-btn scrollto">
          Get Started
        </a>
      </div>
    </header>
  );
}
export default Header;
