import React from "react";
import useCommentify from "../hooks/useCommentify";
import useStarify from "../hooks/useStarify";

function Review({className, review}){

    const {user, rating} = review
    return (
        <div className={className}>
            <div id = "review-profile">
                <p>
                    {user.name}
                </p>
                <img id = "avatar" alt = {`${user.name}'s avatar`}src={user.avatar}/>
            </div>
            <div>
                <p>{useStarify(rating)} {useCommentify(rating)}</p>
                <p>"{review.comment}"</p>
            </div>
        </div>
    )
}

export default Review;