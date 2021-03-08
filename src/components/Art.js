import React, { Component } from 'react';
import {connect} from 'react-redux'
import {findArtById} from '../actions/artActions'
import artists from '../png/005-artist.png';

import audio from '../png/272168__dethrok__cicadas.wav';

class Art extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "name": "Loading"
        }

        this.props.findArtById(this.props.match.params.id)

    }

    getImage = () => {

        return artists
    }

    render() { 
        if(!!this.props.artist) {
            return (
                <div>
                    <div className="bandeau">Bien joué</div>

                    <div className="art">
                        <div class="art-cell">
                            <div class="art-img">
                                <img src={this.getImage()} alt={this.state.name}/>
                            </div>
                            <div class="art-content">
                                <h2>{this.props.name}</h2>

                                <div class="art-see">
                                    par {this.props.artist.name}
                                </div>
                                <br/>
                                <div class="art-sum">
                                    {this.props.description}
                                </div>
                                <audio
                                    src={audio}
                                    controls
                                />
                            </div>
                        </div>
                    </div>
                    
                    <div className="carte">
                        <iframe src={this.props.map_url} title={this.props.name}></iframe>
                    </div>
                    
                    
                </div>
            );
        }
        else {
            return (
                <div>
                    <div className="bandeau">{this.state.name}</div>
                </div>
            )
        }
    }
}

const mapsStateToProps = (state) => {
    return state.art
}

export default connect(mapsStateToProps, {findArtById})(Art);