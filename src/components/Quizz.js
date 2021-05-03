import React, { Component } from 'react';
import {connect} from 'react-redux'
import {findArtById} from '../actions/artActions'

import Puzzle from 'react-image-puzzle';
import PatternLock from "react-pattern-lock";
import MyCarousel from './MyCarousel';

class Quizz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drawn_path: []
        }
        this.props.findArtById(this.props.match.params.id)
    }
    
    componentDidCatch(error, info) {
        console.log("labyrinth failed again")
        //window.location.reload();
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        //TODO case sensetive
        const correctAnswers = this.props.answers.split(', ')
        if (!!! correctAnswers.find(correctAnswer => correctAnswer === this.state.answer)) {
            document.getElementsByTagName('input')[0].style.color = 'red'
        }
        else {
            this.correctAnswer()
        }
    }

    correctAnswer = () => {
        window.location.pathname = "/art/" + this.props.match.params.id
    }

    onDrawReset = () => {
        this.setState({
            drawn_path: []
        });
    };

    renderButtonFromType = (type) => {
        switch(type) {
            case "Puzzle":
                return(
                    <div className="testing">
                        <Puzzle 
                            image={this.props.enigma}
                            onDone={this.correctAnswer}
                        />
                    </div>
                )
            case "Audio":
                return(
                    <div>
                        <audio 
                            controls="controls" 
                            src="https://firebasestorage.googleapis.com/v0/b/art-n-joliette.appspot.com/o/Seconde%20Vie%2Ftomygris.mp3?alt=media&token=484aa1e3-a364-4476-a4aa-706f8b641c3d" 
                            type="audio/mpeg">
                        </audio>
                        <form onSubmit={this.handleSubmit} className="answer">
                            <input name="answer" type="text" placeholder="Ma Réponse" onChange={this.handleChange}></input>
                            <button>Entrez</button>
                        </form>
                    </div>
                )
            case "Labyrinth": 
                return(
                    <div className="labyrinth">
                        <PatternLock
                            width={ 300 }
                            //style={"margin"="auto"}
                            size={ 7 }
                            path={ this.state.drawn_path }
                            allowJumping = { false}
                            onChange={ (pattern) => {
                                this.setState({ drawn_path : pattern });
                                
                            }}
                            onFinish={() => {
                                if (this.state.drawn_path.join("-") === "4-11-12-13-20-27-26-25-32-39-46-45-44-43-36-29-30-23-24-17-10-9-8-1-0-7-14-21-28-35") {
                                    this.correctAnswer()
                                } else {
                                    this.onDrawReset();
                                }
                            }}
                        />
                    </div>
                )
            case "Quizz":
                return(
                    <div>
                        <div className="quizz-title ">
                            <h2>
                                {this.props.enigma}
                            </h2>
                            <MyCarousel imgs={this.props.enigma_photos}/>
                        </div>
                        <form onSubmit={this.handleSubmit} className="answer">
                            <input name="answer" type="text" placeholder="Ma Réponse" onChange={this.handleChange}></input>
                            <button>Entrez</button>
                        </form>
                    </div>
                )
            default:
                return(
                    <div>Something went wrong</div>
                )
        }
        
    }

    render() {
        return (
            <div className="quizz">
                {this.renderButtonFromType(this.props.enigma_type)}
            </div>
        );
    }
}

const mapsStateToProps = (state) => {
    return state.artReducers.art
}

export default connect(mapsStateToProps, {findArtById})(Quizz);