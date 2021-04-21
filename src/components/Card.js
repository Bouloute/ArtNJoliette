import React from 'react';

import '../Home.css';

import {NavLink} from 'react-router-dom'

//test on hover
const hover = (e, img) => {
    e.target.src = img
}


const Card = (props) => {
    return (
        <NavLink className="card" to={props.url}>
            <div className="card__image-holder">
                <img className="card__image" src={props.image} alt={props.title} onMouseEnter={(e) => hover(e, props.image_colour)} onMouseLeave={(e) => hover(e, props.image)}/>
            </div>
            <div className="card-title">
                <h2>
                    {props.title}
                </h2>
            </div>
        </NavLink>
    );
};

export default Card;