import React, { Component } from 'react';
import {connect} from 'react-redux'
import {findArtistById} from '../actions/artistActions'

class Artist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "name": "Loading"
        }

        this.props.findArtistById(this.props.match.params.id)
    }

    render() { 
        return (
            <div>
                <div className="description-card">
                    <div className="description-card-cell">
                        <div className="description-card-content">
                            <div className="imgBoxArt">
                                <img style={{float: "left"}} src={this.props.image_url} alt={this.state.name} />
                            </div>
                            <div className="imgBoxArt2">
                                <img style={{float: "left"}} src="https://firebasestorage.googleapis.com/v0/b/art-n-joliette.appspot.com/o/%E2%80%94Pngtree%E2%80%94brush%20texture_5054128.png?alt=media&token=fb55881c-e832-4e2d-abf0-81dd2c03a678" alt=""/>
                            </div>

                            <h2>{this.props.name}</h2>

                            <div className="description-card-sum">
                                {!!this.props.description?this.props.description.map(d => <p>{d}</p> ):null}
                            </div>
                            {!!this.props.description_audio?<audio
                                src={this.props.description_audio}
                                className="artist"
                                controls
                            />:null}
                        </div>
                    </div>
                </div>
                <a href='https://pngtree.com/so/brush-clipart'>brush clipart png from pngtree.com</a>
            </div>
        );
    }
}

const mapsStateToProps = (state) => {
    return state.artistReducers.artist
}

export default connect(mapsStateToProps, {findArtistById})(Artist);