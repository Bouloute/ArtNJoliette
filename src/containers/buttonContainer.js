import React, { Component } from 'react';
import {connect} from 'react-redux'
import "../Button.css"

import Button from "../components/Button"
import {loadArts} from "../actions/artActions"


class buttonContainer extends Component {
    //belongs in Home?
    componentDidMount() {
        this.props.loadArts()
    }
    
    renderButtons = () => {
        return this.props.arts.map(art => <Button key={art.id} title={art.enigma_name} status="" url={"/enigmas/" + art.id}/>)
    }

    render() {
        return (
            <div>
                <h2>Tentez de répondre aux énigmes pour découvrir les œuvres de
                La Joliette puis allez les rencontrer en vous aidant du plan !</h2>
                {this.renderButtons()}
            </div>
        );
    }
}

const mapsStateToProps = (state) => {
    return state.artReducers
}

export default connect(mapsStateToProps, {loadArts})(buttonContainer);