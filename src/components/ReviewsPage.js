import React, { useEffect, useState } from "react";
import { StyledReviewShowHub } from "../component-styles/ReviewShowHub";
import { StyledUserProfile } from "../component-styles/UserProfile.style";

function ReviewsPage({currentUser, className}){

    // state for which Review is shown in ReviewShowHub
    const [currentReview, setCurrentReview] = useState(false)

    // state for whether that Review is being currently edited
    const [isEditing, setIsEditing] = useState(false)

    useEffect(()=>{console.log(isEditing)}, [isEditing])

    function findReview(id){
        let clickedReview = currentUser.reviews.find((review)=> review.id === id)
        setCurrentReview(clickedReview)
        setIsEditing(false)
    }
    return (
        <div className={className}>
            <StyledUserProfile currentUser = {currentUser} handleClick= {findReview}/>
            { currentReview?<StyledReviewShowHub currentReview = {currentReview} isEditing= {isEditing} setIsEditing = {setIsEditing}/>: <h2>(click a review for more info and options)</h2>}
        </div>
    )
}

export default ReviewsPage
