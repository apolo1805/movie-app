import React from 'react';
import './ActorGallery.css';
import ActorCard from '../ActorCard/ActorCard';

function ActorGallery(props) {

    var actorCards = props.actorsArray.map((actor, index) => <ActorCard key={index} name={actor.getFullName()} age={actor.getAge()} image={actor.actorImage} link={actor.imdbLink}/>);


    return (
        <div className="p-actorGallery">
            <div className="col-12 col-md-6 col-s-1">
                {actorCards}
            </div>
        </div>
    );
}

export default ActorGallery;