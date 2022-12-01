import React from "react";

function UserRating({className, review, user, setCurrentReview}){

    let starRating = ""

    for (let i = 0; i < review.rating; i ++){
        starRating = starRating + '⭐'
    }

    function handleClick(){
        setCurrentReview({
            review: review,
            user: user
        })
    }


    return(
        <div className={className}>
            <p onClick={handleClick}>
                {user.name} <br/>
                {starRating}
            </p>
        </div>
    )
}

export default UserRating