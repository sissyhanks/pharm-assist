import React, { useState } from 'react';
import { createUser } from '../utils/API';


export default function SignUp() {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ username, setUserName ] = useState('');




  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }

    try {
      const response = await createUser(firstName, lastName, email, password, username);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { token, user } = await response.json();
      console.log(user);
      // Auth.login(token);
    } catch (err) {
      console.error(err);
      // setShowAlert(true);
    }

    // setUserFormData({
    //   email: '', username: '',  password: '', firstName: '', lastName: ''
    // });
  };

  return (
    <div className="container">
      <h3>Sign Up</h3>
    <form onSubmit={handleFormSubmit} className="row g-3">
      <div className="col-md-12">
        <label for="inputEmail4" className="form-label">Email</label>
        <input type="email"  className="form-control" id="inputEmail4" onChange={(e) => setEmail(e.target.value)} value={email} />
      </div>

      <div className="col-6">
        <label for="inputUsername" className="form-label">Username</label>
        <input type="text" className="form-control" id="inputUsername" placeholder="Username" onChange={(e) => setUserName(e.target.value)} value={username}/>
      </div>

      <div className="col-md-6">
        <label for="inputPassword" className="form-label">Password</label>
        <input type="password" className="form-control" id="inputPassword4" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
      </div>
     
      <div className="col-6">
        <label for="inputFName" className="form-label">First name</label>
        <input type="text" className="form-control" id="inputFName" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} value={firstName}/>
      </div>
      <div className="col-md-6">
        <label for="inputLName" className="form-label">Last Name</label>
        <input type="text" className="form-control" id="inputLName" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} value={lastName}/>
      </div>
    
      
      <div className="col-12">
        <button type="submit" className="btn btn-primary">Sign in</button>
      </div>
    </form>
    
  </div>
  );
}