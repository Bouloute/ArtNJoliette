import React from 'react';

import {NavLink} from 'react-router-dom'

const Button = (props) => {
    return (
        <NavLink className="button" to={props.url}>
            <div className={"button-title " + props.status}>
                <h2>
                    {props.title}
                </h2>
            </div>
        </NavLink>
    );
};

export default Button;