import React, { useState } from "react";
import { StyledCommentForm } from "../component-styles/CommentForm.style";
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
        .then((updatedReviewObj)=> onUpdateReview(updatedReviewObj))
    }
    return(
        <div className={className}>
            <StyledStarRating rating={rating} setRating = {setRating}/>
            <StyledCommentForm comment = {comment} setComment = {setComment} handleSubmit = {handleSubmit}/>
        </div>
    )
}

export default EditReview;