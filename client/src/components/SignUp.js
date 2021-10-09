
import React from "react";

export default function SignUp() {
  return (
    <div class="container">
      <h3>Sign Up</h3>
    <form class="row g-3">
      <div class="col-md-12">
        <label for="inputEmail4" class="form-label">Email</label>
        <input type="email" class="form-control" id="inputEmail4">
      </div>

      <div class="col-6">
        <label for="inputUsername" class="form-label">Username</label>
        <input type="text" class="form-control" id="inputUsername" placeholder="Username">
      </div>

      <div class="col-md-6">
        <label for="inputPassword" class="form-label">Password</label>
        <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
      </div>
     
      <div class="col-6">
        <label for="inputFName" class="form-label">First name</label>
        <input type="text" class="form-control" id="inputFName" placeholder="First Name">
      </div>
      <div class="col-md-6">
        <label for="inputLName" class="form-label">Last Name</label>
        <input type="text" class="form-control" id="inputLName" placeholder="Last Name">
      </div>
    
      
      <div class="col-12">
        <button type="submit" class="btn btn-primary">Sign in</button>
      </div>
    </form>
    
  </div>
  );
}