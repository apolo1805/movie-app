import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import './MoviesPage.css';

function MoviesPage() {
    const [movies, setMovies] = React.useState([]);

    const apiKey = "ca0fa9f32ca8d7ab8daf415172adb490";
    const movieImgPrefix = "https://image.tmdb.org/t/p/w200";


    React.useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=" + apiKey).then(response => {setMovies(response.data.results)})}, []);

    return (
        <div className="p-movies">
            <Button onClick={router.history}>Back</Button>
            <h1>Movies Page</h1>
            {
                movies.map(movie => 
                    <>
                        <h3>{movie.title}</h3>
                        <img src={movieImgPrefix + movie["poster_path"]}/>
                    </>)
            }
        </div>
    );
}

export default MoviesPage;