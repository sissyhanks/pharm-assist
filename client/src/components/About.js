import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Form } from 'react-bootstrap';
import getInteraction from '../ApiFiles/API.js';


export default function About() {
  const [medicationOne, setMedicationOne] = useState('');
  const [medicationTwo, setMedicationTwo] = useState('');
  const [showAlert, setShowAlert] = useState(false);



    const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {

    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setMedicationOne('');
    setMedicationTwo('');
  };

  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-md-12 m-5">
            <h1>Hello and welcome to Pharm-Assist!</h1>
            <p>Pharm-Assist is a visual directory to help you recognize and organize your medications.</p>
            <ul>
              <li>Do you take a variety of medications every day?</li>
              <li>Do you want an easily accessible, printable list to share with your providers?</li>
              <li>Are you concerned that your medications will negatively interact with each other? </li>
            </ul>
            <p>It provides your daily medication schedule and can alert you when you may need to contact a professional about medication interaction.</p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div class="row">
          <div class="col-lg-12 text-center p-3" style={{backgroundColor: "#A2C4C9"}}>
            <Link to="/sign-up">Sign up</Link> to customize your medication schedule!
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 pt-5">
            <h2>Check Interactions between Medications</h2>
            <Form onSubmit={handleFormSubmit}>
              <Form.Group>
                <Form.Label htmlFor='medicationOne'></Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Medication 1'
                  name='medicationOne'
          onChange={(e) => {
            setMedicationOne(e.target.value);
          }}
          value={medicationOne}
                  required
                />
                <Form.Control.Feedback type='invalid'>Please enter a medication name.</Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor='medicationTwo'></Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Medication 2'
                  name='medicationTwo'
          onChange={(e) => {
            setMedicationTwo(e.target.value);
          }}
          value={medicationTwo}
                  required
                />
                <Form.Control.Feedback type='invalid'>Please enter a medication name.</Form.Control.Feedback>
              </Form.Group>

              <button className="btn btn-outline-info" type="submit">Compare</button>
            </Form>

          </div>

          <div className="col-md-6 pt-5">
          <div id="goodrx_search_widget"> </div>
          </div>
        </div>
      </div>
    </main>
  );
}