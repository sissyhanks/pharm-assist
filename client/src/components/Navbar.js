
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import axios from "axios";

export default function Navbar() {

//username tab password login at the extreme right of navbar
const [ username, setUserName ] = useState('');
const [ password, setPassword ] = useState('');


//event handling for login button
const handleFormSubmit = async (event) => {
    event.preventDefault();

      try {
      const registerData = {
                username, password,
      };

      await axios.post(
        "http://localhost:3001/api/users/register",
        registerData
      );
      
    } 
	catch (err) {
      console.error(err);
    }
  };
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
		  
          <form onSubmit={handleFormSubmit} className="d-flex">
		  
		  <input type="text" className="form-control" id="inputUsername" placeholder="Username" onChange={(e) => setUserName(e.target.value)} value={username}/>
		  <input type="password" className="form-control" id="inputPassword4" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
            
            <button className="btn btn-outline-success" type="submit" >Login</button>
          </form>
		  
        </div>
      </nav>
  );
}
