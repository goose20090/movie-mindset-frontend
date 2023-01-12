import React, { useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { StyledCommentForm } from "../../component-styles/ReviewsPage/CommentForm.style"
import { StyledStarRating } from "../../component-styles/ReviewsPage/StarRating.style";

function EditReview({className, currentReview, onUpdateReview}){
    
    const[comment, setComment] = useState(currentReview.comment)
    const [rating, setRating] = useState(currentReview.rating)


    // send PATCH request to backend and pass up response to change relevant state values
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
        .then((updatedReviewObj)=> {
            onUpdateReview(updatedReviewObj)
            toast(`Your review for '${updatedReviewObj.movie.title}' has been updated`,{
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        })
    }
    return(
        <div className={className}>
            <StyledStarRating rating={rating} setRating = {setRating}/>
            <StyledCommentForm comment = {comment} setComment = {setComment} handleSubmit = {handleSubmit}/>
        </div>
    )
}

export default EditReview;