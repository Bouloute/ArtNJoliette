import React, { Component } from 'react';
import {connect} from 'react-redux'
import {findArtById} from '../actions/artActions'

import audio from '../png/272168__dethrok__cicadas.wav';

class Art extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "name": "Loading"
        }

        this.props.findArtById(this.props.match.params.id)

    }
        slideIndex = 1;
        
    plusSlides(n){ 
        return(this.showSlides(this.slideIndex += n))
    }
    
    showSlides(n) {
        console.log("show Slides")
        var i;
        var slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) {this.slideIndex = 1}
        if (n < 1) {this.slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        if(slides.length != 0){
            slides[this.slideIndex-1].style.display = "block";
        }
    }
    
    renderSlides(){
        return(
            <div>
                <div className="mySlides">
                    <img src={this.props.image_url}/>
                </div>

                <div className="mySlides" style={{display:"none"}}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/art-n-joliette.appspot.com/o/Evasion%2F142270641_2861122120773263_7514090664490430334_n.jpg?alt=media&token=8ac125f4-d07a-46d6-be87-a99371460d54"/>
                </div>

                <a className="prev" onClick={() => this.plusSlides(-1)}>&#10094;</a>
                <a className="next" onClick={() => this.plusSlides(1)}>&#10095;</a>
            </div>
        )

    }

    render() { 
        if(!!this.props.artist) {
            return (
                <div>
                    <div className="bandeau">Bien joué</div>

                    <div className="art">
                        <div className="art-cell">
                            <div className="art-img">
                                {/*<img src={this.props.image_url} alt={this.state.name}/>*/}
                                {this.renderSlides()}
                            </div>
                            <div className="art-content">
                                <h2>{this.props.name}</h2>

                                <div className="art-see">
                                    par {this.props.artist.name}
                                </div>
                                <br/>
                                <div className="art-sum">
                                    {this.props.description}
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