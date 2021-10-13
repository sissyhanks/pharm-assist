import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import getRxcui from "../ApiFiles/RxcuiApi.js"


//XXXX Ref MERN SearchBooks.js line 8

// Called from src/app.js
export default function About() {
  // Create state to hold saved mediation information
  const [medicationOne, setMedicationOne] = useState("");
  const [medicationTwo, setMedicationTwo] = useState("");

  // Create state for an alert if compare button selected without meds
  const [showAlert, setShowAlert] = useState(false);

  // Create event handler for Compare Button
  const handleFormSubmit = async (event) => {
    
    event.preventDefault();
    // Compare button is working
    console.log("Compare Button Pressed");

    const MedOne = medicationOne;
    const MedTwo = medicationTwo;
    // MedOne and MedTwo are being assigned a value from the form
    console.log("The first med to compare is: " + MedOne);
    console.log("The second med to compare is: " + MedTwo);


// XXXX Not sure that we need this validity check
    // check if form has everything (as per react-bootstrap docs)
    // const form = event.currentTarget;
    //   if (form.checkValidity() === false) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //   }

    // try {
    // } catch (err) {
    //   console.error(err);
    //   setShowAlert(true);
    // }

    try {
      const response = await getRxcui(MedOne);
      console.log("Variable Check 2: " + MedOne);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const drugs  = await response.json();
      // API Call is working
      
      console.log("The RXCUI number for " + drugs.drugGroup.name + "is: " + drugs.drugGroup.conceptGroup[1].conceptProperties[0].rxcui );

// XXXX We need to clear the form when we are finished

    } catch (err) {
      console.error(err);
    }

  }; // End of handleFormSubmit

  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-md-12 m-5">
            <h1>Hello and welcome to Pharm-Assist!</h1>
            <p>
              Pharm-Assist is a visual directory to help you recognize and
              organize your medications.
            </p>
            <ul>
              <li>Do you take a variety of medications every day?</li>
              <li>
                Do you want an easily accessible, printable list to share with
                your providers?
              </li>
              <li>
                Are you concerned that your medications will negatively interact
                with each other?{" "}
              </li>
            </ul>
            <p>
              It provides your daily medication schedule and can alert you when
              you may need to contact a professional about medication
              interaction.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div class="row">
          <div
            class="col-lg-12 text-center p-3"
            style={{ backgroundColor: "#A2C4C9" }}
          >
            <Link to="/sign-up">Sign up</Link> to customize your medication
            schedule!
          </div>
        </div>
      </div>

      {/* Div Container that Holds the Mediation to Compare Form */}
      <div className="container">

        {/* div Row Holding Compare From and Good RX Widget */}
        <div className="row">

          {/* div Holding Two Medication Input Fields */}
          <div className="col-md-6 pt-5">

            <h2>Check Interactions between Medications</h2>

{/* See MERN SearchBooks.js line 86 */}
{/* handleFormSubmit is at line 18 */}
            {/* Medication to Compare Form */}
            <Form onSubmit={handleFormSubmit}>

              {/* Medication 1 to Compare */}
              <Form.Group>

                <Form.Label htmlFor="medicationOne"></Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Medication 1"
                  name="medicationOne"
                  onChange={(e) => {
                    setMedicationOne(e.target.value);
                  }}
                  value={medicationOne}
                  required
                />

{/* XXX Form.Control not needed if required */}
                {/* <Form.Control.Feedback type="invalid">
                  Please enter a medication name.
                </Form.Control.Feedback> */}

              </Form.Group>
              {/* End of Medication 1 to Compare */}

              {/* Medication 2 to Compare */}
              <Form.Group>
                <Form.Label htmlFor="medicationTwo"></Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Medication 2"
                  name="medicationTwo"
                  onChange={(e) => {
                    setMedicationTwo(e.target.value);
                  }}
                  value={medicationTwo}
                  required
                />

{/* XXX Form.Control not needed if required */}
                {/* <Form.Control.Feedback type="invalid">
                  Please enter a medication name.
                </Form.Control.Feedback> */}

              </Form.Group>
              {/* End of Mediation 2 to Compare Form */}

              <button className="btn btn-outline-info" type="submit">
                Compare
              </button>

            </Form>
            {/* End of Compare Med Form */}

          </div>
          {/* End of div Holding Two Medication Input Fields */}

          {/* Good RX Widget */}
          <div className="col-md-6 pt-5">
            <div id="goodrx_search_widget"> </div>
          </div>

        </div>
        {/* End of div Row Holding Compare From and Good RX Widget */}

      </div>
      {/* End of div Container that Holds the Medication to Compare Form */}

    </main>
  );
}
// End of About()
