import React from 'react';
import SampleHeader from './components/SampleHeader';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Medlist from "./components/Medlist";
import Signup from "./components/SignUp";


// needed to print pdf
import ReactToPrint from "react-to-print";

//styling used for Printing
import "./styles/PrintingStyles.css"

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
export default PButton;

export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Medlist />
      <Skills />
      <Signup />
    </main>
  );
}