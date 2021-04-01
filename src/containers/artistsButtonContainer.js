import React, { Component } from 'react';
import {connect} from 'react-redux'
import "../Button.css"

import Button from "../components/Button"
import {loadArtists} from "../actions/artistActions"


class artistsButtonContainer extends Component {
    //belongs in Home?
    componentDidMount() {
        this.props.loadArtists()
    }
    
    renderArtists = () => {
        //TODO change Enigma to a name more suitable
        return this.props.artists.map(artist => <Button key={artist.id} title={artist.name} status="" url={"/artists/" + artist.id}/>)
    }

    render() {
        return (
            <div>
                {this.renderArtists()}
            </div>
        );
    }
}

const mapsStateToProps = (state) => {
    return state.artistReducers
}

export default connect(mapsStateToProps, {loadArtists})(artistsButtonContainer);