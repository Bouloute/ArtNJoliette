import React, { Component } from 'react';
import {connect} from 'react-redux'
import {findArtById} from '../actions/artActions'
import CustomComponent from './Dot.js'
import Dot from 'react-connect-the-dots';

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
                    <div className="relative-position-container">
 
 <Dot pair="a-b" connector={(props) => <div className="sweet-line" {...props} />}>
   {(ref) => <CustomComponent className="position-top-left" getRef={ref} />}
 </Dot>

 <Dot pair="b-c" connector={(props) => <div className="sweet-line thicc" {...props} />}>
   <Dot pair="a-b">
     {(ref) => <CustomComponent className="position-bottom-left" getRef={ref} />}
   </Dot>
 </Dot>

 <Dot pair="b-c">
   {(ref) => <CustomComponent className="position-bottom-right" getRef={ref} />}
 </Dot>
</div>
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