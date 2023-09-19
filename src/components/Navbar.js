import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-success navbar-expand-sm">
        <div className="container">
          <Link to="/" className="navbar-brand">
          
            <i className="far fa-comments" /> Message
            
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/list" className="nav-link">
                  Products
                </Link>
              </li>
            </ul>
           
          </div>
        </div>
      </nav>
    </div>
  );
}
