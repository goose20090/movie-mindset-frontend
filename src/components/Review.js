import React from "react";

function Review({className, review}){

    console.log(review)

    const {user} = review

    return (
        <div className={className}>
            <div id = "review-profile">
                <p>
                    {user.name}
                </p>
                <img id = "avatar" alt = {`${user.name}'s avatar`}src={user.avatar}/>
            </div>
            <div>
                <p>"{review.comment}"</p>
            </div>
        </div>
    )
}

export default Review;