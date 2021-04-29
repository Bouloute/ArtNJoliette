import React, { Component } from 'react';

import "../Navbar.css"

import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components'

class NavBar extends Component {
    state ={
        "active": ""
    }

    testing = (event) => {
        this.setState({
            "active": " active"        
        })
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-item nav-link" to="/history" activeStyle>Point Histoire</NavLink>
                        <NavLink className="nav-item nav-link" to="/enigmas" activeStyle>Jeux</NavLink>
                        <NavLink className="nav-item nav-link" to="/artists" activeStyle>Ateliers D'Artistes</NavLink>
                        <NavLink className="nav-item nav-link" to="/activity" activeStyle>Galerie Photos</NavLink>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;



const NavLink = styled(Link)`
  align-items: center;
  text-decoration: none;
  height: 100%;
`;