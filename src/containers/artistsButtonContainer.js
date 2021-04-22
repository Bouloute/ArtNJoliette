import React, { Component } from 'react';
import {connect} from 'react-redux'
import "../Button.css"

import Button from "../components/Button"
import {loadArtists} from "../actions/artistActions"
import {loadArts} from "../actions/artActions"


class artistsButtonContainer extends Component {
    //belongs in Home?
    componentDidMount() {
        this.props.loadArtists()
        this.props.loadArts()
    }
    
    renderButtons = (list, url) => {
        return list.map(obj => <Button key={obj.id} title={obj.name} status="" url={"" + url + obj.id}/>)
    }

    render() {
        return (
            <div>
                <div className="left">
                    <h2>Biographies et interviews des artistes des œuvres de La Joliette</h2>
                    {this.renderButtons(this.props.artistReducers.artists, "/artist/")}
                </div>
                <div className="right">
                    <h2>Descriptions des œuvres de La Joliette</h2>
                    {this.renderButtons(this.props.artReducers.arts, "/art/")}
                </div>
            </div>
        );
    }
}

const mapsStateToProps = (state) => {
    return state
}

export default connect(mapsStateToProps, {loadArtists, loadArts})(artistsButtonContainer);