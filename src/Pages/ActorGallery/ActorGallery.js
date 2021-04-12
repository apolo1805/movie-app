import React from 'react';
import './ActorGallery.css';
import ActorCard from './Components/ActorCard/ActorCard';

function ActorGallery() {
    return (
        <div className="p-actorGallery">
            <h1>Actor Gallery</h1>
            <ActorCard/>
        </div>
    );
}

export default ActorGallery;