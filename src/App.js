import React, { Component } from 'react';
import "./App.css"

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Home from "./components/Home"
import buttonContainer from "./containers/buttonContainer";
import artistsButtonContainer from "./containers/artistsButtonContainer";
import Quizz from "./components/Quizz";
import Art from "./components/Art";
import Artist from "./components/Artist";
import Activity from "./components/Activity";
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavLink to="/" className="title">
            <img src="https://firebasestorage.googleapis.com/v0/b/art-n-joliette.appspot.com/o/Logo.png?alt=media&token=07306777-6073-4856-add4-13032b091de2"></img>
            <h1 >Art N' Joliette</h1>
            <img src="https://firebasestorage.googleapis.com/v0/b/art-n-joliette.appspot.com/o/Logo.png?alt=media&token=07306777-6073-4856-add4-13032b091de2" className="right"></img>
          </NavLink>
          
          <Route exact path="/" component={Home} />
          <Route exact path="/enigmas" component={buttonContainer} />
          <Route exact path="/enigmas/:id" component={Quizz} />
          <Route exact path="/art/:id" component={Art} />
          <Route exact path="/artists" component={artistsButtonContainer} />
          <Route exact path="/artists/:id" component={Artist} />
          <Route exact path="/activity" component={Activity} />
        </Router>
      </div>
    );
  }
}

export default App;
