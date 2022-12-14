import React, { useEffect, useState } from "react";
import { StyledStarRating } from "../component-styles/StarRating.style";

function EditReview({className, currentReview}){
    const[comment, setComment] = useState(currentReview.comment)
    const [rating, setRating] = useState(currentReview.rating)

    function handleSubmit(e){
        e.preventDefault();
        console.log("rating: ", rating )
        console.log("comment: ", comment)
    }
    return(
        <div className={className}>
            <label>Your Rating</label>
            <StyledStarRating rating={rating} setRating = {setRating}/>
            <form className="edit-message" onSubmit={handleSubmit}>
                <label>Your Comment:</label>
                <input
                    type="text"
                    name="body"
                    autoComplete="off"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <input type="submit" value="Save" />
            </form>

        </div>
    )
}

export default EditReview;