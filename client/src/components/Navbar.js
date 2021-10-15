
import React, { useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import AuthContext from "../context/AuthContext.js";
import { Link } from 'react-router-dom';

import axios from "axios";

export default function Navbar() {

//username tab password login at the extreme right of navbar
const [ email, setEmail ] = useState('');
const [ password, setPassword ] = useState('');

const { loggedIn } = useContext(AuthContext);
const { getLoggedIn } = useContext(AuthContext);
const history = useHistory();

//event handling for login button
const handleFormSubmit = async (event) => {
    event.preventDefault();

      try {
      const registerData = {
                email, password,
      };

      await axios.post(
        "http://localhost:3001/api/users/login",
        registerData,
        { withCredentials: true }
      );
      await getLoggedIn();
      history.push("/med-list");    
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogOut = async (event) => {
      await axios.get(
      "http://localhost:3001/api/users/logout"
    );
    await getLoggedIn();
    history.push("/");
  }

  return (
    <nav className="navbar navbar-expand-lg App-header">
      <Link className="navbar-brand" to="/"><strong>Pharm-Assist</strong></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {loggedIn === false && (
          <li className="nav-item">
            <Link className="navbar-brand" to="/sign-up">Sign Up</Link>
          </li>
          )}
          {loggedIn === true && (
          <li className="nav-item">
            <Link className="navbar-brand" to="/med-list">Med List</Link>
          </li>
          )}
        </ul>
          {loggedIn === false && (
          <form onSubmit={handleFormSubmit} className="d-flex">
		  
		  <input type="text" className="form-control" id="inputUsername" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
		  <input type="password" className="form-control" id="inputPassword4" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
            
            <button className="btn btn-outline-success" type="submit" >Login</button>
          </form>
          )}
          {loggedIn === true && (
          <button onClick={handleLogOut} className="btn btn-outline-success" type="submit">Log Out</button>
          )}
        </div>
      </nav>
  );
}
