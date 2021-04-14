import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import "../Navbar.css"

class NavBar extends Component {
    
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="/history">Point Histoire</a>
                        <a className="nav-item nav-link" href="/enigmas">Jeux</a>
                        <a className="nav-item nav-link" href="/artists">Aterliers D'Artites</a>
                        <a className="nav-item nav-link" href="/activity">Gallerie Photos</a>
                    </div>
                </div>
            </nav>
        );
    }
}


/*const mapsStateToProps = (state) => {
    return state.artistsReducers //artReducers
}


export default connect(mapsStateToProps)(NavBar);*/
export default NavBar;