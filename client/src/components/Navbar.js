

import React from "react";

export default function Navbar() {
  return (
    <div className="container">
    <nav className="navbar navbar-light">
        <div className="container-fluid">
            {/* <className="navbar-brand" href="#">Pharm-Assist</a> */}
          <form className="d-flex">
            <input className="form-control me-2" type="user" placeholder="Username" aria-label="Username"/>
            <input className="form-control me-2" type="password" placeholder="Password" aria-label="Password"/>
            <button className="btn btn-outline-success" type="submit">Login</button>
          </form>
        </div>
      </nav>
    </div>
  );
}