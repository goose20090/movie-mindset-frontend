import React, { useState } from "react";
import { StyledReviewShowHub } from "../component-styles/ReviewShowHub";
import { StyledUserProfile } from "../component-styles/UserProfile.style";

function ReviewsPage({currentUser, className, movies}){

    const [currentReview, setCurrentReview] = useState(false)
    function findReview(id){
        let clickedReview = currentUser.reviews.find((review)=> review.id === id)
        setCurrentReview(clickedReview)
    }
    return (
        <div className={className}>
            <StyledUserProfile currentUser = {currentUser} handleClick= {findReview}/>
            { currentReview?<StyledReviewShowHub currentReview = {currentReview}/>: <h2>(click a review for more info and options)</h2>}
        </div>
    )
}

export default ReviewsPage
