

import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg App-header">
        <Link className="navbar-brand" to="/"><strong>Pharm-Assist</strong></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="navbar-brand" to="/sign-up">Sign Up</Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand" to="/med-list">Med List</Link>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="user" placeholder="Username" aria-label="Username"/>
            <input className="form-control me-2" type="password" placeholder="Password" aria-label="Password"/>
            <button className="btn btn-outline-success" type="submit">Login</button>
          </form>
        </div>
      </nav>
  );
}

