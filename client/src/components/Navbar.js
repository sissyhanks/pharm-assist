

import React from "react";

export default function Navbar() {
  return (
    <div class="container">
    <nav class="navbar navbar-light style="background-color: #20c997; ">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Pharm-Assist</a>
          <form class="d-flex">
            <input class="form-control me-2" type="user" placeholder="Username" aria-label="Username">
            <input class="form-control me-2" type="password" placeholder="Password" aria-label="Password">
            <button class="btn btn-outline-success" type="submit">Login</button>
          </form>
        </div>
      </nav>
    </div>
  );
}