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
        console.log(this.props)
        //if(!!this.props.artist) {
            return (
                <div>
                    <div className="art">
                        <div className="art-cell">
                            <div className="art-img">
                                <img src={this.props.image_url} alt={this.state.name}/>
                            </div>
                            <div class="art-content">
                                <h2>{this.props.name}</h2>

                                <br/>
                                <div class="art-sum">
                                    {this.props.description}
                                </div>
        
                            </div>
                        </div>
                    </div>
                    
                </div>
            );
       /* }
        else {
            return (
                <div>
                    <div className="bandeau">{this.state.name}</div>
                </div>
            )
        }*/
    }
}

const mapsStateToProps = (state) => {
    return state.artistReducers.artist
}

export default connect(mapsStateToProps, {findArtistById})(Artist);