import React from "react";
import { Link } from "react-router-dom";
import '../style/navbar.scss'

export default function NavBar() {
  return (
    <div className="nav-links">
      <div className="nav-link">
        <Link className="nav-link-item" to="/">HOME</Link>
      </div>
      <div className="nav-link">
        <Link className="nav-link-item" to="/about">ABOUT</Link>
      </div>
      <div className="nav-link">
        <Link className="nav-link-item" to="/contact">CONTACT</Link>
      </div>
      <div className="nav-link">
        <Link className="nav-link-item" to="/store">STORE</Link>
      </div>
    </div>
  );
}
