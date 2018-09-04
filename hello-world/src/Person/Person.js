import React from 'react';
import './Person.css';

const Person = (props) => {
    return(
        <div className="Person">
            <p>I'm {props.name} and I'm {props.age} years old.</p>
            <p>{props.children}</p>
        </div>
    )           
}

export default Person;