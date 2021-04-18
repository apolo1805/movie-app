import React from 'react';
import './ActorCard.css';

function ActorCard(props) {

    return (
        <div className="c-actorCard">
            <h2>Name: {props.name}</h2>
            <h3>Age: {props.age}</h3>
            <img src={props.image} alt="actor's selfie"/>
            <a href={props.link} target="_blank" rel="noreferrer">IMDB Link</a>
        </div>
    );
}

export default ActorCard;