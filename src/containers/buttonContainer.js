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
        // TODO: art.name => art.enigma_name
        return this.props.arts.map(art => <Button key={art.id} title={art.name} status="" url={"/enigmas/" + art.id}/>)
    }

    render() {
        return (
            <div>
                {this.renderButtons()}
            </div>
        );
    }
}

const mapsStateToProps = (state) => {
    return state.artReducers
}

export default connect(mapsStateToProps, {loadArts})(buttonContainer);