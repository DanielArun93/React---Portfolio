import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const Items = (props) => {
    console.log(props,"props")
    return (
        <div>
            <p>This is Item One -- {props.match.params.id}</p>
        </div>
    )
}

export default Items;