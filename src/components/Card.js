import React from 'react';

import '../Home.css';

import {NavLink} from 'react-router-dom'

const Card = (props) => {
    return (
        <NavLink className="card" to={props.url}>
            <div className="card__image-holder">
                <img className="card__image" src={props.image} alt={props.title} />
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