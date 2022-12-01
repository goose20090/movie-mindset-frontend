import React from "react";

function Review({className, currentReview}){
    let user
    let review
    let ratingComment

    if (currentReview.user){
        user = currentReview.user
        review = currentReview.review
    }

    if(review.rating == 5){
        ratingComment = "Masterpiece"
    }
    else if (review.rating == 4){
        ratingComment = "Very Good"
    }
    else if (review.rating == 3){
        ratingComment = "Ok"
    }

    else if (review.rating == 2){
        ratingComment = "Poor"
    }

    else if (review.rating == 1){
        ratingComment = "Terrible"
    }

    return(
        <div className={className}>
            <p>
                {user.name} gave this a {review.rating}/5 ({ratingComment})
            </p>

            <p>
                "{review.comment}"
            </p>
        </div>
    )
}

export default Review