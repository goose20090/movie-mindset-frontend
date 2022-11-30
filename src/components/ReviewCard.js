import React from "react";

function ReviewCard({className, review, user}){

    return(
        <div className={className}>
            <p>
                {review.rating} from {user.name}
            </p>
        </div>
    )
}

export default ReviewCard