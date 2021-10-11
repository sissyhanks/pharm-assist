import React from "react";
import { Link } from "react-router-dom";

export default function About() {
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
            <form>
              <input className="form-control mt-3 " type="text" placeholder="Medication Name" aria-label="Username"/>
              <input className="form-control mt-3 mb-3" type="text" placeholder="Medication Name" aria-label="Password"/>
              <button className="btn btn-outline-info" type="submit">Compare</button>
            </form>
          </div>
          <div className="col-md-6 pt-5">
            { /* Widget goes here */ }
          </div>
        </div>
      </div>
    </main>
  );
}