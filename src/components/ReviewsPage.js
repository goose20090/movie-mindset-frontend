import React from "react";
import { RvPgStyledRating } from "../component-styles/Rating.style";

function ReviewsPage({currentUser}){
    const {reviews} = currentUser
    return (
        <div>
            <ul>{reviews.map((review)=> <RvPgStyledRating key = {review.id} title = {"movie"} review = {review} handleClick = {()=>{}}/>)}</ul>
        </div>
    )
}

export default ReviewsPage
