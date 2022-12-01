import React from "react";

function Review({className, currentReview}){
    let user
    let review
    let ratingComment

    if (currentReview.user){
        user = currentReview.user
        review = currentReview.review
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
            <p>
                {user.name !== undefined? user.name : ""} gave this a {review.rating}/5 ({ratingComment !== undefined? ratingComment: ""})
            </p>

            <p>
                "{review.comment !== undefined? review.comment: ""}"
            </p>
        </div>
    )
}

export default Review