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

    render() {
        return (
            <div className="quizz">
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
            </div>
        );
    }
}

const mapsStateToProps = (state) => {
    //TODO refator to collect only the reducer
    return state.art
}

export default connect(mapsStateToProps, {findArtById})(Quizz);