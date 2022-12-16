import React, { useEffect, useState } from "react";
import { StyledReviewShowHub } from "../component-styles/ReviewShowHub";
import { StyledUserProfile } from "../component-styles/UserProfile.style";

function ReviewsPage({currentUser, className, handleReviewUpdate}){

    // state for which Review is shown in ReviewShowHub
    const [currentReview, setCurrentReview] = useState(false)

    // state for whether that Review is being currently edited
    const [isEditing, setIsEditing] = useState(false)

    function onUpdateReview(updatedUserObj){
        setIsEditing(!isEditing)
        handleReviewUpdate(updatedUserObj)
        setCurrentReview(updatedUserObj.reviews.find((review)=> review.id === currentReview.id))
    }

    function findReview(id){
        let clickedReview = currentUser.reviews.find((review)=> review.id === id)
        setCurrentReview(clickedReview)
        setIsEditing(false)
    }
    return (
        <div className={className}>
            <StyledUserProfile currentUser = {currentUser} handleClick= {findReview}/>
            { currentReview?<StyledReviewShowHub onUpdateReview = {onUpdateReview} setCurrentReview = {setCurrentReview} currentReview = {currentReview} isEditing= {isEditing} setIsEditing = {setIsEditing}/>: <h2>(click a review for more info and options)</h2>}
        </div>
    )
}

export default ReviewsPage
