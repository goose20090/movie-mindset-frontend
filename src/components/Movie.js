import React from "react";
import { useParams } from "react-router-dom";

function Movie({className, movies}){
    const params = useParams()

    console.log(params)

    return(
        <div className= {className}>
            <h1>{movies[params.movieId].title}</h1>
        </div>
    )
}

export default Movie