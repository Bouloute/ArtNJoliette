import React, { Component } from 'react';
import {connect} from 'react-redux'
import "../Enigma.css"

import Enigma from "../components/Enigma"
import {loadArts} from "../actions/artActions"


class enigmaContainer extends Component {
    //belongs in Home?
    componentDidMount() {
        this.props.loadArts()
    }
    
    renderEnigmas = () => {
        // TODO: art.name => art.enigma_name
        return this.props.arts.map(art => <Enigma key={art.id} title={art.name} status="" id={art.id}/>)
    }

    render() {
        return (
            <div>
                {this.renderEnigmas()}
            </div>
        );
    }
}

const mapsStateToProps = (state) => {
    return state
}

export default connect(mapsStateToProps, {loadArts})(enigmaContainer);