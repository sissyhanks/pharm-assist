import React from "react";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import getInteraction from '../ApiFiles/App.js';


  // create method to search for books and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {


      const response = await getInteraction(searchInput1, searchInput2);

      if (!response.ok) {
        throw new Error('please try again!');
      }

      // action on response

    } catch (err) {
      console.error(err);
    }
  };


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
            <Form onSubmit={handleFormSubmit}>

              <Form.Group>
                <Form.Label htmlFor="Medication 1" className="form-control mt-3"></Form.Label>
                {/* <Form.Control id="Med1" name="SearchInput1" type="text" value={this.state.name} onChange={(e) => setSearchInput(e.target.value)} /> */}
                <Form.Control id="Med1" name="SearchInput1" type="text" value={this.state.name} />
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="Medication 2" className="form-control mt-3 mb3"></Form.Label>
                <Form.Control id="Med2" name="SearchInput2" type="text" value={this.state.name} onChange={(e) => setSearchInput(e.target.value)} />
              </Form.Group>

              <button className="btn btn-outline-info" type="submit">Compare</button>
            </Form>

          </div>

          <div className="col-md-6 pt-5">
            { /* Widget goes here */ }

            <div id="goodrx_search_widget"> </div>
                        {/* <script>
                            var _grxdn = "lipitor";
                            (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
                            g.src="//s3.amazonaws.com/assets.goodrx.com/static/widgets/search.min.js";
                                s.parentNode.insertBefore(g,s)}(document,"script"));
                        </script> */}
          </div>
        </div>
      </div>
    </main>
  );
}