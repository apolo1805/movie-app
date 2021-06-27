import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
    return (
        <div className="p-home">
            <h1>Home Page</h1>
            <p>
                Go to <Link to="/actors">Actors Page</Link><br/>
            </p>

            <p>
                Go to <Link to="/movies">Movies Page</Link>
            </p>
        </div>
    );
}

export default HomePage;