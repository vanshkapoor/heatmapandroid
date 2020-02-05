import React, { Component } from "react";
import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";


import LandingPage from './components/landingPage';
import Heatmap from './components/Heatmap'


// const Parse = require('parse');
// Parse.initialize("qd38MDMw9L37yUVcliBemAjSW6YosSXzNeOMH6C6",
//   "SijHUPTfvwXJsCYWHGW86TTDUdi3qmYyxlWsvnUm");

// Parse.serverURL = "https://aid.back4app.io";



class App extends Component {

  render() {
    return (
      // <Router >
        <div className="App"> 
        {/* <Route exact path="/" component={LandingPage} /> */}
        <Heatmap />


        </div>
      // </Router>
    )
  }
}
export default App;
