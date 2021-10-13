import React from 'react';
import SampleHeader from './components/SampleHeader';
import Navbar from "./components/Navbar";
import About from "./components/About";
import MedList from "./components/MedList";
import SignUp from "./components/SignUp";
import {
  BrowserRouter as 
  Router,
  Switch,
  Route,
} from "react-router-dom";

// bootstrap
import "./styles/bootstrap.min.css";

// needed to print pdf
import ReactToPrint from "react-to-print";

//styling used for Printing
import "./styles/PrintingStyles.css"

//styling used for App
import "./styles/App.css"

// Main App component
class ComponentToPrint extends React.Component {
    render() {
      return (
        <div>
          <SampleHeader />
        </div>
      );
  }
}

// This button needed to print
class PButton extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => <button>Print this out!</button>}
          content={() => this.componentRef}
        />
        <ComponentToPrint ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}
// export default PButton;

// App is called from src/index.js
export default function App() {
  return (
    <main>
      <Router>
        <Navbar />

        <Switch>

{/* XXXX Temporarily changed this route to check operation  */}
          {/* <Route exact path="/"> */}
            {/* <About /> */}
          {/* </Route> */}
          <Route exact path="/" component={ About } />

          <Route exact path="/sign-up">
            <SignUp />
          </Route>

          <Route exact path="/med-list">
            <MedList />
          </Route>

        </Switch>

      </Router>
    </main>
  );
}
