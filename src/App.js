import React, { Component } from 'react';
import "./App.css"
import logo from './png/logo2.png'

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
import History from "./components/History";
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavLink to="/" className="title">
            <h1 >Art N' Joliette</h1>
            <img src={logo} alt=""></img>
          </NavLink>
          
          <Route exact path="/" component={Home} />
          <Route exact path="/enigmas" component={buttonContainer} />
          <Route exact path="/enigmas/:id" component={Quizz} />
          <Route exact path="/art/:id" component={Art} />
          <Route exact path="/artists" component={artistsButtonContainer} />
          <Route exact path="/artists/:id" component={Artist} />
          <Route exact path="/activity" component={Activity} />
          <Route exact path="/history" component={History} />
        </Router>
      </div>
    );
  }
}

export default App;
