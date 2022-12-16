import React, { useState } from "react";
import { StyledStarRating } from "../component-styles/StarRating.style";

function NewReviewForm({className, reviewingMovie}){

    const [rating, setRating] = useState(5)

    return(
    <div className={className}>
        <h2>What's your take on {reviewingMovie.title}?</h2>

        <h4>Your Rating:</h4> <StyledStarRating rating = {rating} setRating = {setRating}/>

        
    </div>
    )
}

export default NewReviewForm