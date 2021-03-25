import React, { Component } from 'react';
import "./App.css"

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Home from "./components/Home"
import enigmaContainer from "./containers/enigmaContainer";
import Quizz from "./components/Quizz";
import Art from "./components/Art";
import Artist from "./components/Artist";
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

class App extends Component {
  render() {
    return (
      <div>
        

        <Router>
          <NavLink to="/">
            <h1 className="title">Art N' Joliette</h1>
          </NavLink>
          
          <Route exact path="/" component={Home} />
          <Route exact path="/enigmas" component={enigmaContainer} />
          <Route exact path="/enigmas/:id" component={Quizz} />
          <Route exact path="/art/:id" component={Art} />
          <Route exact path="/artists/:id" component={Artist} />
        </Router>
            
      </div>
    );
  }
}

export default App;
