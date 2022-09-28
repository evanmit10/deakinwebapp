import React from 'react';

const Card = (props) => {
    return (<div>
        <img src={props.avatar} alt="News" />
        <h3>{props.name}</h3>
        <p>{props.description}</p>
    </div>)

}

export default Card;