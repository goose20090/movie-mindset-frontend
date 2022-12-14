import React from "react";

function ReviewsPage({currentUser}){
    const {reviews} = currentUser
    return (
        <div>
            <ul>{reviews.map((review)=> <li key = {review.id}>{review.movie.title}: {review.rating}</li>)}</ul>
        </div>
    )
}

export default ReviewsPage