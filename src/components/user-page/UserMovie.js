import React from "react";

function UserMovie({className, movieReviewObj, setCurrentReview}){

    function handleClick(){
        setCurrentReview(movieReviewObj)
    }

    const {review} = movieReviewObj
    
    let starRating = ""

    for (let i = 0; i < review.rating; i ++){
        starRating = starRating + '⭐'
    }
    
    return (
        <div className={className}>
            <h4 onClick={handleClick}>
                {movieReviewObj.movie.title} {starRating}
            </h4>
        </div>
    )
}

export default UserMovie