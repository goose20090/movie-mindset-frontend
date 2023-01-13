import React, { useState } from "react";
import { StyledCommentForm } from "../../component-styles/ReviewsPage/CommentForm.style";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { StyledStarRating } from "../../component-styles/ReviewsPage/StarRating.style";

function NewReviewForm({className, reviewingMovie, onAddReview, currentUser, setIsSearching}){

    const [rating, setRating] = useState(5)
    const [comment, setComment] = useState('')

    // Send Post request to backed and pass up response to change relevant state values 
    function handleSubmit(e){
        e.preventDefault()
        fetch('http://localhost:9292/reviews', {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                comment: comment,
                rating: rating,
                movie_id: reviewingMovie.id,
                user_id: currentUser.id
        }),
        })
        .then(res=>res.json())
        .then(res=> {
            onAddReview(res)
            toast(`Review of '${res.movie.title}' added to your reviews`,{
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
        <h2>What's your take on {reviewingMovie.title}?</h2> 
        <StyledStarRating rating = {rating} setRating = {setRating}/>
        <StyledCommentForm comment = {comment} setComment = {setComment} handleSubmit = {handleSubmit} handleClose= {()=>setIsSearching(true)} />


    </div>
    )
}

export default NewReviewForm