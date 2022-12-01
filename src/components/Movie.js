import React from "react";
import {useParams} from "react-router-dom"

function Movie({className, movies, average}){

    const params = useParams()
    const currentMovie = movies[params.movieId]

    return(
        <div className={className}>
            <h2 id = "title">{currentMovie.title}</h2>
            <div id = "info">
                <h4>{currentMovie.genre}</h4>
                <h4>{currentMovie.streaming_platform}</h4>
                <h4>{currentMovie.release_date}</h4>
                <h4>Average Rating From Users: {average %1 == 0 ? average: average.toFixed(2)}</h4>
            </div>
        </div>
    )
}

export default Movie;