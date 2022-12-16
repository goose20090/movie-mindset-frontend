import React, { useEffect, useState } from "react";
import { StyledStarRating } from "../component-styles/StarRating.style";

function EditReview({className, currentReview, onUpdateReview}){
    const[comment, setComment] = useState(currentReview.comment)
    const [rating, setRating] = useState(currentReview.rating)

    function handleSubmit(e){
        e.preventDefault();

        fetch(`http://localhost:9292/reviews/${currentReview.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                comment: comment,
                rating: rating,
            }),
        })
        .then((res)=>res.json())
        // as most values in app derive their values from reviews included in a user object, a user object with the new review has been returned.
        .then((updatedUserObj)=> onUpdateReview(updatedUserObj))
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