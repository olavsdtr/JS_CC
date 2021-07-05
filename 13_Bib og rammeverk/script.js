//* Eksempel med JS vs React

import React, { useState } from 'react';
import Movie from './Movie';
import { getMovies } from '../utils/movieService';

const Movies = () => {
    const [movies, setMovies] = useState([]);

    const handleClick = async () => {
        const data = await getMovies();
        setMovies(data);
    }

    return (
        <div>
            <h1>Filmer</h1>
            <button type="button" onClick={handleClick}>Klikk her for filmer</button>
            {movies?.length > 0 ? movies.map(movie => <Movie title={movie.title} actor={movie.actor} poster={movie.poster} />) : <p>Ingen filmer</p>}
        </div>
    )
}

export default Movies;

//* Hello world!

import React from 'react';
import ReactDOM from 'react-dom';

const Test = () => { return <h1>Hello World!</h1>;}

ReactDOM.render(<Test />, document.getElementById('root'));


//* JS Hello world!
<html lang="nb">
<head>
    <meta charset="UTF-8">
    <title>JavaScript Example</title>
    <script>
        const newHeading = document.createElement('h1');
        newHeading.textContent = 'Hello World!';
    </script>
</head>
<body>

</body>
</html>