import React from "react";
function Movie({movie, className}){
    return (
        <div className={className}>
            <h4>{movie.title}</h4>
            <p>{movie.genre} <br/>
            Released {movie.release_date}<br/>
            Available on {movie.streaming_platform}</p>
        </div>
    )
}

export default Movie