import React from "react";

function MovieList({children, className}){
    return(
        <div className={className}>
            {children}
        </div>
    )
}

export default MovieList