import React from "react";

function MovieRatingContainer({className, children}){
    return(
        <div className={className}>
            {children}
        </div>
    )
}
export default MovieRatingContainer;