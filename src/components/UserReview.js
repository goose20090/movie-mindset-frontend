import React from "react";
import useCommentify from "../hooks/useCommentify";
import useStarify from "../hooks/useStarify";


function UserReview({user, review, setIsEditing}){

    const {movie} = review

    function handleClick(){

        setIsEditing(true)
    }

    return(
        <div id = "reviews-container">
        
        <div>
            <h4>
                Rating: {useStarify(review.rating)} {useCommentify(review.rating)}
            </h4>
        </div>
        <div>
            <p>
                Comment: {review.comment}
            </p>
        </div>

        <button onClick={handleClick}>Edit Review</button>
        <button>Delete Review</button>
    </div>

    )
}

export default UserReview