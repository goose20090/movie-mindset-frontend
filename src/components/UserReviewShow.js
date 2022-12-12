import React from "react";
import useStarify from "../hooks/useStarify";
import useCommentify from "../hooks/useCommentify";

function UserReviewShow({className, review, users}){

    const {movie} = review

    const starRating = useStarify(review.rating)

    const ratingComment = useCommentify(review.rating)
    
    const user = users.find((userObj)=>userObj.id === review.user_id)

    return(
        <div className={className}>
        <div id = "reviews-container">
            <h1>{user.name}'s Review of {movie.title}</h1>
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

            <button>Edit Review</button>
            <button>Delete Review</button>
        </div>
    </div>
    )
}

export default UserReviewShow;