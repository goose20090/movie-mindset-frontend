import React from "react";
import useStarify from "../hooks/useStarify";

function ReviewShowHub({className, currentReview}){

    const {movie} = currentReview

    return(
        <div className={className}>
            <div id = "movie-info">
                <h2>{movie.title}</h2>
                <p> Released {movie.release_date}</p>
            </div>
            <div id ="review-content">
                <p>Your Rating: {useStarify(currentReview.rating)} </p>
                <p>Your Comment: {currentReview.comment}</p>
            </div>
            <div id = "options">
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}
export default ReviewShowHub