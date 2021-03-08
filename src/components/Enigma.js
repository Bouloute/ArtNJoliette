import React from 'react';

import {NavLink} from 'react-router-dom'

const Enigma = (props) => {
    return (
        <NavLink className="enigma" to={"/enigmas/" + props.id}>
            <div className={"enigma-title " + props.status}>
                <h2>
                    {props.title}
                </h2>
            </div>
        </NavLink>
    );
};

export default Enigma;