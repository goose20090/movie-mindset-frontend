import React from "react";

function UserReviewShow({className, currentReview}){
    console.log(currentReview)
    let ratingComment;
    let starRating = ""
    const {movie, review} = currentReview
    
    for (let i = 0; i < review.rating; i ++){
        starRating = starRating + '⭐'
    }

    switch (review.rating){
        case 5:
            ratingComment = "Masterpiece"
            break;
        case 4:
            ratingComment= "Very Good"
            break;
        case 3:
            ratingComment = "Ok"
            break;
        case 2:
            ratingComment = "Poor"
            break;
        case 1:
            ratingComment = "Terrible"
            break;
        default:
            ratingComment = ""
            break;
    }

    return(
        <div className={className}>
            <div id = "reviews-container">
                <h3> {movie? movie.title: ""}</h3>
                <div>
                    <h4>
                        Rating: {starRating} ({ratingComment})
                    </h4>
                </div>
                <div>
                    <p>
                        Comment: {review.comment}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default UserReviewShow