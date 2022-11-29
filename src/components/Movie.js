import React from "react";
import {useParams} from "react-router-dom"

function Movie({className, movies}){

    const params = useParams()
    const currentMovie = movies[params.movieId]

    return(
        <div className={className}>
            <h2>{currentMovie.title}</h2>
            <h4>{currentMovie.genre}</h4>
        </div>
    )
}

export default Movie;