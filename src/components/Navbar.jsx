import React from "react";

const Navbar = () => {
  return(
    <nav className="navbar">
      <div className="navbar-center">
        <a href="/" className="nav-link">Home</a>
        <a href="/about" className="nav-link">About</a>
        <a href="/services" className="nav-link">Services</a>
        <a href="/contact" className="nav-link">Contact</a>
      </div>
      <button className="nav-button">Sign Up</button>
    </nav>
  )
}

export default Navbar;
