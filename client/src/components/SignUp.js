
import React from "react";

export default function SignUp() {
  return (
    <div className="container">
      <h3>Sign Up</h3>
    <form className="row g-3">
      <div className="col-md-12">
        <label for="inputEmail4" className="form-label">Email</label>
        <input type="email" className="form-control" id="inputEmail4"/>
      </div>

      <div className="col-6">
        <label for="inputUsername" className="form-label">Username</label>
        <input type="text" className="form-control" id="inputUsername" placeholder="Username"/>
      </div>

      <div className="col-md-6">
        <label for="inputPassword" className="form-label">Password</label>
        <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
      </div>
     
      <div className="col-6">
        <label for="inputFName" className="form-label">First name</label>
        <input type="text" className="form-control" id="inputFName" placeholder="First Name"/>
      </div>
      <div className="col-md-6">
        <label for="inputLName" className="form-label">Last Name</label>
        <input type="text" className="form-control" id="inputLName" placeholder="Last Name"/>
      </div>
    
      
      <div className="col-12">
        <button type="submit" className="btn btn-primary">Sign in</button>
      </div>
    </form>
    
  </div>
  );
}