import React from "react";

function ReviewCard({className, review, user}){

    return(
        <div className={className}>
            <p>
                {user.name} gives it.....
            </p>
            <p>
                {review.rating}!!
            </p>
        </div>
    )
}

export default ReviewCard