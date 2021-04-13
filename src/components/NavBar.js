import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import "../Navbar.css"

class NavBar extends Component {
    
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link active" href="/history">Point Histoire <span class="sr-only">(current)</span></a>
                        <a class="nav-item nav-link" href="/enigmas">Jeux</a>
                        <a class="nav-item nav-link" href="/artists">Aterliers D'Artites</a>
                        <a class="nav-item nav-link" href="/activity">Gallerie Photos</a>
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