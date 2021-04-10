import React, { Component } from 'react';
import Gallery from './Gallery'

class Activity extends Component {
    render() {
        return (
            <div className="quizz">
                <div className="quizz-title ">
                    <h2>Sortie du 24 mars en partenariat avec le centre Leo Lagrange</h2>
                    <Gallery/>
                </div>
            </div>
        );
    }
}

export default Activity;