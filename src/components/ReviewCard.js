import React from "react";

function ReviewCard({className, review, user}){

    let starRating = ""

    for (let i = 0; i < review.rating; i ++){
        starRating = starRating + '⭐'
    }

    console.log(starRating)
    return(
        <div className={className}>
            <p>
                {user.name}
            </p>
            <p>
                {starRating}
            </p>
        </div>
    )
}

export default ReviewCard