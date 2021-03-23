import React, { Component } from 'react';
import {connect} from 'react-redux'
import {findArtById} from '../actions/artActions'

import Puzzle from 'react-image-puzzle';

class Quizz extends Component {
    constructor(props) {
        super(props);
        this.props.findArtById(this.props.match.params.id)
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
            console.log("incorrect")
            document.getElementsByTagName('input')[0].style.color = 'red'
        }
        else {
            this.correctAnswer()
        }
    }

    correctAnswer = () => {
        window.location.pathname = "/art/" + this.props.match.params.id
    }

    renderEnigmaFromType = (type) => {
        console.log(type)
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
            default:
                return(
                    <div>
                        <div className="quizz-title ">
                            <h2>
                                {this.props.enigma}
                            </h2>
                        </div>
                        <form onSubmit={this.handleSubmit} className="answer">
                            <input name="answer" type="text" placeholder="Ma Réponse" onChange={this.handleChange}></input>
                            <button>Entrez</button>
                        </form>
                    </div>
                )
        }
        /*
        <div className="quizz-title ">
                    <h2>
                        {this.props.enigma}
                    </h2>
                </div>
        <form onSubmit={this.handleSubmit} className="answer">
                    <input name="answer" type="text" placeholder="Ma Réponse" onChange={this.handleChange}></input>
                    <button>Entrez</button>
                </form>

                <div className="testing">
                    <Puzzle 
                        image={this.props.image_url}
                        onDone={this.correctAnswer}
                    />
                </div>
                */
    }

    render() {
        return (
            <div className="quizz">
                

                {this.renderEnigmaFromType(this.props.enigma_type)}
                
            </div>
        );
    }
}

const mapsStateToProps = (state) => {
    //TODO refator to collect only the reducer
    return state.art
}

export default connect(mapsStateToProps, {findArtById})(Quizz);