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
                <div className="art">
                    <div className="art-cell">
                        <div className="art-img">
                            <img src={this.props.image_url} alt={this.state.name}/>
                        </div>
                        <div className="art-content">
                            <h2>{this.props.name}</h2>

                            <br/>
                            <div className="art-sum">
                                {!!this.props.description?this.props.description.map(d => <p>{d}</p> ):null}
                            </div>
                            {!!this.props.description_audio?<audio
                                src={this.props.description_audio}
                                controls
                            />:null}
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

const mapsStateToProps = (state) => {
    return state.artistReducers.artist
}

export default connect(mapsStateToProps, {findArtistById})(Artist);