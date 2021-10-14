import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import getRxcui from "../apifiles/RxcuiApi.js"
import getInteraction from "../apifiles/InteractionApi.js";

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

    try {
      const response = await getRxcui(MedOne);
      const response2 = await getRxcui(MedTwo)
      // console.log("Variable Check 2: " + MedOne);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const drug1  = await response.json();
      const drug2 = await response2.json();

      const drug1name = drug1.drugGroup.name
      const drug2name = drug2.drugGroup.name 

      const drugarray1 = drug1.drugGroup.conceptGroup.length-1
      const drugarray2 = drug2.drugGroup.conceptGroup.length-1

      console.log(drugarray1)
      console.log(drugarray2)

      const drug1num = drug1.drugGroup.conceptGroup[drugarray1].conceptProperties[0].rxcui 
      const drug2num = drug2.drugGroup.conceptGroup[drugarray2].conceptProperties[0].rxcui 

      console.log("The RXCUI number for " + drug1name + " is: " + drug1num);
      console.log("The RXCUI number for " + drug2name + " is: " + drug2num);

      const interactionCheck = await getInteraction(drug1num, drug2num)
      const intResponse = await interactionCheck.json();

      const exists = JSON.stringify(intResponse).includes("DrugBank is intended for educational and scientific research purposes only and you expressly acknowledge and agree that use of DrugBank is at your sole risk.");
      console.log(exists)
    
      // console.log(description)
      if (exists == false) {
        alert("No negative interactions found!")
      } else{
        const description =  intResponse.fullInteractionTypeGroup[0].fullInteractionType[0].interactionPair[0].description
        alert(description + " Consult a medical professional.")
      }
      
      // Clear comparison Form
      setMedicationOne('');
      setMedicationTwo('');
      
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
        <div className="row">
          <div
            className="col-lg-12 text-center p-3"
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

            <h3>Check Interactions between Medications</h3>

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

              </Form.Group>
              {/* End of Mediation 2 to Compare Form */}

              <button className="btn btn-outline-info mb-2 mt-2" type="submit">
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

      <div className="container-fluid">
        <div className="row">
          <div
            className="col-lg-12 text-center pt-3 pb-4"
            style={{ backgroundColor: "#A2C4C9" }}
          >
            <p>{ alert }</p>
          </div>
        </div>
      </div>


    </main>
  );
}
// End of About()