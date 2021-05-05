import React, { Component } from 'react';
import {connect} from 'react-redux'
import {findArtById} from '../actions/artActions'

import MyCarousel from './MyCarousel'
//TODO delete this file
class Art extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "name": "Loading"
        }

        this.props.findArtById(this.props.match.params.id)

    }
    
    render() { 
        if(!!this.props.artist) {
            return (
                <div>
                    <div className="description-card">
                        <div className="description-card-cell">
                            <div className="description-card-content">
                                <MyCarousel imgs={this.props.images}/>
                                <h2>{this.props.name}</h2>

                                <div className="description-card-see">
                                    par <a href={"/artists/" + this.props.artist.id}>{this.props.artist.name}</a>
                                </div>
                                <br/>
                                <div className="description-card-sum">
                                    {this.props.description.map(d => <p>{d}</p> )}
                                </div>
                                {!!this.props.description_audio?<audio
                                    src={this.props.description_audio}
                                    controls
                                />:null}
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
    return state.artReducers.art
}

export default connect(mapsStateToProps, {findArtById})(Art);