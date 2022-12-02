import React from "react";

function Review({className, currentReview}){

    const {user, review} = currentReview;
    let ratingComment;

    let starRating = ""

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
            <div id = "review-profile">
                <p>
                    {user.name}
                </p>
                <img id = "avatar" alt = {`${user.name}'s avatar`}src={user.avatar}/>
            </div>
            <div>
                <p>{starRating} ({ratingComment})</p>
                <p>"{review.comment}"</p>
            </div>
        </div>
    )
}

export default Review