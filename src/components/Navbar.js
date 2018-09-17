import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
// import { logo } from "../assets/logo-g.png";

class Navbar extends Component {
  render() {
    return (
      <div className="gl-d-flex gl-flex-column gl-justify-flex-end fixed-top " >
        {/* <nav className="navbar navbar-expand-lg navbar-light "> */}
        <nav className="gl-navbar gl-navbar-inverse gl-d-flex gl-justify-flex-end " >
          <Link className="navbar-brand" to="">
            <img
              src="./assets/logo-g.png"
              width="150"
              height="auto"
              className="d-inline-block align-top"
              alt=""
            />
          </Link>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
          <div className="collapse navbar-collapse" id="navbarNav"> 
          <ul
            id="navbar-items-right"
            className="navbar-nav .gl-d-flex gl-flex-row gl-justify-flex-end"
          >
            <li className="nav-item active">
              <Link className="nav-link" to="/home">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/service">
                services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/engineeringTeams">
                Engineering Teams
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/operationsTeam">
                Operations Team
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/tools">
                Tools
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/launchSupport">
                Launch Support
              </Link>
            </li>
          </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
